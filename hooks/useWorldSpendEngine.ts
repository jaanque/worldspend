'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { CurrencyCode, TimeframeMode } from '@/types/spend';
import { Locale } from '@/types/i18n';
import { CURRENCIES } from '@/data/spendData';
import { getElapsedSeconds, calculateCurrentSpend, getRatePerSecond } from '@/utils/formatters';
import { getLocalizedSpendItems } from '@/utils/i18n';

export const GLOBAL_ANNUAL_SPEND_USD = 118350170000000; // $118,350.17 billion USD ($118.35 Trillion USD) Global GDP

export function useWorldSpendEngine(locale: Locale = 'en') {
  const [currencyCode, setCurrencyCode] = useState<CurrencyCode>('USD');
  const [timeframe, setTimeframe] = useState<TimeframeMode>('year');
  const [customStartDate, setCustomStartDate] = useState<string>('2026-01-01');
  const [customEndDate, setCustomEndDate] = useState<string>('2026-12-31');
  const [sessionStartTime] = useState<number>(() => Date.now());
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [sessionSeconds, setSessionSeconds] = useState<number>(0);

  const requestRef = useRef<number | null>(null);

  // Smooth 30 FPS interval timer (33ms) for fluid, clean visual motion
  useEffect(() => {
    const updateTick = () => {
      const now = new Date();

      if (timeframe === 'custom') {
        const startMs = customStartDate ? new Date(customStartDate + 'T00:00:00Z').getTime() : Date.now();
        const endMs = customEndDate ? new Date(customEndDate + 'T23:59:59Z').getTime() : Date.now();
        const diffSec = Math.max(0, (endMs - startMs) / 1000);
        setElapsedSeconds(diffSec);
      } else {
        const currentElapsed = getElapsedSeconds(timeframe, now, sessionStartTime);
        setElapsedSeconds(currentElapsed);
      }

      const currentSession = (Date.now() - sessionStartTime) / 1000;
      setSessionSeconds(currentSession);
    };

    updateTick();
    const interval = setInterval(updateTick, 33);

    return () => clearInterval(interval);
  }, [timeframe, sessionStartTime, customStartDate, customEndDate]);

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
    customStartDate,
    setCustomStartDate,
    customEndDate,
    setCustomEndDate,
    sessionSeconds,
    totalWorldSpend,
    totalRatePerSecond,
    getItemCurrentSpend,
    getItemRatePerSecond,
    spendItems: localizedItems,
  };
}
