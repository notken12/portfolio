import { MANIFEST_KEY, PHOTO_SUFFIXES, type Photo } from "./photo-manifest";

export type { Photo, PhotoExif } from "./photo-manifest";

export const PHOTOS_BASE_URL = "https://photos.kenzhou.dev";

export const PHOTOS_CACHE_TAG = "photos";

const version = (photo: Photo) => photo.hash.slice(0, 8);

export const navUrl = (photo: Photo) =>
    `${PHOTOS_BASE_URL}/${photo.slug}${PHOTO_SUFFIXES.nav}?v=${version(photo)}`;

export const thumbUrl = (photo: Photo) =>
    `${PHOTOS_BASE_URL}/${photo.slug}${PHOTO_SUFFIXES.thumb}?v=${version(photo)}`;

export const fullUrl = (photo: Photo) =>
    `${PHOTOS_BASE_URL}/${photo.slug}${PHOTO_SUFFIXES.full}?v=${version(photo)}`;

export async function getPhotos(): Promise<Photo[]> {
    const res = await fetch(`${PHOTOS_BASE_URL}/${MANIFEST_KEY}`, {
        next: { revalidate: 3600, tags: [PHOTOS_CACHE_TAG] },
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch photo manifest: ${res.status} ${res.statusText}`);
    }
    return res.json();
}
