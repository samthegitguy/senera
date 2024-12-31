import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'omeo.one',
        port: '80',
        pathname: 'images/**',
      },
    ],
  },
};

export default nextConfig;
