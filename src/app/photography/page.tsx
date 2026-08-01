import { type Metadata } from "next";
import Image from 'next/image'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Aperture, X } from "lucide-react";
import { getPhotos, thumbUrl, fullUrl } from "@/lib/photos";

export const metadata: Metadata = {
    title: "Photography",
    description: "A collection of my photography.",
};

export default async function PhotographyPage() {
    const photos = await getPhotos()
    return (
        <div className="container mx-auto px-4 py-8">
            <Breadcrumb className="pb-8 px-2">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Ken Zhou</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="flex gap-2 items-center"><Aperture className="size-4" /> Photography</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {photos.length === 0 ? (
                <p className="text-center text-gray-500">
                    No photos found. Run scripts/sync-photos.ts to populate the photo bucket.
                </p>
            ) : (
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2">
                    {photos.map((photo) => (
                        <div key={photo.slug} className="group break-inside-avoid mb-4">
                            <a href={`#${photo.slug}`}>
                                <div className="p-2 border border-transparent hover:border-muted-foreground transition-colors duration-200">
                                    <Image
                                        src={thumbUrl(photo)}
                                        alt={`Photo - ${photo.slug}`}
                                        className="w-full h-auto object-cover transition-transform duration-300 ease-in-out"
                                        width={photo.width}
                                        height={photo.height}
                                        placeholder="blur"
                                        blurDataURL={photo.blurDataURL}
                                    />
                                    {photo.exif && (
                                        <div className="mt-2 text-xs">
                                            <div className="mb-1 flex flex-wrap gap-x-4 text-xs text-muted-foreground justify-between">
                                                <span>{photo.exif.FocalLength}mm</span>
                                                <span>f/{photo.exif.FNumber}</span>
                                                <span>1/{1 / photo.exif.ExposureTime}s</span>
                                                <span>ISO {photo.exif.ISO}</span>
                                                <span>{photo.exif.ExposureCompensation === 0 ? "±" : photo.exif.ExposureCompensation > 0 ? "+" : ""}{photo.exif.ExposureCompensation} EV</span>
                                            </div>
                                            <div className="flex gap-2 flex-wrap">
                                                <span className="font-semibold">{photo.exif.Make} {photo.exif.Model}</span>
                                                <span className="text-muted-foreground">{photo.exif.LensModel}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </a>

                            <div id={photo.slug} className="fixed inset-0 z-50 hidden items-center justify-center bg-background/80 backdrop-blur-sm target:flex">
                                <a href="#" className="absolute inset-0" aria-label="Close modal"></a>
                                <div className="relative z-10 flex flex-col h-full w-full items-center justify-center px-4 py-16 pointer-events-none">
                                    <div
                                        className="relative pointer-events-auto max-h-full max-w-full"
                                        style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                                    >
                                        <Image
                                            src={fullUrl(photo)}
                                            alt={`Photo - ${photo.slug}`}
                                            className="block h-full w-full"
                                            width={photo.width}
                                            height={photo.height}
                                            placeholder="blur"
                                            blurDataURL={photo.blurDataURL}
                                        />
                                    </div>
                                    {photo.exif && (
                                        <div className="mt-2 text-xs pointer-events-auto">
                                            <div className="mb-1 flex flex-wrap gap-x-4 text-xs text-muted-foreground justify-between">
                                                <span>{photo.exif.FocalLength}mm</span>
                                                <span>f/{photo.exif.FNumber}</span>
                                                <span>1/{1 / photo.exif.ExposureTime}s</span>
                                                <span>ISO {photo.exif.ISO}</span>
                                                <span>{photo.exif.ExposureCompensation === 0 ? "±" : ""}{photo.exif.ExposureCompensation} EV</span>
                                            </div>
                                            <div className="flex gap-2 flex-wrap">
                                                <span className="font-semibold">{photo.exif.Make} {photo.exif.Model}</span>
                                                <span className="text-muted-foreground">{photo.exif.LensModel}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <a href="#" className="absolute top-4 right-4 z-20 transition-colors"><X className="size-4" /></a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
