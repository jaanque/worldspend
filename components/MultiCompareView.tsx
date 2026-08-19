'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { SpendItem, CurrencyCode, TimeframeMode } from '@/types/spend';
import { Locale } from '@/types/i18n';
import { CURRENCIES } from '@/data/spendData';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getDictionary, getLocalizedSpendItems, getLocalizedCategories } from '@/utils/i18n';
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
  Flame,
  Search,
} from 'lucide-react';

interface MultiCompareViewProps {
  locale?: Locale;
}

const MAX_SELECTION = 10;

const DEFAULT_PRESETS = [
  {
    id: 'top-global',
    nameKey: 'presetTopGlobal',
    defaultName: 'Top Global Flows',
    ids: [
      'united-states-national-public-debt',
      'global-military-spend',
      'global-healthcare-expenditure',
      'global-social-media-advertising-spend',
      'tiktok-advertising-and-in-app-spending',
    ],
  },
  {
    id: 'sovereign-debts',
    nameKey: 'presetSovereignDebts',
    defaultName: 'Sovereign Debts',
    ids: [
      'united-states-national-public-debt',
      'china-national-government-debt',
      'japan-national-public-debt',
      'united-kingdom-national-public-debt',
      'france-national-public-debt',
      'spain-national-public-debt',
      'germany-national-public-debt',
    ],
  },
  {
    id: 'tech-media',
    nameKey: 'presetTechAndMedia',
    defaultName: 'Tech & Social Media',
    ids: [
      'global-social-media-advertising-spend',
      'instagram-advertising-and-creator-spending',
      'tiktok-advertising-and-in-app-spending',
      'global-influencer-marketing-creator-spending',
      'digital-advertising',
      'artificial-intelligence-investment',
    ],
  },
  {
    id: 'lifestyle',
    nameKey: 'presetLifestyle',
    defaultName: 'Lifestyle & Consumer',
    ids: [
      'germany-household-food-spending',
      'germany-household-vacation-travel-spending',
      'spain-gasoline-fuel-consumption-spending',
      'brazil-online-bets-gambling-spending',
      'fast-food-industry',
      'germany-household-christmas-gifts-spending',
    ],
  },
];

export const MultiCompareView: React.FC<MultiCompareViewProps> = ({ locale = 'en' }) => {
  const dict = getDictionary(locale);
  const searchParams = useSearchParams();

  const allItems = useMemo(() => getLocalizedSpendItems(locale), [locale]);
  const allCategories = useMemo(() => getLocalizedCategories(locale), [locale]);

  const [currencyCode, setCurrencyCode] = useState<CurrencyCode>('USD');
  const [timeframe, setTimeframe] = useState<TimeframeMode>('year');
  const [sessionStartTime] = useState<number>(() => Date.now());
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  // Initialize selected IDs from URL query params or defaults
  const [selectedIds, setSelectedIds] = useState<string[]>(() => {
    const urlIds = searchParams?.get('ids');
    if (urlIds) {
      const parsed = urlIds.split(',').filter((id) => allItems.some((item) => item.id === id));
      if (parsed.length > 0) return parsed.slice(0, MAX_SELECTION);
    }
    return DEFAULT_PRESETS[0].ids;
  });

  // Sync selected IDs to URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('ids', selectedIds.join(','));
      window.history.replaceState({}, '', url.toString());
    }
  }, [selectedIds]);

  // 60 FPS Timer
  const animFrameRef = useRef<number | null>(null);
  useEffect(() => {
    const updateTick = () => {
      const now = Date.now();
      const elapsed = (now - sessionStartTime) / 1000;
      setElapsedSeconds(elapsed);
      animFrameRef.current = requestAnimationFrame(updateTick);
    };

    animFrameRef.current = requestAnimationFrame(updateTick);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [sessionStartTime]);

  const activeCurrency = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const SECONDS_PER_YEAR = 31536000;

  // Fraction of year elapsed for 'today' and 'year'
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1).getTime();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const yearFractionElapsed = (now.getTime() - startOfYear) / (365.25 * 24 * 3600 * 1000);
  const dayFractionElapsed = (now.getTime() - startOfDay) / (24 * 3600 * 1000);

  const getItemCurrentSpend = (annualUSD: number): number => {
    const annualConverted = annualUSD * activeCurrency.rateToUSD;
    const ratePerSec = annualConverted / SECONDS_PER_YEAR;

    switch (timeframe) {
      case 'year':
        return annualConverted * yearFractionElapsed + ratePerSec * elapsedSeconds;
      case 'today':
        return annualConverted * (dayFractionElapsed / 365.25) + ratePerSec * elapsedSeconds;
      case 'session':
        return ratePerSec * elapsedSeconds;
      case 'second':
        return ratePerSec;
      default:
        return annualConverted;
    }
  };

  const getItemRatePerSecond = (annualUSD: number): number => {
    return (annualUSD * activeCurrency.rateToUSD) / SECONDS_PER_YEAR;
  };

  // Selected spend items list
  const selectedItems = useMemo(() => {
    return selectedIds
      .map((id) => allItems.find((item) => item.id === id))
      .filter((item): item is SpendItem => Boolean(item));
  }, [selectedIds, allItems]);

  // Ranked by annual spend
  const rankedItems = useMemo(() => {
    return [...selectedItems].sort((a, b) => b.annualSpendUSD - a.annualSpendUSD);
  }, [selectedItems]);

  const topItem = rankedItems[0];
  const totalCombinedAnnualUSD = useMemo(() => {
    return selectedItems.reduce((acc, item) => acc + item.annualSpendUSD, 0);
  }, [selectedItems]);

  // Filter available items for addition
  const availableItems = useMemo(() => {
    return allItems.filter((item) => {
      const matchesSearch =
        searchQuery === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = selectedCategory === 'all' || item.categoryId === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [allItems, searchQuery, selectedCategory]);

  const toggleItemSelection = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds((prev) => prev.filter((i) => i !== id));
    } else {
      if (selectedIds.length >= MAX_SELECTION) {
        alert(dict.comparePage?.maxLimitWarning || `Max ${MAX_SELECTION} counters`);
        return;
      }
      setSelectedIds((prev) => [...prev, id]);
    }
  };

  const removeItem = (id: string) => {
    setSelectedIds((prev) => prev.filter((i) => i !== id));
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const homeHref = locale === 'en' ? '/' : `/${locale}`;
  const t = dict.comparePage;

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-[#222222] font-sans antialiased flex flex-col justify-between selection:bg-[#245280] selection:text-white">
      {/* Universal Top Header */}
      <Header
        timeframe={timeframe}
        setTimeframe={setTimeframe}
        currencyCode={currencyCode}
        setCurrencyCode={setCurrencyCode}
        locale={locale}
      />

      <main className="flex-grow max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-6 w-full">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between gap-2 mb-3 text-xs">
          <Link
            href={homeHref}
            className="text-[#245280] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            ← {t?.backToHome || 'Back to All Counters'}
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-gray-300 rounded text-xs font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors shadow-2xs cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">{t?.copiedLink || 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#245280]" />
                  <span>{t?.shareComparison || 'Share Comparison'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Page Hero Box (Worldometers aesthetic) */}
        <div className="bg-white border border-gray-300 rounded-sm p-4 sm:p-5 shadow-2xs mb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-gray-200 pb-3 mb-3">
            <div>
              <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#245280] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 mb-1">
                <Scale className="w-3 h-3 text-[#245280]" />
                {t?.badge || 'Live Comparison'}
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                {t?.title || 'Multi-Counter Comparison Matrix'}
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                {t?.subtitle || 'Select up to 10 real-time indicators to benchmark live velocities.'}
              </p>
            </div>

            {/* Selection Counter Badge */}
            <div className="flex items-center gap-2 shrink-0">
              <span
                className={`text-xs font-black px-3 py-1.5 rounded-sm border ${
                  selectedIds.length >= MAX_SELECTION
                    ? 'bg-amber-50 text-amber-800 border-amber-300'
                    : 'bg-[#f8fafc] text-gray-800 border-gray-300'
                }`}
              >
                {t?.selectionLimit(selectedIds.length, MAX_SELECTION) ||
                  `${selectedIds.length} / ${MAX_SELECTION} selected`}
              </span>
              {selectedIds.length > 0 && (
                <button
                  onClick={() => setSelectedIds([])}
                  className="text-xs text-red-600 hover:text-red-800 font-bold underline cursor-pointer"
                >
                  {t?.clearAll || 'Clear'}
                </button>
              )}
            </div>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="font-bold text-gray-500 mr-1">{t?.selectPresets || 'Presets:'}</span>
            {DEFAULT_PRESETS.map((preset) => {
              const isActive =
                preset.ids.length === selectedIds.length &&
                preset.ids.every((id) => selectedIds.includes(id));
              const label =
                (t && (t as Record<string, any>)[preset.nameKey]) || preset.defaultName;

              return (
                <button
                  key={preset.id}
                  onClick={() => setSelectedIds(preset.ids)}
                  className={`px-2.5 py-1 rounded-sm text-xs font-bold transition-colors cursor-pointer border ${
                    isActive
                      ? 'bg-[#245280] text-white border-[#16385c] shadow-2xs'
                      : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Chips Bar & Add Button */}
        <div className="bg-white border border-gray-300 rounded-sm p-3 shadow-2xs mb-4">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
              Selected Indicators ({selectedIds.length}/{MAX_SELECTION}):
            </span>
            <button
              onClick={() => setIsSelectorOpen((prev) => !prev)}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#245280] text-white text-xs font-bold rounded-sm hover:bg-[#16385c] transition-colors cursor-pointer shadow-2xs"
            >
              <Plus className="w-3.5 h-3.5" />
              {isSelectorOpen ? 'Close Selector' : 'Add / Change Counters'}
            </button>
          </div>

          {/* Chips list */}
          <div className="flex flex-wrap gap-1.5">
            {selectedItems.map((item) => (
              <span
                key={item.id}
                className="inline-flex items-center gap-1.5 px-2 py-1 rounded-xs bg-[#f1f5f9] text-gray-800 border border-gray-300 text-xs font-semibold"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: item.accentColor }}
                />
                <span className="truncate max-w-[200px] sm:max-w-[280px]">{item.title}</span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 hover:text-red-600 transition-colors ml-0.5 cursor-pointer"
                  title="Remove"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {selectedItems.length === 0 && (
              <p className="text-xs text-gray-500 italic py-1">
                {t?.emptyStateDescription || 'No counters selected. Click Add above.'}
              </p>
            )}
          </div>

          {/* Expandable Selector Drawer */}
          {isSelectorOpen && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              {/* Search & Category Filter */}
              <div className="flex flex-col sm:flex-row gap-2 mb-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t?.addCounterPlaceholder || 'Search and add indicator...'}
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-300 rounded-sm focus:outline-none focus:border-[#245280] focus:bg-white"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="text-xs bg-gray-50 border border-gray-300 rounded-sm px-2.5 py-1.5 focus:outline-none focus:border-[#245280] cursor-pointer"
                >
                  <option value="all">All Categories ({allItems.length})</option>
                  {allCategories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Counter Selection Grid */}
              <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-sm divide-y divide-gray-100 bg-gray-50/50">
                {availableItems.slice(0, 40).map((item) => {
                  const isSelected = selectedIds.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItemSelection(item.id)}
                      className={`flex items-center justify-between p-2 text-xs transition-colors cursor-pointer ${
                        isSelected ? 'bg-blue-50/80 font-bold' : 'hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => {}} // handled by parent onClick
                          className="rounded text-[#245280] focus:ring-0 cursor-pointer"
                        />
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: item.accentColor }}
                        />
                        <span className="truncate text-gray-800">{item.title}</span>
                      </div>
                      <span className="text-[11px] text-gray-500 font-mono shrink-0">
                        {formatCompactCurrency(item.annualSpendUSD, activeCurrency)}/yr
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Live Comparison Dashboard */}
        {rankedItems.length > 0 ? (
          <div className="space-y-4">
            {/* Live Visual Benchmark Cards */}
            <div className="bg-white border border-gray-300 rounded-sm p-4 shadow-2xs">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-3">
                <h2 className="text-sm sm:text-base font-black text-gray-900 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-500" />
                  {t?.liveComparisonTitle || 'Simultaneous 60 FPS Real-Time Benchmark'}
                </h2>
                <span className="text-[11px] font-bold text-gray-500">
                  {timeframe === 'year' && 'Year-to-date (2026)'}
                  {timeframe === 'today' && 'Today (since 00:00 GMT)'}
                  {timeframe === 'session' && 'During your visit'}
                  {timeframe === 'second' && 'Per single second'}
                </span>
              </div>

              {/* Progress & Speed Bars for each selected item */}
              <div className="space-y-3.5">
                {rankedItems.map((item, index) => {
                  const currentVal = getItemCurrentSpend(item.annualSpendUSD);
                  const ratePerSec = getItemRatePerSecond(item.annualSpendUSD);
                  const topVal = topItem ? getItemCurrentSpend(topItem.annualSpendUSD) : 1;
                  const relativePct = topVal > 0 ? Math.max((currentVal / topVal) * 100, 1.5) : 0;
                  const shareOfTotal =
                    totalCombinedAnnualUSD > 0
                      ? (item.annualSpendUSD / totalCombinedAnnualUSD) * 100
                      : 0;

                  return (
                    <div key={item.id} className="group">
                      {/* Row Info */}
                      <div className="flex items-center justify-between text-xs mb-1">
                        <div className="flex items-center gap-1.5 truncate max-w-[65%] sm:max-w-[75%]">
                          <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-700 font-bold text-[10px] flex items-center justify-center shrink-0 border border-gray-300">
                            #{index + 1}
                          </span>
                          <Link
                            href={locale === 'en' ? `/stat/${item.id}` : `/${locale}/stat/${item.id}`}
                            className="font-bold text-gray-900 hover:text-[#245280] hover:underline truncate"
                          >
                            {item.title}
                          </Link>
                        </div>
                        <div className="text-right font-mono font-black text-gray-900 text-xs sm:text-sm">
                          {formatCurrencyValue(currentVal, activeCurrency)}
                        </div>
                      </div>

                      {/* Bar Visualization */}
                      <div className="h-3.5 w-full bg-gray-100 rounded-xs overflow-hidden border border-gray-200 relative">
                        <div
                          className="h-full rounded-xs transition-all duration-300"
                          style={{
                            width: `${relativePct}%`,
                            backgroundColor: item.accentColor || '#245280',
                          }}
                        />
                      </div>

                      {/* Sub-row: Rate per second and % share */}
                      <div className="flex items-center justify-between text-[11px] text-gray-500 mt-0.5 font-mono">
                        <span>
                          Rate: <strong className="text-gray-800">{formatRatePerSecond(ratePerSec, activeCurrency)}</strong>
                        </span>
                        <span>{shareOfTotal.toFixed(1)}% of selected total</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Detailed Comparison Table (Worldometers clean grid) */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-2xs overflow-hidden">
              <div className="bg-[#16385c] text-white px-3 py-2 text-xs font-black uppercase tracking-wider flex items-center justify-between">
                <span>Comparative Summary Table</span>
                <span>{rankedItems.length} Indicators</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-300 text-[11px] font-bold text-gray-700 uppercase">
                      <th className="py-2 px-3">#</th>
                      <th className="py-2 px-3">Indicator</th>
                      <th className="py-2 px-3 text-right">Annual Baseline</th>
                      <th className="py-2 px-3 text-right">Current Spend</th>
                      <th className="py-2 px-3 text-right">Rate / Sec</th>
                      <th className="py-2 px-3 text-right">Share</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-mono">
                    {rankedItems.map((item, idx) => {
                      const currentVal = getItemCurrentSpend(item.annualSpendUSD);
                      const ratePerSec = getItemRatePerSecond(item.annualSpendUSD);
                      const share =
                        totalCombinedAnnualUSD > 0
                          ? (item.annualSpendUSD / totalCombinedAnnualUSD) * 100
                          : 0;

                      return (
                        <tr key={item.id} className="hover:bg-blue-50/50 transition-colors">
                          <td className="py-2 px-3 text-gray-500 font-bold">{idx + 1}</td>
                          <td className="py-2 px-3 font-sans font-bold text-gray-900">
                            <Link
                              href={locale === 'en' ? `/stat/${item.id}` : `/${locale}/stat/${item.id}`}
                              className="hover:text-[#245280] hover:underline"
                            >
                              {item.title}
                            </Link>
                          </td>
                          <td className="py-2 px-3 text-right font-bold text-gray-700">
                            {formatCompactCurrency(item.annualSpendUSD, activeCurrency)}
                          </td>
                          <td className="py-2 px-3 text-right font-black text-gray-900">
                            {formatCurrencyValue(currentVal, activeCurrency)}
                          </td>
                          <td className="py-2 px-3 text-right text-emerald-700 font-bold">
                            {formatRatePerSecond(ratePerSec, activeCurrency)}
                          </td>
                          <td className="py-2 px-3 text-right text-gray-600">{share.toFixed(1)}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-gray-300 rounded-sm p-8 text-center text-gray-500 shadow-2xs">
            <Scale className="w-10 h-10 text-gray-400 mx-auto mb-2" />
            <h3 className="text-base font-bold text-gray-800">
              {t?.emptyStateTitle || 'No Counters Selected'}
            </h3>
            <p className="text-xs mt-1 max-w-md mx-auto">
              {t?.emptyStateDescription ||
                'Select counters using the button above to view live real-time benchmark flows.'}
            </p>
          </div>
        )}
      </main>

      <Footer locale={locale} />
    </div>
  );
};
