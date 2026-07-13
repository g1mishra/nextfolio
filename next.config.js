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

const domains = [
  'avatars.githubusercontent.com',
  'drive.google.com',
  'byteeat.in',
  'quire.in',
  'byteeat.vercel.app',
];

if (process.env.NEXT_PUBLIC_APP_URL) {
  try {
    const appHostname = new URL(process.env.NEXT_PUBLIC_APP_URL).hostname;
    if (appHostname && !domains.includes(appHostname)) {
      domains.push(appHostname);
    }
  } catch (e) {
    // Ignore invalid URL
  }
} else {
  domains.push('nextfolio.vercel.app');
}

if (process.env.NEXT_PUBLIC_BLOG_URL) {
  try {
    const blogHostname = new URL(process.env.NEXT_PUBLIC_BLOG_URL).hostname;
    if (blogHostname && !domains.includes(blogHostname)) {
      domains.push(blogHostname);
    }
  } catch (e) {
    // Ignore invalid URL
  }
} else {
  domains.push('blog.nextfolio.vercel.app');
}

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: domains.map((hostname) => ({
      protocol: 'https',
      hostname,
    })),
  },
  headers,
};

module.exports = nextConfig;

