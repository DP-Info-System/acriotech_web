import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.acriotech.com',
          },
        ],
        destination: 'https://acriotech.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
