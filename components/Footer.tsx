'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { CurrencyCode } from '@/types/spend';
import { Locale, SUPPORTED_LOCALES } from '@/types/i18n';
import { CURRENCIES, CATEGORIES } from '@/data/spendData';
import { getDictionary, getLocalizedPath, getLocalizedSpendItems } from '@/utils/i18n';
import { Globe, Database, ExternalLink, Code2, Sparkles } from 'lucide-react';

interface FooterProps {
  locale?: Locale;
  currencyCode?: CurrencyCode;
  setCurrencyCode?: (c: CurrencyCode) => void;
}

export const Footer: React.FC<FooterProps> = ({
  locale = 'en',
  currencyCode = 'USD',
  setCurrencyCode,
}) => {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const dict = getDictionary(locale);
  const items = getLocalizedSpendItems(locale);

  const handleLanguageChange = (newLocale: Locale) => {
    const targetPath = getLocalizedPath(newLocale, pathname);
    router.push(targetPath);
  };

  const getHref = (path: string) => (locale === 'en' ? path : `/${locale}${path}`);

  // Featured high-interest counters
  const featuredIds = [
    'cristiano-ronaldo-annual-earnings-wealth',
    'lionel-messi-annual-earnings-wealth',
    'lamine-yamal-annual-earnings-wealth',
    'top-10-football-clubs-transfer-spending',
    'ai-datacenters-chatgpt-spending',
    'weight-loss-drugs-ozempic-spending',
    'global-illicit-drug-trade',
    'spain-equality-ministry-budget',
    'cost-raising-child-18-years',
  ];

  const featuredItems = items.filter((it) => featuredIds.includes(it.id)).slice(0, 8);

  return (
    <footer className="mt-8 sm:mt-14 border-t-2 border-[#1c4b78] bg-[#e4ebf2] py-8 px-3 sm:px-6 text-xs text-[#445566]">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Top 4-Column Navigation & Data Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-[11px] leading-relaxed">
          {/* Column 1: Categories */}
          <div>
            <div className="font-bold text-[#14324f] text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1.5 border-b border-[#cbd5e1] pb-1">
              <Globe className="w-3.5 h-3.5 text-[#1c4b78]" />
              <span>{dict.footer.categoriesTitle || 'Categories'}</span>
            </div>
            <ul className="space-y-1.5 text-gray-700">
              {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => {
                const catContent = dict.categories[cat.id] || { name: cat.name };
                return (
                  <li key={cat.id}>
                    <Link
                      href={getHref(`/?cat=${cat.id}`)}
                      className="hover:text-[#1c4b78] hover:underline flex items-center gap-1"
                    >
                      <span className="text-[#1c4b78]">•</span>
                      <span>{catContent.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 2: Popular Trending Counters */}
          <div>
            <div className="font-bold text-[#14324f] text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1.5 border-b border-[#cbd5e1] pb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#eab308]" />
              <span>{dict.footer.trendingTitle || 'Popular Metrics'}</span>
            </div>
            <ul className="space-y-1.5 text-gray-700">
              {featuredItems.map((item) => (
                <li key={item.id} className="truncate">
                  <Link
                    href={getHref(`/stat/${item.id}`)}
                    className="hover:text-[#1c4b78] hover:underline"
                    title={item.title}
                  >
                    <span className="text-[#1c4b78] mr-1">•</span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Data Institutions & Sources */}
          <div>
            <div className="font-bold text-[#14324f] text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1.5 border-b border-[#cbd5e1] pb-1">
              <Database className="w-3.5 h-3.5 text-[#059669]" />
              <span>{dict.footer.sourcesTitle || 'Data Sources'}</span>
            </div>
            <ul className="space-y-1.5 text-gray-700">
              <li>
                <span className="font-semibold text-gray-800">UNODC / UN:</span> World Drug Report
              </li>
              <li>
                <span className="font-semibold text-gray-800">SIPRI:</span> Military Expenditure
              </li>
              <li>
                <span className="font-semibold text-gray-800">WHO:</span> Global Health Observatory
              </li>
              <li>
                <span className="font-semibold text-gray-800">FIFA TMS & Deloitte:</span> Football Money
              </li>
              <li>
                <span className="font-semibold text-gray-800">Forbes & Bloomberg:</span> Wealth Indexes
              </li>
              <li>
                <span className="font-semibold text-gray-800">INE & Eurostat:</span> Public Budgets
              </li>
              <li>
                <span className="font-semibold text-gray-800">UNESCO & INTERPOL:</span> Works of Art
              </li>
              <li>
                <span className="font-semibold text-gray-800">IEA & OPEC:</span> Energy & Crude Oil
              </li>
            </ul>
          </div>

          {/* Column 4: Platform & Webmaster Tools */}
          <div>
            <div className="font-bold text-[#14324f] text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1.5 border-b border-[#cbd5e1] pb-1">
              <Code2 className="w-3.5 h-3.5 text-[#8b5cf6]" />
              <span>{dict.footer.toolsTitle || 'Tools & Resources'}</span>
            </div>
            <ul className="space-y-1.5 text-gray-700">
              <li>
                <Link
                  href={getHref('/compare')}
                  className="hover:text-[#1c4b78] hover:underline flex items-center gap-1 font-bold text-[#1c4b78]"
                >
                  <span>•</span>
                  <span>{dict.comparePage?.title || 'Multi-Counter Comparison'} (10 Max)</span>
                </Link>
              </li>
              <li>
                <Link
                  href={getHref('/stat/cristiano-ronaldo-annual-earnings-wealth')}
                  className="hover:text-[#1c4b78] hover:underline flex items-center gap-1"
                >
                  <span className="text-[#1c4b78]">•</span>
                  <span>Embeddable Live Widgets</span>
                </Link>
              </li>
              <li>
                <span className="text-[#1c4b78] mr-1">•</span>
                <span>60 FPS Dynamic Engine</span>
              </li>
              <li>
                <span className="text-[#1c4b78] mr-1">•</span>
                <span>Multi-Currency Converter (11 Currencies)</span>
              </li>
              <li>
                <span className="text-[#1c4b78] mr-1">•</span>
                <span>Hreflang SEO Architecture</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar with Copyright & Quick Selectors */}
        <div className="pt-3 border-t border-[#cbd5e1] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#667788] text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
            <span className="font-bold text-[#14324f] flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-[#1c4b78]" />
              WorldSpend.org
            </span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span>© {new Date().getFullYear()} WorldSpend Global Financial Analytics</span>
          </div>

          {/* Footer Selectors */}
          <div className="flex items-center gap-2">
            {/* Currency Selector */}
            {setCurrencyCode && (
              <select
                value={currencyCode}
                aria-label={dict.header.selectCurrency}
                onChange={(e) => setCurrencyCode(e.target.value as CurrencyCode)}
                className="text-[11px] sm:text-xs font-bold bg-white text-gray-800 border border-[#a0b0c0] rounded-xs px-2 py-1 focus:outline-none cursor-pointer shadow-2xs"
              >
                {Object.values(CURRENCIES).map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.symbol} {c.code}
                  </option>
                ))}
              </select>
            )}

            {/* Language Selector */}
            <select
              value={locale}
              aria-label={dict.header.selectLanguage}
              onChange={(e) => handleLanguageChange(e.target.value as Locale)}
              className="text-[11px] sm:text-xs font-bold bg-white text-gray-800 border border-[#a0b0c0] rounded-xs px-2 py-1 focus:outline-none cursor-pointer shadow-2xs"
            >
              {Object.values(SUPPORTED_LOCALES).map((loc) => (
                <option key={loc.code} value={loc.code}>
                  {loc.code.toUpperCase()} — {loc.nativeName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

