'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { SpendItem } from '@/types/spend';
import { Locale } from '@/types/i18n';
import { useWorldSpendEngine } from '@/hooks/useWorldSpendEngine';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getDictionary } from '@/utils/i18n';
import {
  formatCurrencyValue,
  formatRatePerSecond,
  formatCompactCurrency,
} from '@/utils/formatters';
import {
  Scale,
  Plus,
  X,
  Share2,
  Check,
  Search,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface MultiCompareViewProps {
  locale?: Locale;
}

const MAX_SELECTION = 10;

// Popular suggestions for 1-click addition when empty
const POPULAR_SUGGESTIONS = [
  'united-states-national-public-debt',
  'spain-national-public-debt',
  'global-military-spend',
  'global-social-media-advertising-spend',
  'tiktok-advertising-and-in-app-spending',
  'spain-gasoline-fuel-consumption-spending',
  'spain-total-public-expenditure',
  'artificial-intelligence-investment',
];

export const MultiCompareView: React.FC<MultiCompareViewProps> = ({ locale = 'en' }) => {
  const dict = getDictionary(locale);
  const searchParams = useSearchParams();

  const {
    currencyCode,
    setCurrencyCode,
    activeCurrency,
    timeframe,
    setTimeframe,
    getItemCurrentSpend,
    getItemRatePerSecond,
    spendItems,
  } = useWorldSpendEngine(locale);

  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // By default, NO counter is added unless specified in URL query
  const [selectedIds, setSelectedIds] = useState<string[]>(() => {
    const urlIds = searchParams?.get('ids');
    if (urlIds) {
      const parsed = urlIds.split(',').filter((id) => spendItems.some((item) => item.id === id));
      if (parsed.length > 0) return parsed.slice(0, MAX_SELECTION);
    }
    return []; // Empty by default
  });

  // Sync with URL query parameters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (selectedIds.length > 0) {
        url.searchParams.set('ids', selectedIds.join(','));
      } else {
        url.searchParams.delete('ids');
      }
      window.history.replaceState({}, '', url.toString());
    }
  }, [selectedIds]);

  // Selected spend items list
  const selectedItems = useMemo(() => {
    return selectedIds
      .map((id) => spendItems.find((item) => item.id === id))
      .filter((item): item is SpendItem => Boolean(item));
  }, [selectedIds, spendItems]);

  // Sorted items by annual spend
  const rankedItems = useMemo(() => {
    return [...selectedItems].sort((a, b) => b.annualSpendUSD - a.annualSpendUSD);
  }, [selectedItems]);

  const topAnnual = rankedItems[0]?.annualSpendUSD || 1;

  // Filter available items for search
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return spendItems.filter((it) => !selectedIds.includes(it.id)).slice(0, 10);
    }
    const q = searchQuery.toLowerCase().trim();
    return spendItems
      .filter(
        (it) =>
          !selectedIds.includes(it.id) &&
          (it.title.toLowerCase().includes(q) ||
            it.subtitle.toLowerCase().includes(q) ||
            it.tags?.some((t) => t.toLowerCase().includes(q)))
      )
      .slice(0, 10);
  }, [spendItems, selectedIds, searchQuery]);

  const addCounter = (id: string) => {
    if (selectedIds.length >= MAX_SELECTION) {
      alert(`Máximo ${MAX_SELECTION} contadores simultáneos.`);
      return;
    }
    if (!selectedIds.includes(id)) {
      setSelectedIds((prev) => [...prev, id]);
    }
    setSearchQuery('');
    setDropdownOpen(false);
  };

  const removeCounter = (id: string) => {
    setSelectedIds((prev) => prev.filter((i) => i !== id));
  };

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  const timeframeLabel =
    timeframe === 'year'
      ? 'Acumulado 2026'
      : timeframe === 'today'
      ? 'Hoy (desde 00:00)'
      : timeframe === 'session'
      ? 'Durante tu visita'
      : 'Por segundo';

  return (
    <div className="min-h-screen bg-[#edf1f5] text-[#222222] flex flex-col justify-between font-sans antialiased">
      {/* Universal Top Header */}
      <Header
        timeframe={timeframe}
        setTimeframe={setTimeframe}
        currencyCode={currencyCode}
        setCurrencyCode={setCurrencyCode}
        locale={locale}
      />

      <main className="flex-grow max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-6 w-full space-y-4">
        {/* Simple Top Navigation & Action Bar */}
        <div className="flex items-center justify-between gap-2 text-xs">
          <Link
            href={homeHref}
            className="text-[#245280] font-bold hover:underline inline-flex items-center gap-1"
          >
            ← Volver a todos los contadores
          </Link>

          {selectedIds.length > 0 && (
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#c8d1db] text-[#14324f] rounded-xs font-bold hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">¡Enlace copiado!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#245280]" />
                  <span>Compartir comparativa</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Clean Header & Step-by-Step Add Box */}
        <div className="bg-white border border-[#c8d1db] rounded-xs p-4 sm:p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 pb-3 mb-3">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-black text-[#245280] uppercase tracking-wider mb-0.5">
                <Scale className="w-4 h-4 text-[#245280]" />
                <span>Comparador en Vivo</span>
              </div>
              <h1 className="text-lg sm:text-xl font-black text-[#14324f]">
                Comparar Contadores
              </h1>
              <p className="text-xs text-gray-600 mt-0.5">
                Selecciona hasta <strong>10 contadores</strong> para comparar en paralelo su volumen y velocidad de gasto a 60 FPS.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-black text-gray-700 bg-gray-100 border border-gray-300 px-2.5 py-1 rounded-xs">
                {selectedIds.length} / {MAX_SELECTION} añadidos
              </span>
              {selectedIds.length > 0 && (
                <button
                  onClick={() => setSelectedIds([])}
                  className="text-xs font-bold text-red-600 hover:text-red-800 underline cursor-pointer px-1"
                >
                  Vaciar tabla
                </button>
              )}
            </div>
          </div>

          {/* Simple Direct Search & Add Input with Clear Instructions */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[#14324f]">
              Paso 1: Busca y añade los contadores que quieras comparar
            </label>
            <div className="relative">
              <div className="relative">
                <Search className="w-4 h-4 text-[#245280] absolute left-3 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onFocus={() => setDropdownOpen(true)}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setDropdownOpen(true);
                  }}
                  placeholder={
                    selectedIds.length >= MAX_SELECTION
                      ? `Límite alcanzado (${MAX_SELECTION}/${MAX_SELECTION}). Elimina alguno para añadir otro.`
                      : '+ Escribe aquí el nombre de cualquier contador para añadirlo (ej. tiktok, deuda españa, militar, gasolina...)'
                  }
                  disabled={selectedIds.length >= MAX_SELECTION}
                  className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#f8fafc] border-2 border-[#245280] rounded-xs font-medium focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#245280] disabled:opacity-50"
                />
              </div>

              {/* Dropdown Suggestions */}
              {dropdownOpen && selectedIds.length < MAX_SELECTION && (
                <>
                  <div
                    className="fixed inset-0 z-20"
                    onClick={() => setDropdownOpen(false)}
                  />
                  <div className="absolute left-0 right-0 top-full mt-1 bg-white border-2 border-[#245280] rounded-xs shadow-xl z-30 max-h-72 overflow-y-auto divide-y divide-gray-100">
                    <div className="px-3 py-1.5 bg-gray-100 text-[11px] font-bold text-gray-600">
                      Haz clic en un contador para añadirlo a la tabla:
                    </div>
                    {searchResults.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => addCounter(item.id)}
                        className="w-full text-left px-3 py-2 text-xs hover:bg-blue-50 flex items-center justify-between gap-2 transition-colors cursor-pointer"
                      >
                        <div className="truncate flex items-center gap-2">
                          <Plus className="w-3.5 h-3.5 text-[#245280] shrink-0" />
                          <div className="truncate">
                            <span className="font-bold text-[#14324f] block truncate">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-gray-500 truncate block">
                              {item.subtitle}
                            </span>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-gray-700 shrink-0 bg-gray-100 px-2 py-0.5 rounded">
                          +{formatCompactCurrency(item.annualSpendUSD, activeCurrency)}/año
                        </span>
                      </button>
                    ))}
                    {searchResults.length === 0 && (
                      <div className="p-4 text-xs text-gray-500 text-center">
                        No se encontraron más contadores con esa búsqueda.
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Quick 1-Click Suggestions under search input */}
            <div className="pt-1 flex flex-wrap items-center gap-1.5 text-[11px]">
              <span className="font-bold text-gray-600 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" />
                Sugerencias rápidas:
              </span>
              {POPULAR_SUGGESTIONS.filter((id) => !selectedIds.includes(id))
                .slice(0, 5)
                .map((id) => {
                  const item = spendItems.find((it) => it.id === id);
                  if (!item) return null;
                  return (
                    <button
                      key={id}
                      onClick={() => addCounter(id)}
                      disabled={selectedIds.length >= MAX_SELECTION}
                      className="px-2 py-0.5 bg-gray-100 hover:bg-blue-50 text-[#14324f] hover:text-[#245280] border border-gray-300 rounded-xs font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <Plus className="w-2.5 h-2.5 text-[#245280]" />
                      <span>{item.title}</span>
                    </button>
                  );
                })}
            </div>
          </div>
        </div>

        {/* The Live Comparison Table (or Clean Instructional Empty State) */}
        {rankedItems.length > 0 ? (
          <div className="bg-white border border-[#c8d1db] rounded-xs shadow-xs overflow-hidden">
            <div className="bg-gradient-to-r from-[#245280] to-[#16385c] text-white px-3 sm:px-4 py-2.5 flex items-center justify-between text-xs font-bold">
              <span>TABLA COMPARATIVA EN VIVO (60 FPS)</span>
              <span className="text-blue-100 text-[11px]">{timeframeLabel}</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-300 text-[11px] font-bold text-gray-700 uppercase">
                    <th className="py-2.5 px-3 w-8 text-center">#</th>
                    <th className="py-2.5 px-3">Contador / Indicador</th>
                    <th className="py-2.5 px-3 text-right">Gasto en Tiempo Real</th>
                    <th className="py-2.5 px-3 text-right hidden sm:table-cell">Velocidad / Seg</th>
                    <th className="py-2.5 px-3 text-right hidden md:table-cell">Gasto Anual</th>
                    <th className="py-2.5 px-3 w-10 text-center">Quitar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-xs font-mono">
                  {rankedItems.map((item, idx) => {
                    const currentSpend = getItemCurrentSpend(item.annualSpendUSD);
                    const ratePerSec = getItemRatePerSecond(item.annualSpendUSD);
                    const relativePercent = topAnnual > 0 ? (item.annualSpendUSD / topAnnual) * 100 : 0;
                    const queryParams = `from=compare${selectedIds.length > 0 ? `&ids=${selectedIds.join(',')}` : ''}`;
                    const detailHref = locale === 'en'
                      ? `/stat/${item.id}?${queryParams}`
                      : `/${locale}/stat/${item.id}?${queryParams}`;

                    return (
                      <tr
                        key={item.id}
                        className="hover:bg-blue-50/40 transition-colors group"
                      >
                        {/* Position Ranking */}
                        <td className="py-3 px-3 text-center font-bold text-gray-500">
                          #{idx + 1}
                        </td>

                        {/* Title & Proportional Bar */}
                        <td className="py-3 px-3 font-sans">
                          <Link
                            href={detailHref}
                            className="font-bold text-[#14324f] hover:text-[#1c4b78] hover:underline flex items-center gap-1"
                          >
                            <span>{item.title}</span>
                            <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          {/* Relative proportion bar */}
                          <div className="w-full max-w-[200px] h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1.5">
                            <div
                              className="h-full rounded-full transition-all duration-300"
                              style={{
                                width: `${Math.max(relativePercent, 2)}%`,
                                backgroundColor: item.accentColor || '#245280',
                              }}
                            />
                          </div>
                        </td>

                        {/* Live 60 FPS Big Ticking Number */}
                        <td className="py-3 px-3 text-right font-black text-sm sm:text-base text-[#112233] tabular-nums">
                          {formatCurrencyValue(currentSpend, activeCurrency)}
                        </td>

                        {/* Rate per Second */}
                        <td className="py-3 px-3 text-right font-bold text-emerald-700 tabular-nums hidden sm:table-cell">
                          {formatRatePerSecond(ratePerSec, activeCurrency)}
                        </td>

                        {/* Annual Base */}
                        <td className="py-3 px-3 text-right text-gray-600 font-bold hidden md:table-cell">
                          {formatCompactCurrency(item.annualSpendUSD, activeCurrency)}
                        </td>

                        {/* Remove Action Button */}
                        <td className="py-3 px-3 text-center">
                          <button
                            type="button"
                            onClick={() => removeCounter(item.id)}
                            className="text-gray-400 hover:text-red-600 p-1 rounded transition-colors cursor-pointer"
                            title="Eliminar de la comparativa"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Clear, simple instructional empty state */
          <div className="bg-white border-2 border-dashed border-[#c8d1db] rounded-xs p-8 text-center text-gray-600 shadow-xs">
            <Scale className="w-10 h-10 text-[#245280] mx-auto mb-2 opacity-80" />
            <h2 className="text-base font-black text-[#14324f]">
              Tu tabla comparativa está vacía
            </h2>
            <p className="text-xs text-gray-600 mt-1 max-w-md mx-auto">
              Escribe en el buscador de arriba o haz clic en cualquiera de las sugerencias para añadir contadores y verlos correr en tiempo real.
            </p>
          </div>
        )}
      </main>

      <Footer locale={locale} />
    </div>
  );
};
