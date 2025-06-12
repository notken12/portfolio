/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "res.cloudinary.com",
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
