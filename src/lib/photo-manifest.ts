// Schema of manifest.json in the R2 photo bucket, shared between the site
// and scripts/sync-photos.ts (which generates the manifest and variants).

export const MANIFEST_KEY = "manifest.json";

export const PHOTO_SUFFIXES = {
    nav: "-nav.webp",
    thumb: "-thumb.webp",
    full: "-full.webp",
} as const;

export interface PhotoExif {
    FocalLength: number;
    FNumber: number;
    ExposureTime: number;
    ISO: number;
    ExposureCompensation: number;
    Make: string;
    Model: string;
    LensModel: string;
}

export interface Photo {
    slug: string;
    width: number;
    height: number;
    hash: string;
    takenAt: string;
    blurDataURL: string;
    exif: PhotoExif | null;
}
