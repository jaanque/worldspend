'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { CurrencyCode, TimeframeMode } from '@/types/spend';
import { Locale, SUPPORTED_LOCALES } from '@/types/i18n';
import { CURRENCIES } from '@/data/spendData';
import { getDictionary, getLocalizedPath } from '@/utils/i18n';
import { Globe, Scale } from 'lucide-react';

import { formatElapsedTime, calculateCurrentSpend, formatCurrencyValue } from '@/utils/formatters';
import { GLOBAL_ANNUAL_SPEND_USD } from '@/hooks/useWorldSpendEngine';
import { Clock } from 'lucide-react';

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
    { id: 'custom', label: dict.header.timeframes.custom || 'Personalizado...' },
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
    if (pathname === homeHref) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#245280] to-[#16385c] border-b-2 border-[#0d233a] text-white shadow-md">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex flex-col lg:flex-row items-center justify-between gap-2.5 sm:gap-3">
        {/* Left Side: Brand Logo + Nav Links + Mobile Selectors */}
        <div className="w-full lg:w-auto flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href={homeHref}
              onClick={handleLogoClick}
              className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer no-underline shrink-0"
              title="WorldSpend.org"
            >
              <Globe className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors shrink-0" />
              <span className="text-base sm:text-xl font-black tracking-tight text-white drop-shadow-xs group-hover:text-blue-100 transition-colors">
                WORLDSPEND
              </span>
            </Link>
          </div>

          {/* Currency, Timeframe & Language Selectors on Mobile (visible only on small screens < lg) */}
          <div className="flex lg:hidden items-center gap-1 shrink-0">
            <select
              value={timeframe}
              aria-label="Timeframe"
              onChange={(e) => setTimeframe(e.target.value as TimeframeMode)}
              className="text-[11px] font-bold bg-[#112d4a] text-white border border-[#0f2842] rounded-xs px-1.5 py-1 focus:outline-none cursor-pointer"
            >
              {timeframes.map((tf) => (
                <option key={tf.id} value={tf.id} className="bg-[#16385c] text-white">
                  {tf.label}
                </option>
              ))}
            </select>

            <select
              value={currencyCode}
              aria-label={dict.header.selectCurrency}
              onChange={(e) => setCurrencyCode(e.target.value as CurrencyCode)}
              className="text-[11px] font-bold bg-[#112d4a] text-white border border-[#0f2842] rounded-xs px-1.5 py-1 focus:outline-none cursor-pointer"
            >
              {Object.values(CURRENCIES).map((c) => (
                <option key={c.code} value={c.code} className="bg-[#16385c] text-white">
                  {c.symbol} {c.code}
                </option>
              ))}
            </select>

            <select
              value={locale}
              aria-label={dict.header.selectLanguage}
              onChange={(e) => handleLanguageChange(e.target.value as Locale)}
              className="text-[11px] font-bold bg-[#112d4a] text-white border border-[#0f2842] rounded-xs px-1.5 py-1 focus:outline-none cursor-pointer"
            >
              {Object.values(SUPPORTED_LOCALES).map((loc) => (
                <option key={loc.code} value={loc.code} className="bg-[#16385c] text-white">
                  {loc.code.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right Side: Desktop Selectors in horizontal bar (Timeframe, Currency, Language) */}
        <div className="w-full lg:w-auto flex flex-wrap items-center justify-center lg:justify-end gap-2 shrink-0">
          {/* Custom Date Range Picker when 'custom' timeframe is selected */}
          {timeframe === 'custom' && (
            <div className="flex items-center gap-1 text-xs bg-[#0f2842] p-1 rounded-xs border border-[#1a3d63]">
              <input
                type="date"
                value={customStartDate}
                onChange={(e) => setCustomStartDate && setCustomStartDate(e.target.value)}
                className="bg-[#16385c] text-white text-[11px] font-mono px-1 py-0.5 rounded-xs border border-[#245280] focus:outline-none"
              />
              <span className="text-blue-200 text-[10px]">-</span>
              <input
                type="date"
                value={customEndDate}
                onChange={(e) => setCustomEndDate && setCustomEndDate(e.target.value)}
                className="bg-[#16385c] text-white text-[11px] font-mono px-1 py-0.5 rounded-xs border border-[#245280] focus:outline-none"
              />
            </div>
          )}

          {/* Desktop Timeframe Selector */}
          <select
            value={timeframe}
            aria-label="Timeframe"
            onChange={(e) => setTimeframe(e.target.value as TimeframeMode)}
            className="hidden lg:inline-block text-xs font-bold bg-[#112d4a] text-white border border-[#0f2842] rounded-xs px-2 py-1 focus:outline-none cursor-pointer hover:bg-[#1a3d63] shrink-0 shadow-2xs"
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
            className="hidden lg:inline-block text-xs font-bold bg-[#112d4a] text-white border border-[#0f2842] rounded-xs px-2 py-1 focus:outline-none cursor-pointer hover:bg-[#1a3d63] shrink-0 shadow-2xs"
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
            className="hidden lg:inline-block text-xs font-bold bg-[#112d4a] text-white border border-[#0f2842] rounded-xs px-2 py-1 focus:outline-none cursor-pointer hover:bg-[#1a3d63] shrink-0 shadow-2xs"
          >
            {Object.values(SUPPORTED_LOCALES).map((loc) => (
              <option key={loc.code} value={loc.code} className="bg-[#16385c] text-white">
                {loc.code.toUpperCase()} — {loc.nativeName}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
    {/* Spacer to preserve document layout under fixed header */}
    <div className="h-[96px] lg:h-[48px] w-full shrink-0" />
  </>
);
};
