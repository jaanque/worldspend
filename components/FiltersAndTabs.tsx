'use client';

import React from 'react';
import { CategoryId } from '@/types/spend';
import { Locale } from '@/types/i18n';
import { getLocalizedCategories, getDictionary } from '@/utils/i18n';
import { Search, X } from 'lucide-react';

interface FiltersAndTabsProps {
  selectedCategory: CategoryId;
  setSelectedCategory: (cat: CategoryId) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  categoryItemCounts: Record<string, number>;
  totalMatches: number;
  locale?: Locale;
}

export const FiltersAndTabs: React.FC<FiltersAndTabsProps> = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  categoryItemCounts,
  totalMatches,
  locale = 'en',
}) => {
  const dict = getDictionary(locale);
  const categories = getLocalizedCategories(locale);

  return (
    <div className="mb-4 sm:mb-6 bg-[#f4f7fa] border border-[#cbd3dc] rounded-xs p-2.5 sm:p-3">
      {/* Search Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-2.5 sm:mb-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={dict.searchAndFilter.searchPlaceholder}
            className="w-full bg-white border border-[#999999] rounded-xs pl-8 pr-8 py-1.5 text-xs text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#16385c]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <span className="text-[11px] sm:text-xs font-bold text-gray-600 shrink-0 text-right sm:text-left">
          {dict.searchAndFilter.showingCounters(totalMatches)}
        </span>
      </div>

      {/* Category Pills / 2010 Tabs */}
      <div className="flex flex-wrap gap-1">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count = cat.id === 'all' ? categoryItemCounts['all'] : categoryItemCounts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-bold rounded-xs cursor-pointer border transition-all ${
                isSelected
                  ? 'bg-[#1c4b78] text-white border-[#0e2c4a] shadow-xs'
                  : 'bg-white text-[#2a4d6f] border-[#c0cad4] hover:bg-[#eaf0f6]'
              }`}
            >
              {cat.name} <span className="text-[10px] font-normal opacity-80">({count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
