'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { CurrencyCode, TimeframeMode } from '@/types/spend';
import { Locale, SUPPORTED_LOCALES } from '@/types/i18n';
import { CURRENCIES } from '@/data/spendData';
import { getDictionary, getLocalizedPath } from '@/utils/i18n';
import { Globe, Scale } from 'lucide-react';

interface HeaderProps {
  timeframe: TimeframeMode;
  setTimeframe: (t: TimeframeMode) => void;
  currencyCode: CurrencyCode;
  setCurrencyCode: (c: CurrencyCode) => void;
  locale?: Locale;
}

export const Header: React.FC<HeaderProps> = ({
  timeframe,
  setTimeframe,
  currencyCode,
  setCurrencyCode,
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
    const targetPath = getLocalizedPath(newLocale, pathname);
    router.push(targetPath);
  };

  const homeHref = locale === 'en' ? '/' : `/${locale}`;
  const compareHref = locale === 'en' ? '/compare' : `/${locale}/compare`;

  return (
    <header className="bg-gradient-to-b from-[#245280] to-[#16385c] border-b-2 border-[#0d233a] text-white shadow-xs sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3">
        {/* Top bar on mobile / Left on Desktop: Brand Logo + Nav Links + Mobile Selectors */}
        <div className="w-full md:w-auto flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-3">
            <Link
              href={homeHref}
              className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer no-underline shrink-0"
              title="WorldSpend.org"
            >
              <Globe className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors shrink-0" />
              <span className="text-base sm:text-xl font-black tracking-tight text-white drop-shadow-xs group-hover:text-blue-100 transition-colors">
                WORLDSPEND
              </span>
            </Link>

            {/* Navigation item: Compare */}
            <Link
              href={compareHref}
              className={`inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold px-2 py-1 rounded-xs transition-colors cursor-pointer border ${
                isCompareActive
                  ? 'bg-white text-[#16385c] border-white shadow-2xs'
                  : 'bg-[#112d4a]/80 text-blue-100 border-[#0f2842] hover:bg-white/10 hover:text-white'
              }`}
              title={dict.header.compareNav}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>{dict.header.compareNav}</span>
            </Link>
          </div>

          {/* Currency & Language Selectors on Mobile (visible only on small screens) */}
          <div className="flex md:hidden items-center gap-1 shrink-0">
            <select
              value={currencyCode}
              aria-label={dict.header.selectCurrency}
              onChange={(e) => setCurrencyCode(e.target.value as CurrencyCode)}
              className="text-[11px] font-bold bg-white text-gray-800 border border-[#0f2842] rounded-xs px-1.5 py-1 focus:outline-none cursor-pointer"
            >
              {Object.values(CURRENCIES).map((c) => (
                <option key={c.code} value={c.code}>
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

        {/* Controls on Desktop & Scrollable Timeframe Buttons on Mobile */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-2 overflow-x-auto pb-0.5 md:pb-0">
          {/* Timeframe Buttons Group */}
          <div className="inline-flex rounded border border-[#0f2842] bg-[#112d4a] p-0.5 text-xs w-full md:w-auto justify-between md:justify-start shrink-0">
            {timeframes.map((tf) => {
              const active = timeframe === tf.id;
              return (
                <button
                  key={tf.id}
                  onClick={() => setTimeframe(tf.id)}
                  className={`flex-1 md:flex-initial px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-bold rounded-xs transition-colors cursor-pointer text-center whitespace-nowrap ${
                    active
                      ? 'bg-white text-[#16385c] shadow-xs'
                      : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tf.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Currency Selector */}
          <select
            value={currencyCode}
            aria-label={dict.header.selectCurrency}
            onChange={(e) => setCurrencyCode(e.target.value as CurrencyCode)}
            className="hidden md:inline-block text-xs font-bold bg-white text-gray-800 border border-[#0f2842] rounded-xs px-2 py-1 focus:outline-none cursor-pointer shrink-0"
          >
            {Object.values(CURRENCIES).map((c) => (
              <option key={c.code} value={c.code}>
                {c.symbol} {c.code}
              </option>
            ))}
          </select>

          {/* Desktop Language Selector */}
          <select
            value={locale}
            aria-label={dict.header.selectLanguage}
            onChange={(e) => handleLanguageChange(e.target.value as Locale)}
            className="hidden md:inline-block text-xs font-bold bg-[#112d4a] text-white border border-[#0f2842] rounded-xs px-2 py-1 focus:outline-none cursor-pointer hover:bg-[#1a3d63] shrink-0"
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
  );
};
