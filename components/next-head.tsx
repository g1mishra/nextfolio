
import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Next.js',
// }

type Props = {
  title: string;
  desc: string;
  canonical: `https://g1mishra.dev${string}`;
};

export const generateMetadata = ({ title, desc, canonical = 'https://g1mishra.dev' }: Props): Metadata => {
  return {
    title,
    description: desc,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      type: 'website',
      url: 'https://g1mishra.dev',
      siteName: 'Full-Stack Developer, India - Jeevan Kumar',
      title,
      description: desc,
      images: [
        {
          url: 'https://g1mishra.dev/og.png',
          type: 'image/png',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: 'https://g1mishra.dev',
      creator: 'g1mishra',
      images: ['https://g1mishra.dev/og-small.png'],
      title,
      description: desc,
    },
  };
};
