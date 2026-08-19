'use client';

import React from 'react';
import { CurrencyConfig, TimeframeMode } from '@/types/spend';
import { Locale } from '@/types/i18n';
import { formatCurrencyValue } from '@/utils/formatters';
import { getDictionary } from '@/utils/i18n';

interface HeroTotalTickerProps {
  totalWorldSpend: number;
  totalRatePerSecond: number;
  activeCurrency: CurrencyConfig;
  timeframe: TimeframeMode;
  sessionSeconds: number;
  locale?: Locale;
}

export const HeroTotalTicker: React.FC<HeroTotalTickerProps> = ({
  totalWorldSpend,
  totalRatePerSecond,
  activeCurrency,
  timeframe,
  sessionSeconds,
  locale = 'en',
}) => {
  const dict = getDictionary(locale);

  const timeframeLabels: Record<TimeframeMode, string> = {
    year: dict.heroTicker.yearLabel,
    today: dict.heroTicker.todayLabel,
    session: dict.heroTicker.sessionLabel(sessionSeconds),
    second: dict.heroTicker.secondLabel,
  };

  return (
    <div className="bg-[#f5f8fb] border-2 border-[#245280] rounded-xs p-4 sm:p-6 md:p-8 text-center my-4 sm:my-6 shadow-xs overflow-hidden">
      <div className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wide text-[#16385c] mb-1.5 sm:mb-2 px-1">
        {timeframeLabels[timeframe]}
      </div>

      <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black tabular-numbers py-1 select-all tracking-tight leading-none break-all sm:break-normal">
        {formatCurrencyValue(totalWorldSpend, activeCurrency, activeCurrency.code === 'BTC')}
      </div>

      <div className="text-xs sm:text-sm font-bold text-[#007700] mt-2 flex items-center justify-center gap-1.5">
        <span>+{formatCurrencyValue(totalRatePerSecond, activeCurrency)}</span>
        <span className="text-gray-600 font-normal">{dict.heroTicker.perSecondSuffix}</span>
      </div>
    </div>
  );
};
