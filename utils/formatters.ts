import { CurrencyCode, CurrencyConfig, TimeframeMode } from '@/types/spend';
import { CURRENCIES } from '@/data/spendData';

const SECONDS_PER_YEAR = 365.25 * 24 * 3600; // 31,557,600 seconds

export function getElapsedSeconds(
  mode: TimeframeMode,
  now: Date,
  sessionStartTime: number,
  speedMultiplier: number = 1
): number {
  if (mode === 'second') {
    return 1;
  }

  if (mode === 'session') {
    const elapsedRealMs = Math.max(0, now.getTime() - sessionStartTime);
    return (elapsedRealMs / 1000) * speedMultiplier;
  }

  if (mode === 'today') {
    const startOfToday = new Date(now);
    startOfToday.setUTCHours(0, 0, 0, 0);
    const msToday = Math.max(0, now.getTime() - startOfToday.getTime());
    return msToday / 1000;
  }

  // mode === 'year'
  const startOfYear = new Date(Date.UTC(now.getUTCFullYear(), 0, 1, 0, 0, 0, 0));
  const msYear = Math.max(0, now.getTime() - startOfYear.getTime());
  return msYear / 1000;
}

export function convertCurrency(amountUSD: number, currencyCode: CurrencyCode): number {
  const cfg = CURRENCIES[currencyCode] || CURRENCIES.USD;
  return amountUSD * cfg.rateToUSD;
}

export function calculateCurrentSpend(
  annualSpendUSD: number,
  mode: TimeframeMode,
  elapsedSeconds: number,
  currencyCode: CurrencyCode
): number {
  const ratePerSecondUSD = annualSpendUSD / SECONDS_PER_YEAR;
  const totalUSD = ratePerSecondUSD * elapsedSeconds;
  return convertCurrency(totalUSD, currencyCode);
}

export function getRatePerSecond(annualSpendUSD: number, currencyCode: CurrencyCode): number {
  const rateUSD = annualSpendUSD / SECONDS_PER_YEAR;
  return convertCurrency(rateUSD, currencyCode);
}

export function formatRatePerSecond(
  rate: number,
  currency: CurrencyConfig
): string {
  if (currency.code === 'BTC') {
    return `${currency.symbol} ${rate.toLocaleString('en-US', {
      minimumFractionDigits: 4,
      maximumFractionDigits: 6,
    })}`;
  }

  const prefix = currency.symbol;

  if (rate >= 100) {
    return `${prefix}${Math.floor(rate).toLocaleString('en-US')}`;
  }

  if (rate >= 10) {
    return `${prefix}${rate.toLocaleString('en-US', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })}`;
  }

  if (rate >= 0.01) {
    return `${prefix}${rate.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }

  if (rate > 0) {
    return `${prefix}${rate.toLocaleString('en-US', {
      minimumFractionDigits: 3,
      maximumFractionDigits: 4,
    })}`;
  }

  return `${prefix}0.00`;
}

export function formatCurrencyValue(
  value: number,
  currency: CurrencyConfig,
  showDecimals: boolean = false
): string {
  if (currency.code === 'BTC') {
    return `${currency.symbol} ${value.toLocaleString('en-US', {
      minimumFractionDigits: 4,
      maximumFractionDigits: 6,
    })}`;
  }

  // Determine decimal precision based on magnitude so every counter rolls continuously without stalling
  const decimals = showDecimals || value < 100000 || value >= 1000000 ? 2 : 0;

  const formatted = value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return `${currency.symbol}${formatted}`;
}

export function formatCompactCurrency(value: number, currency: CurrencyConfig): string {
  const prefix = currency.code === 'BTC' ? `${currency.symbol} ` : currency.symbol;

  if (currency.code === 'BTC') {
    return `${prefix}${value.toFixed(2)}`;
  }

  const abs = Math.abs(value);
  if (abs >= 1e12) {
    return `${prefix}${(value / 1e12).toFixed(2)} Trillion`;
  }
  if (abs >= 1e9) {
    return `${prefix}${(value / 1e9).toFixed(2)} Billion`;
  }
  if (abs >= 1e6) {
    return `${prefix}${(value / 1e6).toFixed(2)} Million`;
  }
  if (abs >= 1e3) {
    return `${prefix}${(value / 1e3).toFixed(1)}k`;
  }
  return `${prefix}${Math.floor(value)}`;
}

export function formatElapsedTime(seconds: number): string {
  const s = Math.floor(seconds);
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  const remainingS = s % 60;
  if (m < 60) return `${m}m ${remainingS}s`;
  const h = Math.floor(m / 60);
  const remainingM = m % 60;
  return `${h}h ${remainingM}m ${remainingS}s`;
}
