/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
    ],
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
    formats: ["image/webp"],
  },
  experimental: {
    optimizeCss: true,
  },
  // webpack: (
  //   config,
  //   { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  // ) => {
  //   // Important: return the modified config
  //   config.module.rules.push({
  //     test: ''
  //   })
  //   return config;
  // },
};

export default nextConfig;
