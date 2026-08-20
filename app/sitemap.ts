import { MetadataRoute } from 'next';
import { SPEND_ITEMS } from '@/data/spendData';

const BASE_URL = 'https://worldspend.org';
const LOCALES = ['es', 'fr', 'de', 'pt'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  const homeLanguages = {
    'en': `${BASE_URL}/`,
    'es': `${BASE_URL}/es`,
    'fr': `${BASE_URL}/fr`,
    'de': `${BASE_URL}/de`,
    'pt': `${BASE_URL}/pt`,
  };

  // Home page (default English)
  routes.push({
    url: `${BASE_URL}/`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
    alternates: {
      languages: homeLanguages,
    },
  });

  // Localized Home pages
  LOCALES.forEach((locale) => {
    routes.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: homeLanguages,
      },
    });
  });

  // Individual counter stat pages for all items and locales
  SPEND_ITEMS.forEach((item) => {
    const itemLanguages = {
      'en': `${BASE_URL}/stat/${item.id}`,
      'es': `${BASE_URL}/es/stat/${item.id}`,
      'fr': `${BASE_URL}/fr/stat/${item.id}`,
      'de': `${BASE_URL}/de/stat/${item.id}`,
      'pt': `${BASE_URL}/pt/stat/${item.id}`,
    };

    // English detail page
    routes.push({
      url: `${BASE_URL}/stat/${item.id}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: itemLanguages,
      },
    });

    // Localized detail pages
    LOCALES.forEach((locale) => {
      routes.push({
        url: `${BASE_URL}/${locale}/stat/${item.id}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
        alternates: {
          languages: itemLanguages,
        },
      });
    });
  });

  return routes;
}
