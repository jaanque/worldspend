export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'BTC';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rateToUSD: number; // 1 USD = X Currency
  decimals: number;
}

export type TimeframeMode = 'year' | 'today' | 'session' | 'second' | 'custom';

export type CategoryId =
  | 'all'
  | 'health'
  | 'illicit'
  | 'science'
  | 'advertising'
  | 'food'
  | 'military'
  | 'tech'
  | 'energy'
  | 'luxury'
  | 'gambling'
  | 'corruption'
  | 'society'
  | 'government'
  | 'country-gdp'
  | 'sports';

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  iconName: string;
  color: string;
  badgeBg: string;
  badgeBorder: string;
  description: string;
}

export interface SpendItem {
  id: string;
  categoryId: CategoryId;
  title: string;
  subtitle: string;
  annualSpendUSD: number; // Base annual expenditure in USD
  growthRatePct?: number; // Estimated annual growth %
  iconName: string;
  accentColor: string;
  description: string;
  sourceName: string;
  sourceUrl?: string;
  sources?: {
    name: string;
    url: string;
  }[];
  sourceYear: number;
  breakdown?: {
    label: string;
    percentage: number;
    amountUSD?: number;
  }[];
  history?: {
    year: number;
    spendUSD: number;
  }[];
  countryCode?: string; // e.g. 'ES', 'US', 'GLOBAL', etc.
  countryName?: string; // e.g. 'España', 'Estados Unidos', 'Mundial'
  curiosities?: string[];
  impactFact?: string;
  tags: string[];
}
