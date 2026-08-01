/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "photos.kenzhou.dev",
      },
      {
        hostname: "api.microlink.io",
      }
    ],
    formats: ["image/webp", "image/avif"],
    unoptimized: true
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
