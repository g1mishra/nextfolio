/** @type {import('next').NextConfig} */

const headers = async () => {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ];
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'drive.google.com',
      'g1mishra.dev',
      'blog.g1mishra.dev',
      'byteeat.in',
      'quire.in',
    ],
  },
  headers,
};

module.exports = nextConfig;
