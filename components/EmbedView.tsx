'use client';

import React, { useMemo, useState, useEffect, useRef } from 'react';
import { CURRENCIES } from '@/data/spendData';
import { CurrencyCode, TimeframeMode } from '@/types/spend';
import { Locale } from '@/types/i18n';
import { getElapsedSeconds, calculateCurrentSpend, getRatePerSecond, formatCurrencyValue, formatRatePerSecond } from '@/utils/formatters';
import { getLocalizedSpendItems, getDictionary } from '@/utils/i18n';

interface EmbedViewProps {
  id: string;
  locale?: Locale;
  currency?: string;
  timeframe?: string;
}

export const EmbedView: React.FC<EmbedViewProps> = ({
  id,
  locale = 'en',
  currency,
  timeframe: queryTimeframe,
}) => {
  const dict = getDictionary(locale);
  const items = getLocalizedSpendItems(locale);

  const item = useMemo(() => {
    return items.find((s) => s.id === id);
  }, [items, id]);

  if (!item) {
    return (
      <div className="p-4 text-xs text-red-600 bg-white font-sans border border-red-200">
        Counter &ldquo;{id}&rdquo; not found.
      </div>
    );
  }

  const currencyCode: CurrencyCode =
    currency && CURRENCIES[currency.toUpperCase() as CurrencyCode]
      ? (currency.toUpperCase() as CurrencyCode)
      : 'USD';

  const timeframe: TimeframeMode =
    queryTimeframe && ['year', 'today', 'session', 'second'].includes(queryTimeframe)
      ? (queryTimeframe as TimeframeMode)
      : 'year';

  const activeCurrency = CURRENCIES[currencyCode] || CURRENCIES.USD;

  const [sessionStartTime] = useState<number>(() => Date.now());
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    let active = true;

    const tick = () => {
      if (!active) return;
      const now = new Date();
      const currentElapsed = getElapsedSeconds(timeframe, now, sessionStartTime);
      setElapsedSeconds(currentElapsed);
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

  const currentSpend = calculateCurrentSpend(
    item.annualSpendUSD,
    timeframe,
    elapsedSeconds,
    currencyCode
  );

  const ratePerSecond = getRatePerSecond(item.annualSpendUSD, currencyCode);
  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  return (
    <div className="bg-white border border-[#c8d1db] rounded-xs p-3 font-sans w-full max-w-[340px] shadow-xs select-none">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <span className="text-xs font-bold text-[#14324f] leading-tight line-clamp-1">
          {item.title}
        </span>
        <span className="text-[10px] font-bold text-[#007700] tabular-numbers shrink-0">
          +{formatRatePerSecond(ratePerSecond, activeCurrency)}{dict.card.perSecondBadge}
        </span>
      </div>

      {/* Main Ticking Number */}
      <div className="text-2xl font-black text-black tabular-numbers py-0.5">
        {formatCurrencyValue(currentSpend, activeCurrency, activeCurrency.code === 'BTC')}
      </div>

      {/* Footer Branding and source */}
      <div className="flex items-center justify-between text-[10px] text-gray-500 pt-1.5 border-t border-gray-100 mt-1">
        <span className="truncate">{dict.card.officialSourcePrefix} {item.sourceName}</span>
        <a
          href={homeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1c4b78] hover:underline font-bold shrink-0 ml-2"
        >
          WorldSpend.org
        </a>
      </div>
    </div>
  );
};
