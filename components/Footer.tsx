'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { CurrencyCode } from '@/types/spend';
import { Locale, SUPPORTED_LOCALES } from '@/types/i18n';
import { CURRENCIES, CATEGORIES } from '@/data/spendData';
import { getDictionary, getLocalizedPath, getLocalizedSpendItems } from '@/utils/i18n';
import { Globe } from 'lucide-react';

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
    if (typeof document !== 'undefined') {
      document.cookie = `worldspend_locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    }
    const targetPath = getLocalizedPath(newLocale, pathname);
    router.push(targetPath);
  };

  const getHref = (path: string) => (locale === 'en' ? path : `/${locale}${path}`);

  return (
    <footer className="mt-auto border-t border-[#c8d6e5] bg-[#e8f0f8] py-6 px-4 sm:px-6 text-xs text-[#445566] w-full">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Clean 2-Column Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[11px] leading-relaxed">
          {/* Column 1: Categories */}
          <div>
            <div className="font-bold text-[#14324f] text-xs uppercase tracking-wider mb-2 border-b border-[#cbd5e1] pb-1">
              {dict.footer.categoriesTitle || 'CATEGORÍAS DE GASTO'}
            </div>
            <ul className="space-y-1 text-gray-700">
              {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => {
                const catContent = dict.categories[cat.id] || { name: cat.name };
                return (
                  <li key={cat.id}>
                    <Link
                      href={getHref(`/?cat=${cat.id}`)}
                      className="hover:text-[#1c4b78] hover:underline"
                    >
                      <span className="text-[#6688aa] mr-1.5">•</span>
                      <span>{catContent.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 2: Popular Trending Counters */}
          <div>
            <div className="font-bold text-[#14324f] text-xs uppercase tracking-wider mb-2 border-b border-[#cbd5e1] pb-1">
              {dict.footer.trendingTitle || 'CONTADORES POPULARES'}
            </div>
            <ul className="space-y-1 text-gray-700">
              {items.slice(0, 5).map((item) => (
                <li key={item.id} className="truncate">
                  <Link
                    href={getHref(`/stat/${item.id}`)}
                    className="hover:text-[#1c4b78] hover:underline"
                    title={item.title}
                  >
                    <span className="text-[#6688aa] mr-1.5">•</span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Methodology Callout */}
        <div className="bg-[#f0f5fa] border border-[#cbd6e2] rounded-xs px-3.5 py-2 text-xs">
          <div className="text-gray-700 leading-snug">
            <span className="font-bold text-[#14324f] mr-1">{dict.footer.methodologyTitle}:</span>
            <span className="text-gray-600">{dict.footer.methodologyBody}</span>
          </div>
        </div>

        {/* Footer Bottom Bar with Copyright & Selectors */}
        <div className="pt-3 border-t border-[#cbd5e1] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#667788]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <Link
              href={getHref('/')}
              className="flex items-center gap-1.5 group cursor-pointer no-underline shrink-0"
              title="WorldSpend.org"
            >
              <Globe className="w-4 h-4 text-[#1c4b78] group-hover:text-[#14324f] transition-colors shrink-0" />
              <span className="text-sm font-black tracking-tight text-[#14324f] group-hover:text-[#1c4b78] transition-colors">
                WORLDSPEND
              </span>
            </Link>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span>© {new Date().getFullYear()} {dict.footer.copyrightNotice || 'WorldSpend'}</span>
            <span className="text-gray-400">•</span>
            <Link href={getHref('/legal')} className="hover:text-[#1c4b78] hover:underline shrink-0">
              {locale === 'es' ? 'Aviso Legal' : locale === 'fr' ? 'Mentions Légales' : locale === 'de' ? 'Impressum' : locale === 'pt' ? 'Aviso Legal' : 'Legal Notice'}
            </Link>
            <span className="text-gray-400">•</span>
            <Link href={getHref('/privacy')} className="hover:text-[#1c4b78] hover:underline shrink-0">
              {locale === 'es' ? 'Privacidad' : locale === 'fr' ? 'Confidentialité' : locale === 'de' ? 'Datenschutz' : locale === 'pt' ? 'Privacidade' : 'Privacy'}
            </Link>
            <span className="text-gray-400">•</span>
            <Link href={getHref('/terms')} className="hover:text-[#1c4b78] hover:underline shrink-0">
              {locale === 'es' ? 'Términos' : locale === 'fr' ? 'Conditions' : locale === 'de' ? 'AGB' : locale === 'pt' ? 'Termos' : 'Terms'}
            </Link>
            <span className="text-gray-400">•</span>
            <Link href={getHref('/cookies')} className="hover:text-[#1c4b78] hover:underline shrink-0">
              Cookies
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/sitemap.xml" className="hover:text-[#1c4b78] hover:underline shrink-0" target="_blank" rel="noopener noreferrer">
              Sitemap
            </Link>
          </div>

          {/* Footer Selectors */}
          <div className="flex items-center gap-2">
            {/* Currency Selector */}
            {setCurrencyCode && (
              <select
                value={currencyCode}
                aria-label={dict.header.selectCurrency}
                onChange={(e) => setCurrencyCode(e.target.value as CurrencyCode)}
                className="text-[11px] font-bold bg-[#ffffff] text-[#14324f] border border-[#b0c0d0] rounded-xs px-2 py-0.5 focus:outline-none cursor-pointer shadow-2xs"
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
              className="text-[11px] font-bold bg-[#ffffff] text-[#14324f] border border-[#b0c0d0] rounded-xs px-2 py-0.5 focus:outline-none cursor-pointer shadow-2xs"
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
