import { type Metadata } from "next";
import { v2 as cloudinary, ResourceApiResponse } from "cloudinary";
import Image from 'next/image'
import { unstable_cache } from "next/cache";
import sharp from "sharp";

export const metadata: Metadata = {
    title: "Photography",
    description: "A collection of photography by myself.",
};

export const getBase64 = async (src: ArrayBuffer, size: number) => {
    const { info, data } = await sharp(src)
        .resize(size)
        .blur()
        .toBuffer({ resolveWithObject: true });

    return `data:image/${info.format};base64,${data.toString('base64')}`;
};

async function getBlurPreviewDataUrl(public_id: string) {
    const imageUrl = cloudinary.url(public_id)
    // fetch image content and convert to data url
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    return getBase64(arrayBuffer, 10)
}

async function getPhotos() {
    console.log('Refetching photos')
    try {
        cloudinary.config({
            secure: true,
        });
        const res = await cloudinary.api.resources_by_tag('photography', { resource_type: 'image', tags: true })
        return Promise.all(res.resources.map(async resource => ({
            ...resource,
            tags: resource.tags.filter(t => t !== 'photography'),
            blurDataURL: await getBlurPreviewDataUrl(resource.secure_url)
        })));
    } catch (error) {
        console.error("Error fetching photos from Cloudinary:", error);
        return [];
    }
}

const cachedGetPhotos = unstable_cache(getPhotos)

export default async function PhotographyPage() {
    // const photos = await cachedGetPhotos()
    const photos = await getPhotos()
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Photography</h1>

            {photos.length === 0 ? (
                <p className="text-center text-gray-500">
                    No photos found. Check your Cloudinary configuration and tags.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {photos.map((photo) => (
                        <Image
                            key={photo.public_id}
                            src={photo.secure_url}
                            alt={`Photo - ${photo.public_id}`}
                            className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                            width={photo.width}
                            height={photo.height}
                            placeholder="blur"
                            blurDataURL={photo.blurDataURL}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export const revalidate = 10