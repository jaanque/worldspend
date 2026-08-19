'use client';

import React, { useState } from 'react';
import { SpendItem, CurrencyConfig, TimeframeMode } from '@/types/spend';
import { SPEND_ITEMS } from '@/data/spendData';
import { DynamicIcon } from '@/components/DynamicIcon';
import { formatCurrencyValue, formatCompactCurrency, formatRatePerSecond } from '@/utils/formatters';
import { Scale, Swords, ArrowRight, Zap, RefreshCw, Flame } from 'lucide-react';

interface ExpenseClashComparatorProps {
  activeCurrency: CurrencyConfig;
  timeframe: TimeframeMode;
  getItemCurrentSpend: (annualUSD: number) => number;
  getItemRatePerSecond: (annualUSD: number) => number;
  initialItemA?: SpendItem;
  initialItemB?: SpendItem;
}

const PRESET_DUELS = [
  {
    title: 'Guerra vs. Cura del Cáncer',
    idA: 'global-military-spend',
    idB: 'cancer-research',
  },
  {
    title: 'Publicidad Digital vs. Carrera Espacial',
    idA: 'digital-advertising',
    idB: 'space-exploration',
  },
  {
    title: 'Narcotráfico vs. Energías Renovables',
    idA: 'illegal-drug-trade',
    idB: 'renewable-energy-investment',
  },
  {
    title: 'Comida Rápida vs. Salud por Obesidad',
    idA: 'fast-food-industry',
    idB: 'obesity-treatment-cost',
  },
];

export const ExpenseClashComparator: React.FC<ExpenseClashComparatorProps> = ({
  activeCurrency,
  timeframe,
  getItemCurrentSpend,
  getItemRatePerSecond,
  initialItemA,
  initialItemB,
}) => {
  const [selectedIdA, setSelectedIdA] = useState<string>(
    initialItemA?.id || 'global-military-spend'
  );
  const [selectedIdB, setSelectedIdB] = useState<string>(
    initialItemB?.id || 'cancer-research'
  );

  const itemA = SPEND_ITEMS.find((item) => item.id === selectedIdA) || SPEND_ITEMS[0];
  const itemB = SPEND_ITEMS.find((item) => item.id === selectedIdB) || SPEND_ITEMS[1];

  const currentSpendA = getItemCurrentSpend(itemA.annualSpendUSD);
  const currentSpendB = getItemCurrentSpend(itemB.annualSpendUSD);

  const rateA = getItemRatePerSecond(itemA.annualSpendUSD);
  const rateB = getItemRatePerSecond(itemB.annualSpendUSD);

  // Ratio comparison
  const ratio = itemA.annualSpendUSD > itemB.annualSpendUSD
    ? itemA.annualSpendUSD / itemB.annualSpendUSD
    : itemB.annualSpendUSD / itemA.annualSpendUSD;

  const winner = itemA.annualSpendUSD >= itemB.annualSpendUSD ? 'A' : 'B';
  const totalCombined = currentSpendA + currentSpendB;
  const pctA = totalCombined > 0 ? (currentSpendA / totalCombined) * 100 : 50;
  const pctB = totalCombined > 0 ? (currentSpendB / totalCombined) * 100 : 50;

  const swapItems = () => {
    setSelectedIdA(selectedIdB);
    setSelectedIdB(selectedIdA);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="relative overflow-hidden rounded-3xl bg-[#0b101d] border border-sky-500/20 p-6 sm:p-8 shadow-2xl">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-500/10 blur-[90px] pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Swords className="w-3.5 h-3.5" />
              Comparador en Vivo
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Duelo de Gastos: Carrera Financiera en Tiempo Real
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Enfrenta dos partidas y observa cómo se acumulan segundo a segundo con sus velocidades relativas.
            </p>
          </div>

          {/* Preset buttons */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#050811] p-1.5 rounded-2xl border border-white/5 text-xs">
            <span className="text-[11px] font-bold text-slate-400 px-2">Duelos sugeridos:</span>
            {PRESET_DUELS.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedIdA(p.idA);
                  setSelectedIdB(p.idB);
                }}
                className={`px-2.5 py-1 rounded-xl font-semibold transition-all cursor-pointer ${
                  selectedIdA === p.idA && selectedIdB === p.idB
                    ? 'bg-purple-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>

        {/* Selectors and Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-center">
          {/* Card A */}
          <div className="lg:col-span-5 bg-[#070b14] rounded-2xl p-5 border border-white/10 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: itemA.accentColor }}
            />
            <div className="flex items-center justify-between gap-2 mb-3">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Gasto A
              </label>
              <select
                value={selectedIdA}
                onChange={(e) => setSelectedIdA(e.target.value)}
                className="bg-[#0f172a] text-xs font-bold text-slate-200 border border-white/10 rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-sky-400 cursor-pointer max-w-[200px] truncate"
              >
                {SPEND_ITEMS.map((item) => (
                  <option key={item.id} value={item.id} className="bg-[#0f172a]">
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div
                className="p-2.5 rounded-xl shrink-0"
                style={{
                  backgroundColor: `${itemA.accentColor}15`,
                  color: itemA.accentColor,
                }}
              >
                <DynamicIcon name={itemA.iconName} className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-white truncate">{itemA.title}</h3>
                <div className="text-xs text-emerald-400 font-bold tabular-numbers">
                  +{formatRatePerSecond(rateA, activeCurrency)}/seg
                </div>
              </div>
            </div>

            <div className="text-2xl sm:text-3xl font-black text-white tabular-numbers my-2">
              {formatCurrencyValue(currentSpendA, activeCurrency, activeCurrency.code === 'BTC')}
            </div>

            <div className="text-xs text-slate-400">
              Anual:{' '}
              <strong className="text-slate-200">
                {formatCompactCurrency(itemA.annualSpendUSD * activeCurrency.rateToUSD, activeCurrency)}
              </strong>
            </div>
          </div>

          {/* VS Divider Button */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center gap-2">
            <button
              onClick={swapItems}
              title="Intercambiar posiciones"
              className="p-3 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 hover:bg-purple-500 hover:text-white transition-all shadow-lg shadow-purple-500/20 cursor-pointer"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
            <span className="text-xs font-black text-slate-500 tracking-widest">VS</span>
          </div>

          {/* Card B */}
          <div className="lg:col-span-5 bg-[#070b14] rounded-2xl p-5 border border-white/10 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: itemB.accentColor }}
            />
            <div className="flex items-center justify-between gap-2 mb-3">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Gasto B
              </label>
              <select
                value={selectedIdB}
                onChange={(e) => setSelectedIdB(e.target.value)}
                className="bg-[#0f172a] text-xs font-bold text-slate-200 border border-white/10 rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-sky-400 cursor-pointer max-w-[200px] truncate"
              >
                {SPEND_ITEMS.map((item) => (
                  <option key={item.id} value={item.id} className="bg-[#0f172a]">
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div
                className="p-2.5 rounded-xl shrink-0"
                style={{
                  backgroundColor: `${itemB.accentColor}15`,
                  color: itemB.accentColor,
                }}
              >
                <DynamicIcon name={itemB.iconName} className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-white truncate">{itemB.title}</h3>
                <div className="text-xs text-emerald-400 font-bold tabular-numbers">
                  +{formatRatePerSecond(rateB, activeCurrency)}/seg
                </div>
              </div>
            </div>

            <div className="text-2xl sm:text-3xl font-black text-white tabular-numbers my-2">
              {formatCurrencyValue(currentSpendB, activeCurrency, activeCurrency.code === 'BTC')}
            </div>

            <div className="text-xs text-slate-400">
              Anual:{' '}
              <strong className="text-slate-200">
                {formatCompactCurrency(itemB.annualSpendUSD * activeCurrency.rateToUSD, activeCurrency)}
              </strong>
            </div>
          </div>
        </div>

        {/* Live Race Progress Bar */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <div className="flex items-center justify-between text-xs font-bold mb-2">
            <span style={{ color: itemA.accentColor }}>
              {itemA.title}: {pctA.toFixed(1)}%
            </span>
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[11px] font-extrabold flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-amber-400" />
              <span>
                {winner === 'A' ? itemA.title : itemB.title} acumula{' '}
                <strong className="text-amber-400 font-black">{ratio.toFixed(1)}x</strong> más rápido
              </span>
            </div>
            <span style={{ color: itemB.accentColor }}>
              {itemB.title}: {pctB.toFixed(1)}%
            </span>
          </div>

          <div className="w-full h-3.5 bg-slate-900 rounded-full overflow-hidden flex p-0.5 border border-white/10">
            <div
              className="h-full rounded-l-full transition-all duration-300"
              style={{
                width: `${pctA}%`,
                backgroundColor: itemA.accentColor,
              }}
            />
            <div
              className="h-full rounded-r-full transition-all duration-300"
              style={{
                width: `${pctB}%`,
                backgroundColor: itemB.accentColor,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
