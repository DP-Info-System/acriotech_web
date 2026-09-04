import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  productionBrowserSourceMaps: false,
  typescript: { ignoreBuildErrors: true },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://analytics.ahrefs.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https://images.unsplash.com data: https://acriotech.com; connect-src 'self' https://www.google-analytics.com https://analytics.ahrefs.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'",
          },
          {
            key: 'Link',
            value: '<https://acriotech.com/llms.txt>; rel="alternate"; type="text/markdown"',
          },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/markdown; charset=utf-8',
          },
        ],
      },
    ];
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
