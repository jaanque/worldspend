'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { CurrencyCode, TimeframeMode } from '@/types/spend';
import { Locale, SUPPORTED_LOCALES } from '@/types/i18n';
import { CURRENCIES, CATEGORIES } from '@/data/spendData';
import { getDictionary, getLocalizedPath, getLocalizedCategories } from '@/utils/i18n';
import { Globe, Scale, Menu, X, Clock } from 'lucide-react';

import { formatElapsedTime, calculateCurrentSpend, formatCurrencyValue } from '@/utils/formatters';
import { GLOBAL_ANNUAL_SPEND_USD } from '@/hooks/useWorldSpendEngine';

const categoryShortNames: Record<string, Record<string, string>> = {
  es: {
    illicit: 'Mercado Negro',
    military: 'Militar',
    entertainment: 'Entretenimiento',
    food: 'Alimentación',
    government: 'Gobierno',
    health: 'Salud',
    'country-gdp': 'PIB',
    tech: 'Tecnología',
  },
  en: {
    illicit: 'Black Market',
    military: 'Military',
    entertainment: 'Entertainment',
    food: 'Food',
    government: 'Government',
    health: 'Health',
    'country-gdp': 'GDP',
    tech: 'Tech',
  },
  fr: {
    illicit: 'Marché Noir',
    military: 'Militaire',
    entertainment: 'Divertissement',
    food: 'Alimentation',
    government: 'Gouvernement',
    health: 'Santé',
    'country-gdp': 'PIB',
    tech: 'Tech',
  },
  de: {
    illicit: 'Schwarzmarkt',
    military: 'Militär',
    entertainment: 'Unterhaltung',
    food: 'Lebensmittel',
    government: 'Staat',
    health: 'Gesundheit',
    'country-gdp': 'BIP',
    tech: 'Tech',
  },
  pt: {
    illicit: 'Mercado Negro',
    military: 'Militar',
    entertainment: 'Entretenimento',
    food: 'Alimentação',
    government: 'Governo',
    health: 'Saúde',
    'country-gdp': 'PIB',
    tech: 'Tecnologia',
  }
};

interface HeaderProps {
  timeframe: TimeframeMode;
  setTimeframe: (t: TimeframeMode) => void;
  currencyCode: CurrencyCode;
  setCurrencyCode: (c: CurrencyCode) => void;
  customStartDate?: string;
  setCustomStartDate?: (d: string) => void;
  customEndDate?: string;
  setCustomEndDate?: (d: string) => void;
  sessionSeconds?: number;
  locale?: Locale;
}

export const Header: React.FC<HeaderProps> = ({
  timeframe,
  setTimeframe,
  currencyCode,
  setCurrencyCode,
  customStartDate = '2026-01-01',
  setCustomStartDate,
  customEndDate = '2026-12-31',
  setCustomEndDate,
  sessionSeconds = 0,
  locale = 'en',
}) => {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const dict = getDictionary(locale);

  const isCompareActive = pathname.includes('/compare');

  const timeframes: { id: TimeframeMode; label: string }[] = [
    { id: 'year', label: dict.header.timeframes.year },
    { id: 'today', label: dict.header.timeframes.today },
    { id: 'session', label: dict.header.timeframes.session },
    { id: 'second', label: dict.header.timeframes.second },
  ];

  const handleLanguageChange = (newLocale: Locale) => {
    if (typeof document !== 'undefined') {
      document.cookie = `worldspend_locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    }
    const targetPath = getLocalizedPath(newLocale, pathname);
    router.push(targetPath);
  };

  const homeHref = locale === 'en' ? '/' : `/${locale}`;
  const compareHref = locale === 'en' ? '/compare' : `/${locale}/compare`;

  const activeCurrency = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const sessionSpendCurrency = calculateCurrentSpend(
    GLOBAL_ANNUAL_SPEND_USD,
    'session',
    sessionSeconds,
    activeCurrency.code
  );

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only intercept if we are on the exact home page without query params
    if (pathname === homeHref && typeof window !== 'undefined' && !window.location.search) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const categories = getLocalizedCategories(locale).filter(c => c.id !== 'all');

  const calculatorHref = locale === 'en' ? '/calculator' : `/${locale}/calculator`;
  const calculatorLabel =
    locale === 'es' ? 'Calculadora' :
    locale === 'fr' ? 'Calculatrice' :
    locale === 'de' ? 'Rechner' :
    locale === 'pt' ? 'Calculadora' : 'Calculator';
  // Short label for the compact horizontal nav bar
  const calculatorShortLabel =
    locale === 'de' ? 'Rechner' : locale === 'fr' ? 'Calcul.' : 'Calc.';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#245280] to-[#16385c] border-b border-[#0d233a] text-white shadow-md">
        {/* Row 1: Logo & Preferences Selectors */}
        <div className="max-w-4xl mx-auto px-3 sm:px-8 py-2 flex items-center justify-between gap-4">
          {/* Left Side: Brand Logo */}
          <Link
            href={homeHref}
            onClick={handleLogoClick}
            className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer no-underline shrink-0"
            title="WorldSpend.org"
          >
            <Globe className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors shrink-0" />
            <span className="text-base sm:text-lg font-black tracking-tight text-white drop-shadow-xs group-hover:text-blue-100 transition-colors">
              WORLDSPEND
            </span>
          </Link>

          {/* Right Side: Selectors on Desktop */}
          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            {/* Desktop Timeframe Selector */}
            <select
              value={timeframe}
              aria-label="Timeframe"
              onChange={(e) => setTimeframe(e.target.value as TimeframeMode)}
              className="text-[11px] font-bold bg-[#112d4a] text-white border border-[#0f2842] rounded-xs px-2 py-1 focus:outline-none cursor-pointer hover:bg-[#1a3d63] shrink-0"
            >
              {timeframes.map((tf) => (
                <option key={tf.id} value={tf.id} className="bg-[#16385c] text-white">
                  {tf.label}
                </option>
              ))}
            </select>

            {/* Desktop Currency Selector */}
            <select
              value={currencyCode}
              aria-label={dict.header.selectCurrency}
              onChange={(e) => setCurrencyCode(e.target.value as CurrencyCode)}
              className="text-[11px] font-bold bg-[#112d4a] text-white border border-[#0f2842] rounded-xs px-2 py-1 focus:outline-none cursor-pointer hover:bg-[#1a3d63] shrink-0"
            >
              {Object.values(CURRENCIES).map((c) => (
                <option key={c.code} value={c.code} className="bg-[#16385c] text-white">
                  {c.symbol} {c.code}
                </option>
              ))}
            </select>

            {/* Desktop Language Selector */}
            <select
              value={locale}
              aria-label={dict.header.selectLanguage}
              onChange={(e) => handleLanguageChange(e.target.value as Locale)}
              className="text-[11px] font-bold bg-[#112d4a] text-white border border-[#0f2842] rounded-xs px-2 py-1 focus:outline-none cursor-pointer hover:bg-[#1a3d63] shrink-0"
            >
              {Object.values(SUPPORTED_LOCALES).map((loc) => (
                <option key={loc.code} value={loc.code} className="bg-[#16385c] text-white">
                  {loc.code.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 2: Secondary Navigation Menu (Transfermarkt Style UX) */}
        <div className="bg-[#122e4d] border-t border-[#1e4670] py-1.5 px-0">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 px-3 sm:px-8">
            {/* Scrollable category list */}
            <nav className="flex-1 overflow-x-auto scrollbar-none flex items-center justify-start gap-5 sm:gap-4 xl:gap-5 text-[10px] xl:text-[11px] font-black uppercase tracking-wider whitespace-nowrap pb-1 sm:pb-0">
              {/* Home */}
              <Link
                href={homeHref}
                onClick={handleLogoClick}
                className="text-white hover:text-blue-200 transition-colors duration-150 no-underline hover:underline decoration-2 underline-offset-4 shrink-0 py-1"
              >
                {locale === 'es' ? 'Inicio' : locale === 'fr' ? 'Accueil' : locale === 'de' ? 'Start' : locale === 'pt' ? 'Início' : 'Home'}
              </Link>
              <span className="text-blue-300/30 shrink-0 select-none">|</span>
              {categories.filter(cat => cat.id !== 'health').map((cat) => {
                const href = `${homeHref}?cat=${cat.id}`;
                const name = categoryShortNames[locale]?.[cat.id] || cat.name;
                return (
                  <Link
                    key={cat.id}
                    href={href}
                    className="text-blue-100 hover:text-white transition-colors duration-150 no-underline hover:underline decoration-2 underline-offset-4 shrink-0 py-1"
                  >
                    {name}
                  </Link>
                );
              })}
              <span className="text-blue-300/40 shrink-0 select-none">|</span>
              <Link
                href={calculatorHref}
                className="text-white hover:text-blue-200 transition-colors duration-150 no-underline hover:underline decoration-2 underline-offset-4 shrink-0 font-bold py-1 pr-2"
              >
                {calculatorLabel}
              </Link>
            </nav>

            {/* Hamburger Button at the far right of the navigation bar */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-200 transition-colors p-1 focus:outline-none cursor-pointer flex items-center justify-center rounded-xs hover:bg-[#1c4b78] shrink-0"
              aria-label="Toggle Preferences Menu"
            >
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Sidebar Drawer Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[290px] max-w-full bg-[#11273f] border-l border-[#0d233a] text-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#0d233a] bg-gradient-to-b from-[#245280] to-[#16385c]">
          <Link
            href={homeHref}
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-1.5 group cursor-pointer no-underline shrink-0"
          >
            <Globe className="w-5 h-5 text-blue-200" />
            <span className="text-base font-black tracking-tight text-white uppercase">
              WORLDSPEND
            </span>
          </Link>
          <button
            type="button"
            aria-label={locale === 'es' ? 'Cerrar menú' : 'Close menu'}
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-blue-200 p-1 cursor-pointer focus:outline-none rounded-xs hover:bg-[#245280]/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Categories Section */}
          <div>
            <h3 className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-3 border-b border-[#1c4b78] pb-1">
              {locale === 'es' ? 'Categorías' : locale === 'fr' ? 'Catégories' : locale === 'de' ? 'Kategorien' : locale === 'pt' ? 'Categorias' : 'Categories'}
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href={homeHref}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-xs font-bold text-blue-100 hover:text-white no-underline py-1.5 px-2 rounded-xs hover:bg-[#1a3d63]"
                >
                  {locale === 'es' ? 'TODOS LOS GASTOS' : locale === 'fr' ? 'TOUTES LES DÉPENSES' : locale === 'de' ? 'ALLE AUSGABEN' : locale === 'pt' ? 'TODOS OS GASTOS' : 'ALL SPENDING'}
                </Link>
              </li>
              {categories.map((cat) => {
                const name = categoryShortNames[locale]?.[cat.id] || cat.name;
                return (
                  <li key={cat.id}>
                    <Link
                      href={`${homeHref}?cat=${cat.id}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-xs font-bold text-white/95 hover:text-white no-underline py-1.5 px-2 rounded-xs hover:bg-[#1a3d63] uppercase"
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href={calculatorHref}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-xs font-black text-blue-200 hover:text-white no-underline py-1.5 px-2 rounded-xs bg-[#245280]/20 hover:bg-[#1a3d63] uppercase border-t border-[#1e4670] mt-1"
                >
                  {calculatorLabel}
                </Link>
              </li>
            </ul>
          </div>

          {/* Preferences Section */}
          <div className="space-y-4 pt-2">
            <h3 className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-1 border-b border-[#1c4b78] pb-1">
              {locale === 'es' ? 'Preferencias' : locale === 'fr' ? 'Préférences' : locale === 'de' ? 'Einstellungen' : locale === 'pt' ? 'Preferências' : 'Preferences'}
            </h3>
            
            {/* Timeframe Select */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="mobile-timeframe" className="text-[10px] text-gray-400 font-semibold">{locale === 'es' ? 'Período' : 'Timeframe'}</label>
              <select
                id="mobile-timeframe"
                value={timeframe}
                onChange={(e) => {
                  setTimeframe(e.target.value as TimeframeMode);
                  setIsMenuOpen(false);
                }}
                className="w-full text-xs font-bold bg-[#112d4a] text-white border border-[#0f2842] rounded-xs px-2.5 py-2 focus:outline-none cursor-pointer"
              >
                {timeframes.map((tf) => (
                  <option key={tf.id} value={tf.id} className="bg-[#16385c] text-white">
                    {tf.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Currency Select */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="mobile-currency" className="text-[10px] text-gray-400 font-semibold">{locale === 'es' ? 'Moneda' : 'Currency'}</label>
              <select
                id="mobile-currency"
                value={currencyCode}
                onChange={(e) => {
                  setCurrencyCode(e.target.value as CurrencyCode);
                  setIsMenuOpen(false);
                }}
                className="w-full text-xs font-bold bg-[#112d4a] text-white border border-[#0f2842] rounded-xs px-2.5 py-2 focus:outline-none cursor-pointer"
              >
                {Object.values(CURRENCIES).map((c) => (
                  <option key={c.code} value={c.code} className="bg-[#16385c] text-white">
                    {c.symbol} {c.code}
                  </option>
                ))}
              </select>
            </div>

            {/* Language Select */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="mobile-language" className="text-[10px] text-gray-400 font-semibold">{locale === 'es' ? 'Idioma' : 'Language'}</label>
              <select
                id="mobile-language"
                value={locale}
                onChange={(e) => {
                  handleLanguageChange(e.target.value as Locale);
                  setIsMenuOpen(false);
                }}
                className="w-full text-xs font-bold bg-[#112d4a] text-white border border-[#0f2842] rounded-xs px-2.5 py-2 focus:outline-none cursor-pointer"
              >
                {Object.values(SUPPORTED_LOCALES).map((loc) => (
                  <option key={loc.code} value={loc.code} className="bg-[#16385c] text-white">
                    {loc.nativeName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to preserve document layout under fixed header */}
      <div className="h-[84px] w-full shrink-0" />
    </>
  );
};
