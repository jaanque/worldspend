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
export function generateDetailSEO(item: SpendItem, locale: Locale = 'en') {
  const topic = item.title;
  const desc = item.description || item.subtitle;

  switch (locale) {
    case 'es':
      return {
        title: `Estadísticas del ${topic} en Tiempo Real 2026 | WorldSpend`,
        description: `En 2026, ${desc} Consulta las estadísticas de gasto macroeconómico en tiempo real con datos de ${item.sourceName}.`,
        keywords: [
          topic,
          `Gasto ${topic} 2026`,
          `Estadísticas en tiempo real`,
          `Presupuesto y cifras oficiales`,
          `WorldSpend estadísticas`,
        ],
      };

    case 'fr':
      return {
        title: `Statistiques des ${topic} en Temps Réel 2026 | WorldSpend`,
        description: `En 2026, ${desc} Suivi macroéconomique en direct selon les données de ${item.sourceName}.`,
        keywords: [
          topic,
          `Dépenses ${topic} 2026`,
          `Statistiques en direct`,
          `Données officielles`,
        ],
      };

    case 'de':
      return {
        title: `Echtzeit-Statistiken für ${topic} 2026 | WorldSpend`,
        description: `Im Jahr 2026: ${desc} Echtzeit-Verfolgung nach offiziellen Daten der ${item.sourceName}.`,
        keywords: [
          topic,
          `Ausgaben ${topic} 2026`,
          `Echtzeit-Statistiken`,
          `Offizielle Daten`,
        ],
      };

    case 'pt':
      return {
        title: `Estatísticas de ${topic} em Tempo Real 2026 | WorldSpend`,
        description: `Em 2026, ${desc} Acompanhamento macroeconômico em tempo real com dados da ${item.sourceName}.`,
        keywords: [
          topic,
          `Gastos com ${topic} 2026`,
          `Estatísticas em tempo real`,
          `Dados oficiais`,
        ],
      };

    case 'en':
    default:
      return {
        title: `Real-Time ${topic} Statistics 2026 | WorldSpend`,
        description: `In 2026: ${desc} Real-time macroeconomic statistics tracker monitoring live expenditure with verified data from ${item.sourceName}.`,
        keywords: [
          topic,
          `${topic} expenditure 2026`,
          `Real-time cost statistics`,
          `Live financial tracking clock`,
        ],
      };
  }
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
