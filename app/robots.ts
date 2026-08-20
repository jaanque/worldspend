import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/embed/',
          '/*/embed/',
          '/privacy',
          '/terms',
          '/cookies',
          '/legal',
          '/*/privacy',
          '/*/terms',
          '/*/cookies',
          '/*/legal',
        ],
      },
    ],
    sitemap: 'https://worldspend.org/sitemap.xml',
  };
}
