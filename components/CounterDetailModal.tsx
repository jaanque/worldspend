'use client';

import React from 'react';
import { SpendItem, CurrencyConfig, TimeframeMode } from '@/types/spend';
import { CATEGORIES } from '@/data/spendData';
import { DynamicIcon } from '@/components/DynamicIcon';
import { formatCurrencyValue, formatCompactCurrency } from '@/utils/formatters';
import { X, TrendingUp, BookOpen, Lightbulb, Scale, ShieldCheck, PieChart } from 'lucide-react';

interface CounterDetailModalProps {
  item: SpendItem | null;
  isOpen: boolean;
  onClose: () => void;
  currentSpend: number;
  ratePerSecond: number;
  activeCurrency: CurrencyConfig;
  timeframe: TimeframeMode;
  onSelectForClash?: (item: SpendItem) => void;
}

export const CounterDetailModal: React.FC<CounterDetailModalProps> = ({
  item,
  isOpen,
  onClose,
  currentSpend,
  ratePerSecond,
  activeCurrency,
  timeframe,
  onSelectForClash,
}) => {
  if (!isOpen || !item) return null;

  const category = CATEGORIES.find((c) => c.id === item.categoryId) || CATEGORIES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#090e1a] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header Glow Bar */}
        <div
          className="h-2 w-full"
          style={{ backgroundColor: item.accentColor }}
        />

        <div className="p-6 sm:p-8">
          {/* Top Bar: Category & Close */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold border"
              style={{
                backgroundColor: category.badgeBg,
                borderColor: category.badgeBorder,
                color: category.color,
              }}
            >
              <DynamicIcon name={category.iconName} className="w-4 h-4" />
              <span>{category.name}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Description */}
          <div className="flex items-start gap-4 mb-6">
            <div
              className="p-3.5 rounded-2xl shrink-0 flex items-center justify-center border"
              style={{
                backgroundColor: `${item.accentColor}15`,
                borderColor: `${item.accentColor}35`,
                color: item.accentColor,
              }}
            >
              <DynamicIcon name={item.iconName} className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {item.title}
              </h2>
              <p className="text-sm text-slate-300 mt-1">
                {item.description}
              </p>
            </div>
          </div>

          {/* Live Metric Box */}
          <div className="bg-[#050811] rounded-2xl p-5 border border-white/10 mb-6">
            <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-1">
              <span>Monto Acumulado en Vivo ({timeframe.toUpperCase()})</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                +{formatCurrencyValue(ratePerSecond, activeCurrency)}/seg
              </span>
            </div>
            <div
              className="text-3xl sm:text-4xl font-black tabular-numbers select-all"
              style={{ color: '#ffffff', textShadow: `0 0 20px ${item.accentColor}40` }}
            >
              {formatCurrencyValue(currentSpend, activeCurrency, activeCurrency.code === 'BTC')}
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Gasto anual base estimado:{' '}
              <strong className="text-white">
                {formatCompactCurrency(item.annualSpendUSD * activeCurrency.rateToUSD, activeCurrency)}
              </strong>{' '}
              ({formatCurrencyValue(item.annualSpendUSD * activeCurrency.rateToUSD, activeCurrency)})
            </div>
          </div>

          {/* Breakdown Section */}
          {item.breakdown && item.breakdown.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-3">
                <PieChart className="w-4 h-4 text-sky-400" />
                Desglose Estimado de la Partida
              </h3>
              <div className="space-y-3">
                {item.breakdown.map((b, idx) => (
                  <div key={idx} className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    <div className="flex justify-between text-xs font-semibold mb-1.5">
                      <span className="text-slate-200">{b.label}</span>
                      <span className="text-sky-400 font-bold tabular-numbers">{b.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${b.percentage}%`,
                          backgroundColor: item.accentColor,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Curiosities and Facts */}
          {item.curiosities && item.curiosities.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2.5">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                Datos Reveladores
              </h3>
              <div className="space-y-2">
                {item.curiosities.map((c, idx) => (
                  <div
                    key={idx}
                    className="text-xs text-slate-300 bg-amber-500/5 border border-amber-500/20 p-3 rounded-xl flex items-start gap-2.5"
                  >
                    <span className="text-amber-400 font-bold">▪</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Official Source Badge */}
          <div className="bg-slate-900/80 rounded-2xl p-4 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="text-slate-400">Fuente oficial verificada:</span>{' '}
                <strong className="text-slate-200">{item.sourceName}</strong> ({item.sourceYear})
              </div>
            </div>

            {onSelectForClash && (
              <button
                onClick={() => {
                  onSelectForClash(item);
                  onClose();
                }}
                className="px-3.5 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-sky-500/20 cursor-pointer shrink-0"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Llevar a Duelo de Gastos</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
