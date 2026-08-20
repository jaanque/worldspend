'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { CategoryId } from '@/types/spend';
import { Locale } from '@/types/i18n';
import { useWorldSpendEngine } from '@/hooks/useWorldSpendEngine';
import { getLocalizedCategories, getDictionary } from '@/utils/i18n';
import { Header } from '@/components/Header';
import { HeroTotalTicker } from '@/components/HeroTotalTicker';
import { SessionImpactBanner } from '@/components/SessionImpactBanner';
import { FiltersAndTabs } from '@/components/FiltersAndTabs';
import { CounterCard } from '@/components/CounterCard';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ChevronDown, ChevronRight, ChevronsUpDown, ChevronUp } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

interface HomeViewProps {
  locale?: Locale;
}

export const HomeView: React.FC<HomeViewProps> = ({ locale = 'en' }) => {
  const {
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
    spendItems,
  } = useWorldSpendEngine(locale);

  const dict = getDictionary(locale);
  const categories = getLocalizedCategories(locale);

  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  // Sync category state with URL search param
  useEffect(() => {
    if (searchParams) {
      const cat = searchParams.get('cat') as CategoryId;
      if (cat && categories.some(c => c.id === cat)) {
        setSelectedCategory(cat);
      } else if (cat === 'all' || !cat) {
        setSelectedCategory('all');
      }
    }
  }, [searchParams, categories]);

  const handleCategoryChange = (catId: CategoryId) => {
    setSelectedCategory(catId);
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (catId === 'all') {
        params.delete('cat');
      } else {
        params.set('cat', catId);
      }
      const newQuery = params.toString();
      const targetPath = `${window.location.pathname}${newQuery ? `?${newQuery}` : ''}`;
      router.replace(targetPath, { scroll: false });
    }
  };

  // Item counts per category
  const categoryItemCounts = useMemo(() => {
    const counts: Record<string, number> = { all: spendItems.length };
    spendItems.forEach((item) => {
      counts[item.categoryId] = (counts[item.categoryId] || 0) + 1;
    });
    return counts;
  }, [spendItems]);

  // Filtered list
  const filteredItems = useMemo(() => {
    let list = [...spendItems];

    if (selectedCategory !== 'all') {
      list = list.filter((item) => item.categoryId === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    return list;
  }, [spendItems, selectedCategory, searchQuery]);

  // Grouped by category for default overview
  const groupedCategories = useMemo(() => {
    if (selectedCategory !== 'all' || searchQuery.trim() !== '') {
      return null;
    }

    return categories
      .filter((c) => c.id !== 'all')
      .map((cat) => ({
        category: cat,
        items: spendItems.filter((item) => item.categoryId === cat.id),
      }))
      .filter((group) => group.items.length > 0);
  }, [selectedCategory, searchQuery, categories, spendItems]);

  const toggleCategory = (categoryId: string) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const allCollapsed = useMemo(() => {
    if (!groupedCategories || groupedCategories.length === 0) return false;
    return groupedCategories.every((g) => !!collapsedCategories[g.category.id]);
  }, [groupedCategories, collapsedCategories]);

  const toggleCollapseAll = () => {
    if (!groupedCategories) return;
    if (allCollapsed) {
      setCollapsedCategories({});
    } else {
      const next: Record<string, boolean> = {};
      groupedCategories.forEach((g) => {
        next[g.category.id] = true;
      });
      setCollapsedCategories(next);
    }
  };

  return (
    <div className="flex-1 min-h-screen bg-[#edf1f5] text-[#222222] flex flex-col font-sans">
      {/* Authority Header */}
      <Header
        timeframe={timeframe}
        setTimeframe={setTimeframe}
        currencyCode={currencyCode}
        setCurrencyCode={setCurrencyCode}
        customStartDate={customStartDate}
        setCustomStartDate={setCustomStartDate}
        customEndDate={customEndDate}
        setCustomEndDate={setCustomEndDate}
        sessionSeconds={sessionSeconds}
        locale={locale}
      />

      {/* Centered Authority Container */}
      <main className="flex-1 w-full max-w-4xl mx-auto bg-white border-x border-[#cdd5de] px-3 sm:px-8 py-4 sm:py-6 shadow-xs my-0 sm:my-3">
        {/* Main Hero Real-Time World Ticker */}
        <HeroTotalTicker
          totalWorldSpend={totalWorldSpend}
          totalRatePerSecond={totalRatePerSecond}
          activeCurrency={activeCurrency}
          timeframe={timeframe}
          sessionSeconds={sessionSeconds}
          locale={locale}
        />

        {/* Category Tabs and Search */}
        <FiltersAndTabs
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          categoryItemCounts={categoryItemCounts}
          totalMatches={filteredItems.length}
          locale={locale}
        />

        {/* Categorized Content */}
        {groupedCategories ? (
          <div className="space-y-6 my-6">
            {/* Collapse/Expand All Toolbar */}
            <div className="flex items-center justify-between pb-1 border-b border-[#cbd5e1] text-xs">
              <span className="text-gray-500 font-bold">
                {dict.searchAndFilter.showingCounters(spendItems.length)} ({dict.searchAndFilter.categoriesCount ? dict.searchAndFilter.categoriesCount(groupedCategories.length) : `${groupedCategories.length} categories`})
              </span>
              <button
                type="button"
                onClick={toggleCollapseAll}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1c4b78] hover:text-[#14324f] hover:underline bg-[#e8eef5] px-2 py-0.5 rounded-xs transition-colors cursor-pointer"
              >
                <ChevronsUpDown className="w-3 h-3" />
                <span>
                  {allCollapsed
                    ? dict.searchAndFilter.expandAll || 'Expand All'
                    : dict.searchAndFilter.collapseAll || 'Collapse All'}
                </span>
              </button>
            </div>

            {groupedCategories.map(({ category, items }) => {
              const isCollapsed = !!collapsedCategories[category.id];
              const isExpanded = !!expandedCategories[category.id];
              const hasMoreThan10 = items.length > 10;
              const displayedItems = hasMoreThan10 && !isExpanded ? items.slice(0, 10) : items;

              const getShowMoreLabels = (count: number) => {
                switch(locale) {
                  case 'es': return { more: `Ver más (${count} más)`, less: 'Ver menos' };
                  case 'fr': return { more: `Voir plus (${count} de plus)`, less: 'Voir moins' };
                  case 'de': return { more: `Mehr anzeigen (${count} weitere)`, less: 'Weniger anzeigen' };
                  case 'pt': return { more: `Ver mais (${count} mais)`, less: 'Ver menos' };
                  default: return { more: `Show more (${count} more)`, less: 'Show less' };
                }
              };

              const labels = getShowMoreLabels(items.length - 10);

              return (
                <section key={category.id} className="space-y-2">
                  {/* Category Header Strip */}
                  <div
                    onClick={() => toggleCategory(category.id)}
                    className="authority-section-header px-3 py-2 flex items-center justify-between text-xs sm:text-sm font-bold cursor-pointer select-none hover:brightness-95 transition-all shadow-xs rounded-xs"
                    title={isCollapsed ? (dict.searchAndFilter.expandAll || 'Expand') : (dict.searchAndFilter.collapseAll || 'Collapse')}
                  >
                    <div className="flex items-center gap-2">
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform duration-300 ease-out ${
                          isCollapsed ? '-rotate-90 text-blue-200' : 'rotate-0 text-white'
                        }`}
                      />
                      <span className="tracking-wide">{category.name.toUpperCase()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-normal opacity-90">
                      <span className="bg-white/15 px-2 py-0.5 rounded-xs font-semibold">{dict.searchAndFilter.indicatorsCount(items.length)}</span>
                    </div>
                  </div>

                  {/* Smooth Collapsible Animated Container */}
                  <div className={`accordion-wrapper ${isCollapsed ? 'collapsed' : ''}`}>
                    <div className="accordion-inner pt-2 pb-1">
                      {/* Grid of Counter Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {displayedItems.map((item) => (
                          <CounterCard
                            key={item.id}
                            item={item}
                            currentSpend={getItemCurrentSpend(item.annualSpendUSD)}
                            ratePerSecond={getItemRatePerSecond(item.annualSpendUSD)}
                            activeCurrency={activeCurrency}
                            timeframe={timeframe}
                            locale={locale}
                          />
                        ))}
                      </div>

                      {/* Show More / Show Less Button */}
                      {hasMoreThan10 && (
                        <div className="flex justify-center mt-3">
                          <button
                            type="button"
                            onClick={() => setExpandedCategories(prev => ({ ...prev, [category.id]: !isExpanded }))}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1c4b78] hover:text-[#14324f] hover:underline bg-[#e8eef5] px-3 py-1.5 rounded-xs transition-colors cursor-pointer"
                          >
                            {isExpanded ? (
                              <>
                                <ChevronUp className="w-3.5 h-3.5" />
                                <span>{labels.less}</span>
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-3.5 h-3.5" />
                                <span>{labels.more}</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="my-6">
            {filteredItems.length === 0 ? (
              <div className="text-center py-8 border border-[#c8d1db] bg-[#f9fafc] rounded-xs">
                <p className="text-xs text-gray-600">
                  {dict.searchAndFilter.noResultsFound(searchQuery)}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-2.5 px-3 py-1 bg-[#1c4b78] text-white text-xs font-bold rounded-xs cursor-pointer"
                >
                  {dict.searchAndFilter.viewAllButton}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {filteredItems.map((item) => (
                  <CounterCard
                    key={item.id}
                    item={item}
                    currentSpend={getItemCurrentSpend(item.annualSpendUSD)}
                    ratePerSecond={getItemRatePerSecond(item.annualSpendUSD)}
                    activeCurrency={activeCurrency}
                    timeframe={timeframe}
                    locale={locale}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* 2010 Authority Footer */}
      <Footer
        locale={locale}
        currencyCode={currencyCode}
        setCurrencyCode={setCurrencyCode}
      />

      {/* Floating Back to Top Button */}
      <BackToTop locale={locale} />
    </div>
  );
};
