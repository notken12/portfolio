import { type Metadata } from "next";
import { v2 as cloudinary, ResourceApiResponse } from "cloudinary";
import Image from 'next/image'
import { unstable_cache } from "next/cache";
import sharp from "sharp";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Aperture, X } from "lucide-react";
import exifr from 'exifr'

export const metadata: Metadata = {
    title: "Photography",
    description: "A collection of photography by myself.",
};

const getBase64 = async (src: ArrayBuffer, size: number) => {
    const { info, data } = await sharp(src)
        .resize(size)
        .blur()
        .toBuffer({ resolveWithObject: true });

    return `data:image/${info.format};base64,${data.toString('base64')}`;
};

async function getBlurPreviewAndMetadata(public_id: string) {
    const imageUrl = cloudinary.url(public_id, { transformation: [{ crop: 'thumb', width: 30 }] })
    // fetch image content and convert to data url
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const metadata = await exifr.parse(Buffer.from(arrayBuffer))
    return { blurDataURL: await getBase64(arrayBuffer, 8), metadata }
}

async function getPhotos() {
    console.log('Refetching photos')
    try {
        cloudinary.config({
            secure: true,
        });
        const res = await cloudinary.api.resources_by_tag('photography', { resource_type: 'image', tags: true })
        return Promise.all(res.resources.map(async resource => {
            const { blurDataURL, metadata } = await getBlurPreviewAndMetadata(resource.secure_url)
            return {
                ...resource,
                tags: resource.tags.filter(t => t !== 'photography'),
                blurDataURL,
                metadata
            }
        }));
    } catch (error) {
        console.error("Error fetching photos from Cloudinary:", error);
        return [];
    }
}

const cachedGetPhotos = unstable_cache(getPhotos)

const getThumbUrl = (public_id: string) => {
    return cloudinary.url(public_id, { transformation: [{ crop: 'thumb', width: 1000 }, { quality: "auto:good", format: 'auto' }] })
}

export default async function PhotographyPage() {
    const photos = await cachedGetPhotos()
    console.log(photos.map(p => p.metadata))
    return (
        <div className="container mx-auto px-4 py-8">
            <Breadcrumb className="pb-8">
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
                    No photos found. Check your Cloudinary configuration and tags.
                </p>
            ) : (
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                    {photos.map((photo) => {
                        const photoId = photo.public_id.replace(/[^\w-]/g, '-');
                        return (
                            <div key={photo.public_id} className="group break-inside-avoid mb-4">
                                <a href={`#${photoId}`}>
                                    <div className="overflow-hidden outline outline-transparent hover:outline-border transition-colors">
                                        <Image
                                            src={getThumbUrl(photo.public_id)}
                                            alt={`Photo - ${photo.public_id}`}
                                            className="w-full h-auto object-cover transition-transform duration-300 ease-in-out"
                                            width={photo.width}
                                            height={photo.height}
                                            placeholder="blur"
                                            blurDataURL={photo.blurDataURL}
                                        />
                                    </div>
                                </a>
                                {photo.metadata && (
                                    <div className="mt-2 text-xs">
                                        <div className="mb-1 flex flex-wrap gap-x-4 text-xs text-muted-foreground justify-between">
                                            <span>{photo.metadata.FocalLength}mm</span>
                                            <span>f/{photo.metadata.FNumber}</span>
                                            <span>1/{1 / photo.metadata.ExposureTime}s</span>
                                            <span>ISO {photo.metadata.ISO}</span>
                                            <span>{photo.metadata.ExposureCompensation === 0 ? "±" : ""}{photo.metadata.ExposureCompensation} EV</span>
                                        </div>
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="font-semibold">{photo.metadata.Make} {photo.metadata.Model}</span>
                                            <span className="text-muted-foreground">{photo.metadata.LensModel}</span>
                                        </div>

                                    </div>
                                )}
                                <div id={photoId} className="fixed inset-0 z-50 hidden items-center justify-center bg-background/80 backdrop-blur-sm target:flex">
                                    <a href="#" className="absolute inset-0" aria-label="Close modal"></a>
                                    <div className="relative z-10 flex h-full w-full items-center justify-center p-4 lg:p-8 pointer-events-none">
                                        <div
                                            className="relative pointer-events-auto max-h-full max-w-full"
                                            style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                                        >
                                            <Image
                                                src={photo.secure_url}
                                                alt={`Photo - ${photo.public_id}`}
                                                className="block h-full w-full"
                                                width={photo.width}
                                                height={photo.height}
                                                placeholder="blur"
                                                blurDataURL={photo.blurDataURL}
                                            />
                                        </div>
                                    </div>
                                    <a href="#" className="absolute top-4 right-4 z-20 transition-colors"><X /></a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
}

export const revalidate = 10