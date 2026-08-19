'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { notFound, useSearchParams } from 'next/navigation';
import { CURRENCIES } from '@/data/spendData';
import { CurrencyCode, TimeframeMode } from '@/types/spend';
import { Locale } from '@/types/i18n';
import {
  getElapsedSeconds,
  calculateCurrentSpend,
  getRatePerSecond,
  formatCurrencyValue,
  formatRatePerSecond,
  formatCompactCurrency,
} from '@/utils/formatters';
import { getLocalizedSpendItems, getLocalizedCategories, getDictionary } from '@/utils/i18n';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { SpendTrendChart } from '@/components/SpendTrendChart';
import { ArrowLeft, ShieldCheck, Globe } from 'lucide-react';
import { GLOBAL_ANNUAL_SPEND_USD } from '@/hooks/useWorldSpendEngine';

interface CounterDetailViewProps {
  id: string;
  locale?: Locale;
}

export const CounterDetailView: React.FC<CounterDetailViewProps> = ({
  id,
  locale = 'en',
}) => {
  const dict = getDictionary(locale);
  const items = getLocalizedSpendItems(locale);
  const categories = getLocalizedCategories(locale);

  const searchParams = useSearchParams();
  const fromSource = searchParams?.get('from');
  const returnIds = searchParams?.get('ids');

  const isFromCompare = fromSource === 'compare';
  const compareBase = locale === 'en' ? '/compare' : `/${locale}/compare`;
  const backHref = isFromCompare
    ? `${compareBase}${returnIds ? `?ids=${returnIds}` : ''}`
    : (locale === 'en' ? '/' : `/${locale}`);
  const backLabel = isFromCompare
    ? (dict.detailPage.backToCompare || 'Volver a la comparativa')
    : dict.detailPage.backLink;

  const item = useMemo(() => {
    return items.find((s) => s.id === id);
  }, [items, id]);

  const [currencyCode, setCurrencyCode] = useState<CurrencyCode>('USD');
  const [timeframe, setTimeframe] = useState<TimeframeMode>('year');
  const [sessionStartTime] = useState<number>(() => Date.now());
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [sessionSeconds, setSessionSeconds] = useState<number>(0);

  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    let active = true;

    const tick = () => {
      if (!active) return;
      const now = new Date();
      const currentElapsed = getElapsedSeconds(timeframe, now, sessionStartTime);
      setElapsedSeconds(currentElapsed);

      const currentSession = (Date.now() - sessionStartTime) / 1000;
      setSessionSeconds(currentSession);

      requestRef.current = requestAnimationFrame(tick);
    };

    requestRef.current = requestAnimationFrame(tick);

    return () => {
      active = false;
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [timeframe, sessionStartTime]);

  if (!item) {
    return notFound();
  }

  const activeCurrency = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const category = categories.find((c) => c.id === item.categoryId) || categories[0];

  const currentSpend = calculateCurrentSpend(
    item.annualSpendUSD,
    timeframe,
    elapsedSeconds,
    currencyCode
  );

  const ratePerSecond = getRatePerSecond(item.annualSpendUSD, currencyCode);
  const ratePerMinute = ratePerSecond * 60;
  const pctOfWorldTotal = ((item.annualSpendUSD / GLOBAL_ANNUAL_SPEND_USD) * 100).toFixed(2);

  const timeframeLabels: Record<TimeframeMode, string> = {
    year: dict.detailPage.annualizedExp,
    today: dict.heroTicker.todayLabel,
    session: dict.heroTicker.sessionLabel(sessionSeconds),
    second: dict.heroTicker.secondLabel,
  };

  return (
    <div className="min-h-screen bg-[#edf1f5] text-[#222222] flex flex-col justify-between font-sans">
      <div>
        {/* Authority Header */}
        <Header
          timeframe={timeframe}
          setTimeframe={setTimeframe}
          currencyCode={currencyCode}
          setCurrencyCode={setCurrencyCode}
          locale={locale}
        />

        {/* Balanced Authority Details Container */}
        <main className="max-w-4xl mx-auto bg-white border-x border-[#cdd5de] px-3 sm:px-8 py-4 sm:py-6 shadow-xs my-2 sm:my-4">
          {/* Back Navigation */}
          <div className="mb-3">
            <Link
              href={backHref}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1c4b78] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{backLabel}</span>
            </Link>
          </div>

          {/* Section Header Strip */}
          <div className="authority-section-header px-3 py-1.5 flex items-center justify-between text-xs font-bold mb-3 sm:mb-4">
            <span>{category.name.toUpperCase()} — {dict.detailPage.statisticalIndicator}</span>
          </div>

          {/* Title & Description */}
          <div className="mb-3 sm:mb-4">
            <h1 className="text-lg sm:text-2xl font-black text-[#14324f] leading-tight">
              {item.title}
            </h1>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              {item.subtitle}
            </p>
          </div>

          {/* Grand Real-Time Master Ticker (Responsive scale) */}
          <div className="bg-[#f5f8fb] border-2 border-[#245280] rounded-xs p-4 sm:p-6 text-center mb-4 sm:mb-5 shadow-xs overflow-hidden">
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#16385c] mb-1">
              {timeframeLabels[timeframe]} ({activeCurrency.code})
            </div>

            <div className="text-3xl sm:text-5xl md:text-6xl font-black text-black tabular-numbers py-1 select-all tracking-tight leading-none break-all sm:break-normal">
              {formatCurrencyValue(currentSpend, activeCurrency, activeCurrency.code === 'BTC')}
            </div>

            <div className="text-xs sm:text-sm font-bold text-[#007700] mt-2 flex items-center justify-center gap-1.5">
              <span>+{formatRatePerSecond(ratePerSecond, activeCurrency)}</span>
              <span className="text-gray-600 font-normal">{dict.heroTicker.perSecondSuffix}</span>
            </div>
          </div>

          {/* Clean 3-Metric Summary Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 mb-4 sm:mb-5 text-center text-xs">
            <div className="card-classic-2010 p-2.5 sm:p-3">
              <div className="text-gray-500 font-bold uppercase text-[10px]">{dict.detailPage.annualBaseline}</div>
              <div className="text-sm font-black text-[#14324f] tabular-numbers mt-0.5">
                {formatCompactCurrency(item.annualSpendUSD * activeCurrency.rateToUSD, activeCurrency)}
              </div>
              <div className="text-[10px] text-gray-400 mt-0.5">{dict.detailPage.annualizedExp}</div>
            </div>

            <div className="card-classic-2010 p-2.5 sm:p-3">
              <div className="text-gray-500 font-bold uppercase text-[10px]">{dict.detailPage.ratePerMinute}</div>
              <div className="text-sm font-black text-[#14324f] tabular-numbers mt-0.5">
                {formatCurrencyValue(ratePerMinute, activeCurrency)}
              </div>
              <div className="text-[10px] text-gray-400 mt-0.5">{dict.detailPage.rateOfFlow}</div>
            </div>

            <div className="card-classic-2010 p-2.5 sm:p-3">
              <div className="text-gray-500 font-bold uppercase text-[10px]">{dict.detailPage.shareOfGdp}</div>
              <div className="text-sm font-black text-[#14324f] tabular-numbers mt-0.5">
                ~{pctOfWorldTotal}%
              </div>
              <div className="text-[10px] text-gray-400 mt-0.5">{dict.detailPage.ofWorldEconomy}</div>
            </div>
          </div>

          {/* Historical Trend Chart */}
          {item.history && item.history.length > 0 && (
            <SpendTrendChart
              data={item.history}
              activeCurrency={activeCurrency}
              title={dict.detailPage.historicalChartTitle}
              subtitle={dict.detailPage.historicalChartSubtitle}
              locale={locale}
            />
          )}

          {/* Concise Institutional Context Callout */}
          <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-xs p-3 sm:p-3.5 text-xs text-gray-700 mb-4 sm:mb-5 leading-relaxed">
            <div className="font-bold text-[#14324f] mb-1 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#1c4b78]" />
              <span>{dict.detailPage.statisticalOverview}</span>
            </div>
            <p>
              {item.description}
            </p>
          </div>

          {/* Authoritative Source Badge */}
          <div className="bg-[#f0f4f8] border border-[#c8d1db] rounded-xs px-3 py-2 text-[11px] text-[#445566] flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#007700] shrink-0" />
              <span>
                <strong>{dict.detailPage.officialSource}</strong> {item.sourceName} ({item.sourceYear})
              </span>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer
        locale={locale}
        currencyCode={currencyCode}
        setCurrencyCode={setCurrencyCode}
      />

      {/* Floating Back to Top Button */}
      <BackToTop locale={locale} />
    </div>
  );
};
