'use client';

import React, { useState, useMemo } from 'react';
import { Locale } from '@/types/i18n';
import { CurrencyConfig } from '@/types/spend';
import { Calculator } from 'lucide-react';

interface PersonalSpendCalculatorProps {
  totalRatePerSecond: number;
  activeCurrency: CurrencyConfig;
  locale?: Locale;
}

type TimeUnit = 'microseconds' | 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years';

const TIME_UNITS: { id: TimeUnit; divisor: number }[] = [
  { id: 'microseconds', divisor: 0.000001 },
  { id: 'milliseconds', divisor: 0.001 },
  { id: 'seconds',      divisor: 1 },
  { id: 'minutes',      divisor: 60 },
  { id: 'hours',        divisor: 3600 },
  { id: 'days',         divisor: 86400 },
  { id: 'weeks',        divisor: 604800 },
  { id: 'months',       divisor: 2592000 },
  { id: 'years',        divisor: 31536000 },
];

function autoUnit(seconds: number): TimeUnit {
  if (seconds < 0.001)    return 'microseconds';
  if (seconds < 1)        return 'milliseconds';
  if (seconds < 60)       return 'seconds';
  if (seconds < 3600)     return 'minutes';
  if (seconds < 86400)    return 'hours';
  if (seconds < 604800)   return 'days';
  if (seconds < 2592000)  return 'weeks';
  if (seconds < 31536000) return 'months';
  return 'years';
}

export const PersonalSpendCalculator: React.FC<PersonalSpendCalculatorProps> = ({
  totalRatePerSecond,
  activeCurrency,
  locale = 'en',
}) => {
  const [amount, setAmount] = useState<string>('100');
  const [frequency, setFrequency] = useState<'day' | 'month' | 'year'>('month');
  const [selectedUnit, setSelectedUnit] = useState<TimeUnit | 'auto'>('auto');

  const resultSeconds = useMemo(() => {
    const num = parseFloat(amount);
    if (isNaN(num) || num <= 0 || totalRatePerSecond <= 0) return 0;
    return (num / activeCurrency.rateToUSD) / totalRatePerSecond;
  }, [amount, frequency, totalRatePerSecond, activeCurrency]);

  const i18n: Record<string, Record<string, string>> = {
    es: {
      title: '¿A qué equivale tu gasto?',
      subtitle: 'Introduce una cantidad para ver cuánto tarda el mundo en gastar lo mismo.',
      amountLabel: 'Cantidad',
      frequencyLabel: 'Frecuencia',
      unitLabel: 'Mostrar resultado en',
      day: 'Día', month: 'Mes', year: 'Año',
      resultPrefix: 'El mundo gasta esa misma cantidad en',
      auto: 'Auto',
      microseconds: 'Microsegundos', milliseconds: 'Milisegundos',
      seconds: 'Segundos', minutes: 'Minutos', hours: 'Horas',
      days: 'Días', weeks: 'Semanas', months: 'Meses', years: 'Años',
    },
    en: {
      title: 'How does your spending compare?',
      subtitle: 'Enter an amount to see how long it takes the world to spend the same.',
      amountLabel: 'Amount',
      frequencyLabel: 'Frequency',
      unitLabel: 'Display result in',
      day: 'Day', month: 'Month', year: 'Year',
      resultPrefix: 'The world spends that exact amount in',
      auto: 'Auto',
      microseconds: 'Microseconds', milliseconds: 'Milliseconds',
      seconds: 'Seconds', minutes: 'Minutes', hours: 'Hours',
      days: 'Days', weeks: 'Weeks', months: 'Months', years: 'Years',
    },
    fr: {
      title: 'Comment se compare votre dépense ?',
      subtitle: 'Saisissez une somme pour voir combien de temps le monde met à la dépenser.',
      amountLabel: 'Montant',
      frequencyLabel: 'Fréquence',
      unitLabel: 'Afficher le résultat en',
      day: 'Jour', month: 'Mois', year: 'An',
      resultPrefix: 'Le monde dépense cette somme en',
      auto: 'Auto',
      microseconds: 'Microsecondes', milliseconds: 'Millisecondes',
      seconds: 'Secondes', minutes: 'Minutes', hours: 'Heures',
      days: 'Jours', weeks: 'Semaines', months: 'Mois', years: 'Années',
    },
    de: {
      title: 'Wie vergleichen sich Ihre Ausgaben?',
      subtitle: 'Geben Sie einen Betrag ein, um zu sehen, wie lange die Welt braucht, ihn auszugeben.',
      amountLabel: 'Betrag',
      frequencyLabel: 'Häufigkeit',
      unitLabel: 'Ergebnis anzeigen in',
      day: 'Tag', month: 'Monat', year: 'Jahr',
      resultPrefix: 'Die Welt gibt diesen Betrag in',
      auto: 'Auto',
      microseconds: 'Mikrosekunden', milliseconds: 'Millisekunden',
      seconds: 'Sekunden', minutes: 'Minuten', hours: 'Stunden',
      days: 'Tage', weeks: 'Wochen', months: 'Monate', years: 'Jahre',
    },
    pt: {
      title: 'Como se compara o seu gasto?',
      subtitle: 'Insira uma quantia para ver quanto tempo o mundo demora a gastá-la.',
      amountLabel: 'Quantia',
      frequencyLabel: 'Frequência',
      unitLabel: 'Mostrar resultado em',
      day: 'Dia', month: 'Mês', year: 'Ano',
      resultPrefix: 'O mundo gasta essa quantia em',
      auto: 'Auto',
      microseconds: 'Microssegundos', milliseconds: 'Milissegundos',
      seconds: 'Segundos', minutes: 'Minutos', hours: 'Horas',
      days: 'Dias', weeks: 'Semanas', months: 'Meses', years: 'Anos',
    },
  };

  const t = i18n[locale] || i18n.en;

  const activeUnit: TimeUnit = selectedUnit === 'auto' ? autoUnit(resultSeconds) : selectedUnit;
  const unitDivisor = TIME_UNITS.find(u => u.id === activeUnit)?.divisor ?? 1;
  const displayValue = resultSeconds > 0 ? resultSeconds / unitDivisor : 0;

  const formatDisplayValue = (v: number): string => {
    if (v === 0) return '—';
    if (v < 0.001) return v.toExponential(2);
    if (v < 10)    return v.toFixed(4);
    if (v < 1000)  return v.toFixed(2);
    return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(v);
  };

  const allUnits: { id: TimeUnit | 'auto'; label: string }[] = [
    { id: 'auto', label: t.auto },
    ...TIME_UNITS.map(u => ({ id: u.id as TimeUnit | 'auto', label: t[u.id] })),
  ];

  const selectClasses = 'w-full text-sm font-bold bg-white text-[#14324f] border border-[#b0c0d0] rounded-xs px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#245280] cursor-pointer shadow-2xs transition-shadow';

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-[#e2edf8] flex items-center justify-center shrink-0">
          <Calculator className="w-5 h-5 text-[#1c4b78]" />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-black text-[#14324f] leading-tight">{t.title}</h2>
          <p className="text-xs text-gray-500 mt-0.5">{t.subtitle}</p>
        </div>
      </div>

      <div className="border-t border-[#e2edf8] mt-4 pt-6 space-y-6">
        {/* Amount + Frequency row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Amount */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-[#445566] uppercase tracking-wider">
              {t.amountLabel}
            </label>
            <div className="flex items-center bg-white border border-[#b0c0d0] rounded-xs shadow-2xs focus-within:ring-2 focus-within:ring-[#245280] transition-shadow overflow-hidden">
              <span className="px-3 py-3 text-sm font-black text-[#245280] bg-[#edf1f5] border-r border-[#b0c0d0] select-none shrink-0">
                {activeCurrency.symbol}
              </span>
              <input
                type="number"
                min="0"
                step="any"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 px-3 py-3 text-sm font-bold text-[#14324f] bg-transparent focus:outline-none min-w-0 tabular-nums"
                aria-label={t.amountLabel}
                placeholder="100"
              />
            </div>
          </div>

          {/* Frequency */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-[#445566] uppercase tracking-wider">
              {t.frequencyLabel}
            </label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value as 'day' | 'month' | 'year')}
              className={selectClasses}
              aria-label={t.frequencyLabel}
            >
              <option value="day">{t.day}</option>
              <option value="month">{t.month}</option>
              <option value="year">{t.year}</option>
            </select>
          </div>
        </div>

        {/* Unit selector */}
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-[#445566] uppercase tracking-wider">
            {t.unitLabel}
          </label>
          <div className="flex flex-wrap gap-1.5">
            {allUnits.map(u => (
              <button
                key={u.id}
                type="button"
                onClick={() => setSelectedUnit(u.id)}
                className={`text-[11px] font-bold px-3 py-1.5 rounded-xs border transition-all cursor-pointer focus:outline-none ${
                  selectedUnit === u.id
                    ? 'bg-[#245280] text-white border-[#1c3f60] shadow-sm'
                    : 'bg-white text-[#14324f] border-[#b0c0d0] hover:bg-[#e2edf8] hover:border-[#245280]'
                }`}
              >
                {u.label}
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        {resultSeconds > 0 ? (
          <div className="bg-gradient-to-br from-[#e2edf8] to-[#dce8f5] border border-[#b8cde4] rounded-xs p-5 text-center">
            <p className="text-xs text-[#445566] font-semibold mb-2">{t.resultPrefix}</p>
            <div className="flex items-baseline justify-center gap-2 flex-wrap">
              <span className="text-4xl sm:text-5xl font-black text-[#0a5c0a] tabular-nums leading-none tracking-tight">
                {formatDisplayValue(displayValue)}
              </span>
              <span className="text-sm font-bold text-[#1c4b78]">
                {t[activeUnit]?.toLowerCase()}
              </span>
            </div>
          </div>
        ) : (
          <div className="bg-[#f0f5fa] border border-[#dde6f0] rounded-xs p-5 text-center text-gray-400 text-sm font-semibold">
            —
          </div>
        )}
      </div>
    </div>
  );
};
