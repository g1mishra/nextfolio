import { MetadataRoute } from 'next';
import { getSEO } from '@lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const seo = getSEO();
  const baseUrl = seo.canonicalUrl || 'https://nextfolio.vercel.app';
  // Strip trailing slash if present
  const base = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

  const routes = ['', '/about-me', '/projects', '/contact-me'];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
