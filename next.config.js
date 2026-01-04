/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async redirects() {
    return [
      // redirect www → non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.hoursfromnow.tech',
          },
        ],
        destination: 'https://hoursfromnow.tech/:path*',
        permanent: true,
      },

      // redirect ALL query parameters to clean homepage
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'SA',
          },
        ],
        destination: '/',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'MA',
          },
        ],
        destination: '/',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'ND',
          },
        ],
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
