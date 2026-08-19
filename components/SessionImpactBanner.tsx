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
    <div className="bg-[#fcfbee] border border-[#dcd6a8] rounded-xs px-3 sm:px-4 py-2.5 mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#443b18] text-center sm:text-left">
      <div>
        {dict.sessionBanner.timeOnPage} <strong className="text-gray-900 font-bold">{formatElapsedTime(sessionSeconds)}</strong>
      </div>
      <div>
        {dict.sessionBanner.spendDuringVisit}{' '}
        <strong className="text-black font-black tabular-numbers text-xs sm:text-sm">
          {formatCurrencyValue(sessionSpendCurrency, activeCurrency)}
        </strong>
      </div>
    </div>
  );
};
