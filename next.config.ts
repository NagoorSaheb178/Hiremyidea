import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from unsplash used in original CSS preloads
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.oliveapp.com",
      },
    ],
  },
};

export default nextConfig;
