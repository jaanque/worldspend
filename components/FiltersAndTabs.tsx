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
  locale = 'en',
}) => {
  const dict = getDictionary(locale);
  const categories = getLocalizedCategories(locale);

  const [localQuery, setLocalQuery] = React.useState(searchQuery);

  React.useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(localQuery);
    }, 200);
    return () => clearTimeout(handler);
  }, [localQuery, setSearchQuery]);

  const hasActiveFilter = selectedCategory !== 'all' || searchQuery.trim() !== '';

  return (
    <div className="mb-4 sm:mb-6 bg-[#f4f7fa] border border-[#cbd3dc] rounded-xs p-2.5 sm:p-3 shadow-2xs">
      {/* Search & Category Filter Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            placeholder={dict.searchAndFilter.searchPlaceholder}
            className="w-full bg-white border border-[#cbd5e1] rounded-xs pl-8 pr-8 py-1.5 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#16385c] shadow-2xs"
          />
          {localQuery && (
            <button
              onClick={() => {
                setLocalQuery('');
                setSearchQuery('');
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 cursor-pointer"
              title="Borrar búsqueda"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Native Category Select Filter */}
        <div className="flex items-center gap-2 shrink-0">
          <select
            value={selectedCategory}
            aria-label={dict.searchAndFilter.filterSectionTitle || 'Categorías'}
            onChange={(e) => setSelectedCategory(e.target.value as CategoryId)}
            className="w-full sm:w-auto text-xs font-bold bg-white text-[#16385c] border border-[#cbd5e1] rounded-xs px-2.5 py-1.5 focus:outline-none cursor-pointer shadow-2xs hover:bg-[#f8fafc]"
          >
            {categories.map((cat) => {
              const count = cat.id === 'all' ? categoryItemCounts['all'] : categoryItemCounts[cat.id] || 0;
              return (
                <option key={cat.id} value={cat.id}>
                  {cat.name} ({count})
                </option>
              );
            })}
          </select>

          {hasActiveFilter && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-[11px] font-bold text-red-600 hover:text-red-800 underline cursor-pointer whitespace-nowrap px-1"
            >
              Limpiar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
