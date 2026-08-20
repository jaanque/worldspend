import { MetadataRoute } from 'next';
import { SPEND_ITEMS } from '@/data/spendData';
import { getLocalizedSpendItems, getLocalizedPageSlug } from '@/utils/i18n';
import { Locale } from '@/types/i18n';

const BASE_URL = 'https://worldspend.org';
const LOCALES: Locale[] = ['es', 'fr', 'de', 'pt'];

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

  // Static Pages (Calculator, Cookies, Privacy, Terms, Legal)
  const staticPages = ['calculator', 'cookies', 'privacy', 'terms', 'legal'];
  staticPages.forEach((page) => {
    const pageLanguages = {
      'en': `${BASE_URL}/${getLocalizedPageSlug(page, 'en')}`,
      'es': `${BASE_URL}/es/${getLocalizedPageSlug(page, 'es')}`,
      'fr': `${BASE_URL}/fr/${getLocalizedPageSlug(page, 'fr')}`,
      'de': `${BASE_URL}/de/${getLocalizedPageSlug(page, 'de')}`,
      'pt': `${BASE_URL}/pt/${getLocalizedPageSlug(page, 'pt')}`,
    };

    // English static page
    routes.push({
      url: pageLanguages['en'],
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: {
        languages: pageLanguages,
      },
    });

    // Localized static pages
    LOCALES.forEach((locale) => {
      routes.push({
        url: pageLanguages[locale],
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
          languages: pageLanguages,
        },
      });
    });
  });

  // Pre-calculate localized items for each locale to prevent massive performance bottleneck (O(N^2) in nested loops)
  const localesList: Locale[] = ['en', 'es', 'fr', 'de', 'pt'];
  const cachedLocalizedItems = localesList.reduce((acc, loc) => {
    acc[loc] = getLocalizedSpendItems(loc);
    return acc;
  }, {} as Record<Locale, ReturnType<typeof getLocalizedSpendItems>>);

  // Individual counter stat pages for all items and locales
  SPEND_ITEMS.forEach((item) => {
    const itemLanguages: Record<string, string> = {};
    
    localesList.forEach((loc) => {
      const locItems = cachedLocalizedItems[loc];
      const locItem = locItems.find((s) => s.id === item.id);
      const slug = locItem?.slug || item.id;
      itemLanguages[loc] = loc === 'en'
        ? `${BASE_URL}/stat/${slug}`
        : `${BASE_URL}/${loc}/stat/${slug}`;
    });

    // English detail page
    routes.push({
      url: itemLanguages['en'],
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
        url: itemLanguages[locale],
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
