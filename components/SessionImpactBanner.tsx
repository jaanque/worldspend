'use client';

import React from 'react';
import { CurrencyConfig } from '@/types/spend';
import { Locale } from '@/types/i18n';
import { GLOBAL_ANNUAL_SPEND_USD } from '@/hooks/useWorldSpendEngine';
import { calculateCurrentSpend, formatCurrencyValue, formatElapsedTime } from '@/utils/formatters';
import { getDictionary } from '@/utils/i18n';

interface SessionImpactBannerProps {
  sessionSeconds: number;
  activeCurrency: CurrencyConfig;
  locale?: Locale;
}

export const SessionImpactBanner: React.FC<SessionImpactBannerProps> = ({
  sessionSeconds,
  activeCurrency,
  locale = 'en',
}) => {
  const dict = getDictionary(locale);

  const sessionSpendCurrency = calculateCurrentSpend(
    GLOBAL_ANNUAL_SPEND_USD,
    'session',
    sessionSeconds,
    activeCurrency.code
  );

  return (
    <div className="bg-[#f4f7fa] border border-[#dce3ea] rounded-xs px-3 py-1.5 mb-3 sm:mb-4 flex flex-wrap items-center justify-between gap-1.5 text-[11px] text-gray-600">
      <div className="flex items-center gap-1">
        <span>{dict.sessionBanner.timeOnPage}</span>
        <strong className="text-[#14324f] font-semibold">{formatElapsedTime(sessionSeconds)}</strong>
      </div>
      <div className="flex items-center gap-1.5">
        <span>{dict.sessionBanner.spendDuringVisit}</span>
        <strong className="text-[#14324f] font-bold tabular-numbers">
          {formatCurrencyValue(sessionSpendCurrency, activeCurrency)}
        </strong>
      </div>
    </div>
  );
};
