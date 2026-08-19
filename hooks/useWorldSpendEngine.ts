'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { CurrencyCode, TimeframeMode } from '@/types/spend';
import { Locale } from '@/types/i18n';
import { CURRENCIES } from '@/data/spendData';
import { getElapsedSeconds, calculateCurrentSpend, getRatePerSecond } from '@/utils/formatters';
import { getLocalizedSpendItems } from '@/utils/i18n';

export const GLOBAL_ANNUAL_SPEND_USD = 108500000000000; // ~$108.5 Trillion USD Global World Product/Spend

export function useWorldSpendEngine(locale: Locale = 'en') {
  const [currencyCode, setCurrencyCode] = useState<CurrencyCode>('USD');
  const [timeframe, setTimeframe] = useState<TimeframeMode>('year');
  const [sessionStartTime] = useState<number>(() => Date.now());
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [sessionSeconds, setSessionSeconds] = useState<number>(0);

  const requestRef = useRef<number | null>(null);

  // High-precision animation loop
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

  const activeCurrency = useMemo(() => {
    return CURRENCIES[currencyCode] || CURRENCIES.USD;
  }, [currencyCode]);

  const totalWorldSpend = useMemo(() => {
    return calculateCurrentSpend(
      GLOBAL_ANNUAL_SPEND_USD,
      timeframe,
      elapsedSeconds,
      currencyCode
    );
  }, [timeframe, elapsedSeconds, currencyCode]);

  const totalRatePerSecond = useMemo(() => {
    return getRatePerSecond(GLOBAL_ANNUAL_SPEND_USD, currencyCode);
  }, [currencyCode]);

  const getItemCurrentSpend = useCallback(
    (annualUSD: number) => {
      return calculateCurrentSpend(annualUSD, timeframe, elapsedSeconds, currencyCode);
    },
    [timeframe, elapsedSeconds, currencyCode]
  );

  const getItemRatePerSecond = useCallback(
    (annualUSD: number) => {
      return getRatePerSecond(annualUSD, currencyCode);
    },
    [currencyCode]
  );

  const localizedItems = useMemo(() => {
    return getLocalizedSpendItems(locale);
  }, [locale]);

  return {
    currencyCode,
    setCurrencyCode,
    activeCurrency,
    timeframe,
    setTimeframe,
    sessionSeconds,
    totalWorldSpend,
    totalRatePerSecond,
    getItemCurrentSpend,
    getItemRatePerSecond,
    spendItems: localizedItems,
  };
}
