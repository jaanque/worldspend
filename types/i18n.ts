import { CategoryId } from '@/types/spend';

export type Locale = 'en' | 'es' | 'fr' | 'de' | 'pt';

export interface LocaleConfig {
  code: Locale;
  name: string;
  nativeName: string;
  isDefault?: boolean;
}

export const SUPPORTED_LOCALES: Record<Locale, LocaleConfig> = {
  en: { code: 'en', name: 'English', nativeName: 'English', isDefault: true },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español' },
  fr: { code: 'fr', name: 'French', nativeName: 'Français' },
  de: { code: 'de', name: 'German', nativeName: 'Deutsch' },
  pt: { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
};

export interface LocalizedSpendItemContent {
  title: string;
  subtitle: string;
  description: string;
  sourceName: string;
}

export interface LocalizedCategoryContent {
  name: string;
  description: string;
}

export interface Translations {
  seo: {
    title: string;
    description: string;
    mainKeyword: string;
    secondaryKeywords: string[];
    keywords: string[];
  };
  header: {
    tagline: string;
    compareNav: string;
    compareNavTitle: string;
    soonBadge: string;
    backToTop?: string;
    homeNav?: string;
    timeframes: {
      year: string;
      today: string;
      session: string;
      second: string;
    };
    selectCurrency: string;
    selectLanguage: string;
  };
  comparePage?: {
    badge: string;
    title: string;
    subtitle: string;
    selectionLimit: (current: number, max: number) => string;
    addCounterPlaceholder: string;
    clearAll: string;
    selectPresets: string;
    presetTopGlobal: string;
    presetSovereignDebts: string;
    presetTechAndMedia: string;
    presetLifestyle: string;
    liveComparisonTitle: string;
    rankingHeader: string;
    ratePerSecHeader: string;
    annualTotalHeader: string;
    shareOfTotalHeader: string;
    maxLimitWarning: string;
    emptyStateTitle: string;
    emptyStateDescription: string;
    backToHome: string;
    shareComparison: string;
    copiedLink: string;
  };
  heroTicker: {
    yearLabel: string;
    todayLabel: string;
    sessionLabel: (seconds: number) => string;
    secondLabel: string;
    perSecondSuffix: string;
  };
  sessionBanner: {
    timeOnPage: string;
    spendDuringVisit: string;
  };
  searchAndFilter: {
    searchPlaceholder: string;
    showingCounters: (count: number) => string;
    indicatorsCount: (count: number) => string;
    categoriesCount?: (count: number) => string;
    noResultsFound: (query: string) => string;
    viewAllButton: string;
    collapseAll?: string;
    expandAll?: string;
  };
  card: {
    perSecondBadge: string;
    officialSourcePrefix: string;
    embedTitle: string;
    embedInstruction: string;
    testWidgetPage: string;
    copyHtml: string;
    copied: string;
  };
  detailPage: {
    backLink: string;
    backToCompare?: string;
    statisticalIndicator: string;
    annualBaseline: string;
    annualizedExp: string;
    ratePerMinute: string;
    rateOfFlow: string;
    shareOfGdp: string;
    ofWorldEconomy: string;
    historicalChartTitle: string;
    historicalChartSubtitle: string;
    statisticalOverview: string;
    officialSource: string;
    continuousUpdate: string;
  };
  footer: {
    methodologyTitle: string;
    methodologyBody: string;
    copyrightTagline: string;
    categoriesTitle?: string;
    trendingTitle?: string;
    sourcesTitle?: string;
    toolsTitle?: string;
    toolsEmbedWidgets?: string;
    toolsEngine?: string;
    toolsMultiCurrency?: string;
    toolsHreflang?: string;
    copyrightNotice?: string;
    disclaimerTitle?: string;
    disclaimerText?: string;
    citationText?: string;
  };
  categories: Record<CategoryId, LocalizedCategoryContent>;
  items: Record<string, LocalizedSpendItemContent>;
}
