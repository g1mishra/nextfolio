
import { Metadata } from 'next';
import { getSEO, getProfile } from '@lib/config';

type Props = {
  title?: string;
  desc?: string;
  canonical?: string;
};

export const generateMetadata = ({ title, desc, canonical }: Props = {}): Metadata => {
  const seo = getSEO();
  const profile = getProfile();
  
  const metaTitle = title || seo.title;
  const metaDesc = desc || seo.description;
  const metaCanonical = canonical || seo.canonicalUrl;
  
  return {
    title: metaTitle,
    description: metaDesc,
    alternates: {
      canonical: metaCanonical,
    },
    openGraph: {
      type: 'website',
      url: seo.canonicalUrl,
      siteName: `Full-Stack Developer, ${profile.location} - ${profile.name}`,
      title: metaTitle,
      description: metaDesc,
      images: [
        {
          url: `${seo.canonicalUrl}/og.png`,
          type: 'image/png',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: seo.canonicalUrl,
      creator: profile.username,
      images: [`${seo.canonicalUrl}/og-small.png`],
      title: metaTitle,
      description: metaDesc,
    },
  };
};
