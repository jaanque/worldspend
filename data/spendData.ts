import { CategoryInfo, CurrencyConfig, CurrencyCode, SpendItem } from '@/types/spend';

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar (USD)',
    rateToUSD: 1.0,
    decimals: 2,
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euro (EUR)',
    rateToUSD: 0.92,
    decimals: 2,
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    name: 'British Pound (GBP)',
    rateToUSD: 0.78,
    decimals: 2,
  },
  JPY: {
    code: 'JPY',
    symbol: '¥',
    name: 'Japanese Yen (JPY)',
    rateToUSD: 154.5,
    decimals: 0,
  },
  BTC: {
    code: 'BTC',
    symbol: '₿',
    name: 'Bitcoin (BTC)',
    rateToUSD: 0.0000105,
    decimals: 6,
  },
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'all',
    name: 'All Expenditures',
    iconName: 'Globe',
    color: '#38bdf8',
    badgeBg: 'rgba(56, 189, 248, 0.12)',
    badgeBorder: 'rgba(56, 189, 248, 0.3)',
    description: 'Complete real-time global financial overview',
  },
  {
    id: 'government',
    name: 'Government & Public Budget',
    iconName: 'Landmark',
    color: '#3b82f6',
    badgeBg: 'rgba(59, 130, 246, 0.12)',
    badgeBorder: 'rgba(59, 130, 246, 0.3)',
    description: 'Public ministries, pensions, welfare benefits, and state administration',
  },
];

export const SPEND_ITEMS: SpendItem[] = [
  // 1. Gasto en el Ministerio de Igualdad de España
  {
    id: 'spain-equality-ministry-budget',
    categoryId: 'government',
    title: 'Gasto en el Ministerio de Igualdad de España',
    subtitle: 'Presupuesto general anual asignado a políticas de igualdad y prevención de violencia de género',
    annualSpendUSD: 552420000, // €511.5M convertido a USD a tipo ~1.08
    growthRatePct: 3.2,
    iconName: 'Landmark',
    accentColor: '#8b5cf6',
    description:
      'Presupuesto anual del Ministerio de Igualdad de España fijado en 511,5 millones de euros, estructurado en 484 millones de euros gestionados directamente por los servicios centrales del ministerio y 27,5 millones de euros asignados a organismos autónomos dependientes.',
    sourceName: 'Ministerio de Igualdad del Gobierno de España & Wikipedia',
    sourceUrl: 'https://www.igualdad.gob.es/comunicacion/sala-de-prensa/la-ejecucion-presupuestaria-del-ministerio-de-igualdad-roza-el-96-en-2025-y-supera-la-del-ejercicio-anterior/',
    sources: [
      {
        name: 'Ministerio de Igualdad — Nota de Prensa Oficial de Ejecución Presupuestaria',
        url: 'https://www.igualdad.gob.es/comunicacion/sala-de-prensa/la-ejecucion-presupuestaria-del-ministerio-de-igualdad-roza-el-96-en-2025-y-supera-la-del-ejercicio-anterior/',
      },
      {
        name: 'Wikipedia — Ministerio de Igualdad (España)',
        url: 'https://es.wikipedia.org/wiki/Ministerio_de_Igualdad_(España)',
      },
    ],
    sourceYear: 2025,
    breakdown: [
      { label: 'Servicios Centrales del Ministerio', percentage: 94.6, amountUSD: 522720000 },
      { label: 'Organismos Autónomos Dependientes', percentage: 5.4, amountUSD: 29700000 },
    ],
    history: [
      { year: 2018, spendUSD: 180000000 },
      { year: 2020, spendUSD: 205000000 },
      { year: 2021, spendUSD: 450000000 },
      { year: 2022, spendUSD: 525000000 },
      { year: 2023, spendUSD: 550000000 },
      { year: 2024, spendUSD: 552420000 },
      { year: 2026, spendUSD: 570000000 },
    ],
    tags: ['ministerio de igualdad', 'pge', 'igualdad', 'gobierno españa', 'presupuestos'],
  },
];
