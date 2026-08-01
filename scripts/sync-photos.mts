// Syncs a local folder of photos to the R2 bucket behind photos.kenzhou.dev.
// For each image it uploads -nav/-thumb/-full webp variants plus manifest.json
// (schema in src/lib/photo-manifest.ts), skips unchanged files by content hash,
// and prunes bucket objects whose source photo was deleted locally.
//
// Usage:
//   R2_ACCOUNT_ID=... R2_ACCESS_KEY_ID=... R2_SECRET_ACCESS_KEY=... R2_BUCKET=... \
//     npm run sync-photos -- ~/path/to/photos
//
// Optional: set SITE_URL and REVALIDATION_SECRET to revalidate the live site after syncing.

import { createHash } from "crypto";
import { readdir, readFile, stat } from "fs/promises";
import path from "path";
import {
    DeleteObjectsCommand,
    GetObjectCommand,
    ListObjectsV2Command,
    PutObjectCommand,
    S3Client,
} from "@aws-sdk/client-s3";
import exifr from "exifr";
import sharp from "sharp";
import {
    MANIFEST_KEY,
    PHOTO_SUFFIXES,
    type Photo,
    type PhotoExif,
} from "../src/lib/photo-manifest";

const folder = process.argv[2];
if (!folder) {
    console.error("Usage: npm run sync-photos -- <folder>");
    process.exit(1);
}

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff"]);
const NAV_SIZE = 160;
const THUMB_WIDTH = 1000;
const FULL_MAX_EDGE = 4096;
const BLUR_SIZE = 8;
const CONCURRENCY = 8;
const IMMUTABLE_CACHE = "public, max-age=31536000, immutable";
const MANIFEST_CACHE = "public, max-age=60";
const EXIF_PICK = [
    "FocalLength",
    "FNumber",
    "ExposureTime",
    "ISO",
    "ExposureCompensation",
    "Make",
    "Model",
    "LensModel",
    "DateTimeOriginal",
];

function requireEnv(name: string): string {
    const value = process.env[name];
    if (!value) throw new Error(`Missing required env var ${name}`);
    return value;
}

const bucket = requireEnv("R2_BUCKET");

const s3 = new S3Client({
    region: "auto",
    endpoint: `https://${requireEnv("R2_ACCOUNT_ID")}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: requireEnv("R2_ACCESS_KEY_ID"),
        secretAccessKey: requireEnv("R2_SECRET_ACCESS_KEY"),
    },
});

const slugOf = (file: string) => path.parse(file).name.replace(/[^\w-]/g, "-");

async function mapLimit<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
    const results: R[] = new Array(items.length);
    let next = 0;
    await Promise.all(
        Array.from({ length: Math.min(limit, items.length) }, async () => {
            while (next < items.length) {
                const index = next++;
                results[index] = await fn(items[index]);
            }
        }),
    );
    return results;
}

async function putObject(key: string, body: Buffer | string, contentType: string, cacheControl: string) {
    await s3.send(
        new PutObjectCommand({
            Bucket: bucket,
            Key: key,
            Body: body,
            ContentType: contentType,
            CacheControl: cacheControl,
        }),
    );
}

async function getExistingManifest(): Promise<Photo[]> {
    try {
        const res = await s3.send(new GetObjectCommand({ Bucket: bucket, Key: MANIFEST_KEY }));
        if (!res.Body) throw new Error("Manifest response had no body");
        return JSON.parse(await res.Body.transformToString());
    } catch (error) {
        if (error instanceof Error && error.name === "NoSuchKey") return [];
        throw error;
    }
}

async function processPhoto(filePath: string, previous: Photo | undefined): Promise<Photo> {
    const slug = slugOf(filePath);
    const buffer = await readFile(filePath);
    const hash = createHash("sha256").update(buffer).digest("hex");
    if (previous && previous.hash === hash) {
        console.log(`unchanged ${slug}`);
        return previous;
    }

    console.log(`uploading ${slug}`);
    const image = sharp(buffer).rotate();
    const [navBuf, thumbBuf, fullBuf, blurBuf, meta, parsed] = await Promise.all([
        image
            .clone()
            .resize(NAV_SIZE, NAV_SIZE, { fit: "cover", position: sharp.strategy.attention })
            .webp({ quality: 80 })
            .toBuffer(),
        image
            .clone()
            .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
            .webp({ quality: 80 })
            .toBuffer(),
        image
            .clone()
            .resize({ width: FULL_MAX_EDGE, height: FULL_MAX_EDGE, fit: "inside", withoutEnlargement: true })
            .webp({ quality: 85 })
            .toBuffer(),
        image.clone().resize(BLUR_SIZE).blur().webp().toBuffer(),
        image.metadata(),
        exifr.parse(buffer, EXIF_PICK),
    ]);

    if (!meta.width || !meta.height) throw new Error(`Could not read dimensions of ${filePath}`);
    const swapped = (meta.orientation ?? 1) >= 5;
    const width = swapped ? meta.height : meta.width;
    const height = swapped ? meta.width : meta.height;

    const exif: PhotoExif | null = parsed
        ? {
              FocalLength: parsed.FocalLength,
              FNumber: parsed.FNumber,
              ExposureTime: parsed.ExposureTime,
              ISO: parsed.ISO,
              ExposureCompensation: parsed.ExposureCompensation,
              Make: parsed.Make,
              Model: parsed.Model,
              LensModel: parsed.LensModel,
          }
        : null;
    const takenAt = (
        parsed?.DateTimeOriginal instanceof Date ? parsed.DateTimeOriginal : (await stat(filePath)).mtime
    ).toISOString();

    await Promise.all([
        putObject(slug + PHOTO_SUFFIXES.nav, navBuf, "image/webp", IMMUTABLE_CACHE),
        putObject(slug + PHOTO_SUFFIXES.thumb, thumbBuf, "image/webp", IMMUTABLE_CACHE),
        putObject(slug + PHOTO_SUFFIXES.full, fullBuf, "image/webp", IMMUTABLE_CACHE),
    ]);

    return {
        slug,
        width,
        height,
        hash,
        takenAt,
        blurDataURL: `data:image/webp;base64,${blurBuf.toString("base64")}`,
        exif,
    };
}

async function pruneStaleObjects(photos: Photo[]) {
    const expected = new Set([
        MANIFEST_KEY,
        ...photos.flatMap((photo) => Object.values(PHOTO_SUFFIXES).map((suffix) => photo.slug + suffix)),
    ]);

    const keys: string[] = [];
    let continuationToken: string | undefined;
    do {
        const page = await s3.send(
            new ListObjectsV2Command({ Bucket: bucket, ContinuationToken: continuationToken }),
        );
        keys.push(...(page.Contents ?? []).flatMap((object) => (object.Key ? [object.Key] : [])));
        continuationToken = page.NextContinuationToken;
    } while (continuationToken);

    const stale = keys.filter((key) => !expected.has(key));
    for (let i = 0; i < stale.length; i += 1000) {
        await s3.send(
            new DeleteObjectsCommand({
                Bucket: bucket,
                Delete: { Objects: stale.slice(i, i + 1000).map((Key) => ({ Key })) },
            }),
        );
    }
    if (stale.length > 0) console.log(`pruned ${stale.length} stale object(s)`);
}

async function revalidateSite() {
    const siteUrl = process.env.SITE_URL;
    const secret = process.env.REVALIDATION_SECRET;
    if (!siteUrl || !secret) {
        console.log("skipping site revalidation (set SITE_URL and REVALIDATION_SECRET to enable)");
        return;
    }
    const res = await fetch(`${siteUrl}/photography/revalidate?secret=${secret}`, { method: "POST" });
    if (!res.ok) throw new Error(`Revalidation failed: ${res.status} ${res.statusText}`);
    console.log("revalidated site");
}

const files = (await readdir(folder))
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .map((file) => path.join(folder, file));
if (files.length === 0) throw new Error(`No image files found in ${folder}`);

const slugs = files.map(slugOf);
const duplicates = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
if (duplicates.length > 0) {
    throw new Error(`Duplicate photo names after slugifying: ${[...new Set(duplicates)].join(", ")}`);
}

const previousBySlug = new Map((await getExistingManifest()).map((photo) => [photo.slug, photo]));
const photos = await mapLimit(files, CONCURRENCY, (file) => processPhoto(file, previousBySlug.get(slugOf(file))));
photos.sort((a, b) => (a.takenAt < b.takenAt ? 1 : -1));

await putObject(MANIFEST_KEY, JSON.stringify(photos), "application/json", MANIFEST_CACHE);
console.log(`synced ${photos.length} photo(s) to ${bucket}`);

await pruneStaleObjects(photos);
await revalidateSite();
