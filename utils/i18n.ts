import { Locale, Translations, SUPPORTED_LOCALES } from '@/types/i18n';
import { SpendItem, CategoryInfo } from '@/types/spend';
import { SPEND_ITEMS, CATEGORIES } from '@/data/spendData';
import { enTranslations } from '@/data/translations/en';
import { esTranslations } from '@/data/translations/es';
import { frTranslations } from '@/data/translations/fr';
import { deTranslations } from '@/data/translations/de';
import { ptTranslations } from '@/data/translations/pt';

const dictionaries: Record<Locale, Translations> = {
  en: enTranslations,
  es: esTranslations,
  fr: frTranslations,
  de: deTranslations,
  pt: ptTranslations,
};

export function getDictionary(locale: Locale = 'en'): Translations {
  return dictionaries[locale] || dictionaries.en;
}

export function isValidLocale(locale: string): locale is Locale {
  return locale in SUPPORTED_LOCALES;
}

/**
 * Returns localized SpendItems by combining base financial data with the target dictionary
 */
export function getLocalizedSpendItems(locale: Locale = 'en'): SpendItem[] {
  const dict = getDictionary(locale);

  return SPEND_ITEMS.map((item) => {
    const locItem = dict.items[item.id];
    if (!locItem) return item;

    return {
      ...item,
      title: locItem.title || item.title,
      subtitle: locItem.subtitle || item.subtitle,
      description: locItem.description || item.description,
      sourceName: locItem.sourceName || item.sourceName,
      sources: locItem.sources || item.sources,
    };
  });
}

/**
 * Returns localized categories
 */
export function getLocalizedCategories(locale: Locale = 'en'): CategoryInfo[] {
  const dict = getDictionary(locale);

  return CATEGORIES.map((cat) => {
    const locCat = dict.categories[cat.id];
    if (!locCat) return cat;

    return {
      ...cat,
      name: locCat.name || cat.name,
      description: locCat.description || cat.description,
    };
  });
}

/**
 * Generates highly targeted Frente B SEO metadata for detail pages:
 * - "How much money is spent on [category] globally"
 * - "Global [category] expenditure 2026"
 * - "Real-time [category] cost statistics"
 */
export function generateDetailSEO(item: SpendItem, locale: Locale) {
  const topic = item.title;
  const desc = item.subtitle || item.description;

  const fullDescription = `${desc}. Live 60 FPS macroeconomic statistics tracking verified with official data from ${item.sourceName} (${item.sourceYear}).`;

  let title = `Real-Time ${topic} Statistics 2026 | WorldSpend`;
  if (locale === 'es') title = `Estadísticas en Tiempo Real de ${topic} 2026 | WorldSpend`;
  if (locale === 'fr') title = `Statistiques en Direct de ${topic} 2026 | WorldSpend`;
  if (locale === 'de') title = `Echtzeit-Statistiken für ${topic} 2026 | WorldSpend`;
  if (locale === 'pt') title = `Estatísticas de ${topic} em Tempo Real 2026 | WorldSpend`;

  const canonicalPath = locale === 'en' ? `/stat/${item.id}` : `/${locale}/stat/${item.id}`;
  const baseUrl = 'https://worldspend.org';

  return {
    title,
    description: fullDescription,
    keywords: [
      topic,
      `${topic} 2026`,
      'Real-time spending statistics',
      'Macroeconomic live counter',
      item.sourceName,
      ...item.tags,
    ],
    openGraph: {
      title,
      description: fullDescription,
      url: `${baseUrl}${canonicalPath}`,
      siteName: 'WorldSpend.org',
      locale: locale === 'es' ? 'es_ES' : locale === 'fr' ? 'fr_FR' : locale === 'de' ? 'de_DE' : locale === 'pt' ? 'pt_PT' : 'en_US',
      type: 'article',
      images: [
        {
          url: `${baseUrl}/api/og?title=${encodeURIComponent(topic)}&sub=${encodeURIComponent(item.subtitle)}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: fullDescription,
      images: [`${baseUrl}/api/og?title=${encodeURIComponent(topic)}&sub=${encodeURIComponent(item.subtitle)}`],
    },
  };
}

/**
 * Computes destination URL when changing language:
 * - English (root default): /
 * - Other languages: /es, /fr, /de, /pt
 * Preserves subpages like /stat/[id] and /embed/[id]
 */
export function getLocalizedPath(targetLocale: Locale, currentPathname: string): string {
  let cleanPath = currentPathname;
  for (const loc of Object.keys(SUPPORTED_LOCALES)) {
    if (cleanPath === `/${loc}`) {
      cleanPath = '/';
      break;
    }
    if (cleanPath.startsWith(`/${loc}/`)) {
      cleanPath = cleanPath.substring(loc.length + 1);
      break;
    }
  }

  if (cleanPath === '') {
    cleanPath = '/';
  }

  if (targetLocale === 'en') {
    return cleanPath;
  }

  return cleanPath === '/' ? `/${targetLocale}` : `/${targetLocale}${cleanPath}`;
}
