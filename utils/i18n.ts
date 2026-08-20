import { Locale, Translations, SUPPORTED_LOCALES } from '@/types/i18n';
import { SpendItem, CategoryInfo } from '@/types/spend';
import { SPEND_ITEMS, CATEGORIES } from '@/data/spendData';
import { COUNTRIES_GDP_DATA } from '@/data/countriesGdpData';
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

  const PREFERRED_ORDER = [
    // 1. Actividad Criminal y Mercado Negro (illicit)
    'global-black-market-economy',
    'global-counterfeit-goods-spending',
    'global-narcotics-spending',
    'global-cocaine-opioids-spending',
    'global-cybercrime-losses',
    'global-money-laundering-total',
    'global-ransomware-damages',
    'global-art-trafficking-spending',
    'global-organ-trafficking-spending',
    'global-wildlife-trafficking-spending',
    'global-illicit-firearms-spending',

    // 2. Gasto Militar y Defensa (military)
    'global-military-spending',
    'global-nuclear-weapons-spending',
    'eu-defense-spending-total',
    'global-military-aircraft-market',

    // 3. Deportes y Competiciones (sports)
    'lamine-yamal-market-value',
    'fifa-world-cup-2026-cost',
    'fifa-world-cup-global-advertising-investment',

    // 4. Medios, Eventos y Estilismo (luxury)
    'netflix-annual-revenue',
    'amazon-prime-subscription-revenue',
    'global-cosmetic-surgery-spending',
    'disney-dtc-streaming-revenue',
    'global-cinema-box-office-revenue',
    'la-velada-production-cost',
    'warner-bros-discovery-max-revenue',
    'twitch-annual-revenue',
    'superbowl-advertising-revenue',

    // 5. Alimentación y Cesta de la Compra (food)
    'global-alcohol-spending',
    'global-online-food-delivery-market',
    'spain-individual-monthly-food-cost',
    'spain-cost-raising-child',

    // 6. Gobierno y Presupuestos Públicos (government)
    'global-space-exploration-spending',
    'spain-subsidies-public-grants-spending',
    'spain-equality-ministry-budget',

    // 7. Salud y Sanidad Pública (health)
    'economic-burden-of-tobacco',
    'spain-public-healthcare-spending',
  ];

  const catOrder = ['illicit', 'military', 'sports', 'luxury', 'food', 'government', 'health', 'country-gdp'];

  const localized = SPEND_ITEMS.map((item) => {
    const locItem = dict.items[item.id];
    
    // Dynamic localization for country GDP counters
    if (item.categoryId === 'country-gdp') {
      const countryData = COUNTRIES_GDP_DATA.find((c) => c.id === item.id);
      if (countryData) {
        let countryName = countryData.nameEs;
        let gdpPrefix = 'PIB de';
        let subtitleText = `Producto Interior Bruto nominal oficial de ${countryName} en tiempo real`;
        let descText = `El Producto Interior Bruto (PIB nominal) de ${countryName} alcanza los $${countryData.gdpMillionsUSD.toLocaleString('es-ES', { minimumFractionDigits: 2 })} millones de dólares estadounidenses (${countryData.year}), basándose en cifras consolidadas del Banco Mundial y DatosMacro.`;

        let sourcesList = item.sources;

        if (locale === 'en') {
          countryName = countryData.nameEn;
          gdpPrefix = 'GDP of';
          subtitleText = `Official nominal Gross Domestic Product of ${countryName} in real time`;
          descText = `The nominal Gross Domestic Product (GDP) of ${countryName} reaches $${countryData.gdpMillionsUSD.toLocaleString('en-US', { minimumFractionDigits: 2 })} million USD (${countryData.year}), based on World Bank and DatosMacro data.`;
          sourcesList = countryData.sources.map(s => ({
            name: s.name.replace('Banco Mundial', 'World Bank').replace('PIB', 'GDP'),
            url: s.url
          }));
        } else if (locale === 'fr') {
          countryName = countryData.nameFr;
          gdpPrefix = 'PIB de';
          subtitleText = `Produit Intérieur Brut nominal officiel de ${countryName} en temps réel`;
          descText = `Le Produit Intérieur Brut (PIB nominal) de ${countryName} atteint $${countryData.gdpMillionsUSD.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} millions de dollars US (${countryData.year}), selon la Banque Mondiale et DatosMacro.`;
          sourcesList = countryData.sources.map(s => ({
            name: s.name.replace('Banco Mundial', 'Banque Mondiale').replace('PIB', 'PIB'),
            url: s.url
          }));
        } else if (locale === 'de') {
          countryName = countryData.nameDe;
          gdpPrefix = 'BIP von';
          subtitleText = `Offizielles nominales Bruttoinlandsprodukt von ${countryName} in Echtzeit`;
          descText = `Das nominale Bruttoinlandsprodukt (BIP) von ${countryName} erreicht $${countryData.gdpMillionsUSD.toLocaleString('de-DE', { minimumFractionDigits: 2 })} Millionen USD (${countryData.year}), basierend auf Weltbank- und DatosMacro-Daten.`;
          sourcesList = countryData.sources.map(s => ({
            name: s.name.replace('Banco Mundial', 'Weltbank').replace('PIB', 'BIP'),
            url: s.url
          }));
        } else if (locale === 'pt') {
          countryName = countryData.namePt;
          gdpPrefix = 'PIB de';
          subtitleText = `Produto Interno Bruto nominal oficial de ${countryName} em tempo real`;
          descText = `O Produto Interno Bruto (PIB nominal) de ${countryName} atinge $${countryData.gdpMillionsUSD.toLocaleString('pt-PT', { minimumFractionDigits: 2 })} milhões de dólares USD (${countryData.year}), com base no Banco Mundial e DatosMacro.`;
          sourcesList = countryData.sources.map(s => ({
            name: s.name.replace('Banco Mundial', 'Banco Mundial').replace('PIB', 'PIB'),
            url: s.url
          }));
        }

        return {
          ...item,
          title: locItem?.title || `${gdpPrefix} ${countryName}`,
          subtitle: locItem?.subtitle || subtitleText,
          description: locItem?.description || descText,
          sourceName: locItem?.sourceName || item.sourceName,
          sources: locItem?.sources || sourcesList,
        };
      }
    }

    // Dynamic localization for food-spend-* country counters
    if (item.id.startsWith('food-spend-')) {
      const countryCodeMatch = item.id.replace('food-spend-', '');
      const countryData = COUNTRIES_GDP_DATA.find((c) => c.id === `gdp-${countryCodeMatch}`);
      if (countryData) {
        let countryName = countryData.nameEs;
        let foodTitlePrefix = 'Gasto en Comida de 1 Persona en';
        let descText = `Gasto medio anual en alimentación y cesta de la compra para una persona residente en ${countryName}, estimado en $${Math.round(item.annualSpendUSD / 12)} USD mensuales según el informe global de Nutrola.`;
        let sourceTitle = `Nutrola — Informe Global de Gasto Mensual en Alimentación (${countryName})`;

        if (locale === 'en') {
          countryName = countryData.nameEn;
          foodTitlePrefix = 'Food Spending per Person in';
          descText = `Average annual expenditure on food and groceries for a resident in ${countryName}, estimated at $${Math.round(item.annualSpendUSD / 12)} USD monthly according to Nutrola global report.`;
          sourceTitle = `Nutrola — Global Monthly Food Spending Report (${countryName})`;
        } else if (locale === 'fr') {
          countryName = countryData.nameFr;
          foodTitlePrefix = 'Dépenses Alimentaires par Personne en';
          descText = `Dépenses annuelles moyennes en alimentation pour un résident en ${countryName}, estimées à $${Math.round(item.annualSpendUSD / 12)} USD par mois selon le rapport global Nutrola.`;
          sourceTitle = `Nutrola — Rapport Mondial sur les Dépenses Alimentaires Mensuelles (${countryName})`;
        } else if (locale === 'de') {
          countryName = countryData.nameDe;
          foodTitlePrefix = 'Ausgaben für Lebensmittel pro Person in';
          descText = `Durchschnittliche jährliche Ausgaben für Lebensmittel für eine Person in ${countryName}, geschätzt auf $${Math.round(item.annualSpendUSD / 12)} USD monatlich laut Nutrola-Bericht.`;
          sourceTitle = `Nutrola — Globaler Bericht über monatliche Lebensmittelausgaben (${countryName})`;
        } else if (locale === 'pt') {
          countryName = countryData.namePt;
          foodTitlePrefix = 'Gastos com Alimentação por Pessoa em';
          descText = `Gastos médios anuais com alimentação para um residente en ${countryName}, estimados em $${Math.round(item.annualSpendUSD / 12)} USD mensais de acordo com o relatório global Nutrola.`;
          sourceTitle = `Nutrola — Relatório Global de Gastos Mensais com Alimentação (${countryName})`;
        }

        return {
          ...item,
          title: locItem?.title || `${foodTitlePrefix} ${countryName}`,
          description: locItem?.description || descText,
          sources: [
            {
              name: sourceTitle,
              url: 'https://nutrola.app/es/blog/how-much-does-average-person-spend-on-food-per-month',
            },
          ],
        };
      }
    }

    return {
      ...item,
      title: locItem?.title || item.title,
      subtitle: locItem?.subtitle || item.subtitle,
      description: locItem?.description || item.description,
      sourceName: locItem?.sourceName || item.sourceName,
      sources: locItem?.sources || item.sources,
    };
  });

  return localized.sort((a, b) => {
    const catIdxA = catOrder.indexOf(a.categoryId);
    const catIdxB = catOrder.indexOf(b.categoryId);
    if (catIdxA !== catIdxB) {
      return catIdxA - catIdxB;
    }

    const idxA = PREFERRED_ORDER.indexOf(a.id);
    const idxB = PREFERRED_ORDER.indexOf(b.id);

    if (idxA !== -1 && idxB !== -1) {
      return idxA - idxB;
    }
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;

    return b.annualSpendUSD - a.annualSpendUSD;
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

  let title = `How much money is spent on ${topic} annually? - WorldSpend`;
  if (locale === 'es') title = `¿Cuánto dinero se gasta en ${topic} al año? - WorldSpend`;
  if (locale === 'fr') title = `Combien d'argent est dépensé en ${topic} par an? - WorldSpend`;
  if (locale === 'de') title = `Wie viel Geld wird jährlich für ${topic} ausgegeben? - WorldSpend`;
  if (locale === 'pt') title = `Quanto dinheiro é gasto em ${topic} por ano? - WorldSpend`;

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
