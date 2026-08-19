'use client';

import React, { useState } from 'react';
import { CurrencyConfig } from '@/types/spend';
import { SPEND_ITEMS } from '@/data/spendData';
import { formatCurrencyValue, formatCompactCurrency } from '@/utils/formatters';
import { Sliders, Sparkles, CheckCircle2, ArrowRight, HeartHandshake, ShieldCheck } from 'lucide-react';
import { DynamicIcon } from '@/components/DynamicIcon';

interface RedirectionSimulatorProps {
  activeCurrency: CurrencyConfig;
}

const GLOBAL_SOLUTIONS = [
  {
    id: 'hunger',
    title: 'Erradicación del Hambre Extrema en el Planeta',
    costPerYearUSD: 40000000000, // $40 Billion (FAO/UN)
    icon: 'Utensils',
    desc: 'Nutrición escolar y apoyo a pequeños agricultores en zonas vulnerables.',
  },
  {
    id: 'water',
    title: 'Acceso Universal a Agua Potable y Saneamiento',
    costPerYearUSD: 25000000000, // $25 Billion (Banco Mundial)
    icon: 'Droplet',
    desc: 'Redes de distribución de agua limpia y tratamiento de aguas residuales.',
  },
  {
    id: 'cancer-x5',
    title: 'Multiplicar por 5x la Investigación contra el Cáncer',
    costPerYearUSD: 42000000000, // $42 Billion (Oncology Research)
    icon: 'Microscope',
    desc: 'Acelerar ensayos de vacunas de ARNm personalizadas y terapias celulares.',
  },
  {
    id: 'education',
    title: 'Educación Primaria Universal Gratuita',
    costPerYearUSD: 39000000000, // $39 Billion (UNESCO)
    icon: 'GraduationCap',
    desc: 'Construir escuelas y pagar salarios a 3.5 millones de maestros en el sur global.',
  },
  {
    id: 'clean-energy-surge',
    title: 'Electrificación Solar de Toda África Subsahariana',
    costPerYearUSD: 30000000000, // $30 Billion (IEA)
    icon: 'Sun',
    desc: 'Microredes solares comunitarias y almacenamiento para 600 millones de personas.',
  },
];

export const RedirectionSimulator: React.FC<RedirectionSimulatorProps> = ({
  activeCurrency,
}) => {
  const [sourceItemId, setSourceItemId] = useState<string>('global-military-spend');
  const [percentageDiverted, setPercentageDiverted] = useState<number>(5); // 5% default

  const sourceItem = SPEND_ITEMS.find((s) => s.id === sourceItemId) || SPEND_ITEMS[0];
  const divertedUSD = sourceItem.annualSpendUSD * (percentageDiverted / 100);
  const divertedCurrency = divertedUSD * activeCurrency.rateToUSD;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0e1628] to-[#090e1a] border border-emerald-500/20 p-6 sm:p-8 shadow-2xl">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] pointer-events-none" />

        {/* Section Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sliders className="w-3.5 h-3.5" />
            Simulador de Reasignación
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            ¿Qué pasaría si redirigiéramos parte de estos presupuestos?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Ajusta el porcentaje para descubrir qué desafíos globales históricos se financiarían por completo.
          </p>
        </div>

        {/* Controls: Source selector & Slider */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#060a14] p-5 sm:p-6 rounded-2xl border border-white/10 mb-8 items-center">
          {/* Source item dropdown */}
          <div className="md:col-span-5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
              1. Selecciona el gasto a reasignar:
            </label>
            <select
              value={sourceItemId}
              onChange={(e) => setSourceItemId(e.target.value)}
              className="w-full bg-[#0f172a] text-sm font-bold text-white border border-white/10 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-400 cursor-pointer"
            >
              {SPEND_ITEMS.map((item) => (
                <option key={item.id} value={item.id} className="bg-[#0f172a]">
                  {item.title} ({formatCompactCurrency(item.annualSpendUSD, { code: 'USD', symbol: '$', name: 'USD', rateToUSD: 1, decimals: 2 })})
                </option>
              ))}
            </select>
          </div>

          {/* Slider */}
          <div className="md:col-span-7">
            <div className="flex items-center justify-between text-xs font-bold mb-2">
              <span className="text-slate-400 uppercase tracking-wider">
                2. Porcentaje a transferir:
              </span>
              <span className="text-emerald-400 text-base font-black tabular-numbers">
                {percentageDiverted}%
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={percentageDiverted}
              onChange={(e) => setPercentageDiverted(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-semibold">
              <span>1% (Mínimo)</span>
              <span>25%</span>
              <span>50% (La mitad)</span>
            </div>
          </div>
        </div>

        {/* Big Liberated Capital Callout */}
        <div className="text-center py-4 mb-8 bg-emerald-500/5 rounded-2xl border border-emerald-500/20">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
            Fondos Anuales Liberados
          </div>
          <div className="text-3xl sm:text-5xl font-black text-white tabular-numbers select-all drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            {formatCurrencyValue(divertedCurrency, activeCurrency)}
          </div>
          <div className="text-xs text-slate-400 mt-1">
            Representa el {percentageDiverted}% del gasto anual en {sourceItem.title}
          </div>
        </div>

        {/* Solvable World Problems Grid */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Metas Mundiales Financiadas con estos fondos:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GLOBAL_SOLUTIONS.map((sol) => {
              const coveragePct = (divertedUSD / sol.costPerYearUSD) * 100;
              const isFullyCovered = coveragePct >= 100;
              const timesCovered = (divertedUSD / sol.costPerYearUSD).toFixed(1);

              return (
                <div
                  key={sol.id}
                  className={`rounded-2xl p-4.5 border transition-all ${
                    isFullyCovered
                      ? 'bg-emerald-950/20 border-emerald-500/40 shadow-lg shadow-emerald-950/40'
                      : 'bg-white/[0.02] border-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div
                      className={`p-2 rounded-xl border ${
                        isFullyCovered
                          ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400'
                          : 'bg-white/5 border-white/10 text-slate-400'
                      }`}
                    >
                      <DynamicIcon name={sol.icon} className="w-5 h-5" />
                    </div>

                    <div
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                        isFullyCovered
                          ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                          : 'bg-white/5 text-slate-400 border-white/10'
                      }`}
                    >
                      {isFullyCovered ? `Cubierto ${timesCovered}x` : `${coveragePct.toFixed(0)}% cubierto`}
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-white leading-snug mb-1">
                    {sol.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                    {sol.desc}
                  </p>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span>Costo anual est.:</span>
                    <strong className="text-slate-200">
                      {formatCompactCurrency(sol.costPerYearUSD * activeCurrency.rateToUSD, activeCurrency)}
                    </strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
