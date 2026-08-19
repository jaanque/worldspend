import { MetadataRoute } from 'next';
import { SPEND_ITEMS } from '@/data/spendData';

const BASE_URL = 'https://worldspend.org';
const LOCALES = ['es', 'fr', 'de', 'pt'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Home pages for all locales
  routes.push({
    url: `${BASE_URL}/`,
    lastModified: new Date(),
    changeFrequency: 'always',
    priority: 1.0,
  });

  LOCALES.forEach((locale) => {
    routes.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    });
  });



  // Individual counter stat pages for all items and locales
  SPEND_ITEMS.forEach((item) => {
    routes.push({
      url: `${BASE_URL}/stat/${item.id}`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    });

    LOCALES.forEach((locale) => {
      routes.push({
        url: `${BASE_URL}/${locale}/stat/${item.id}`,
        lastModified: new Date(),
        changeFrequency: 'always',
        priority: 0.85,
      });
    });
  });

  return routes;
}
