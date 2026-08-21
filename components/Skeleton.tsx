'use client';

import React from 'react';

// Subcomponent for a pulsing card skeleton (mimics CounterCard)
export const CounterCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white border border-[#c8d1db] rounded-xs p-3 flex flex-col justify-between h-25 shadow-3xs select-none animate-pulse">
      <div className="flex items-start justify-between gap-3 mb-1">
        <div className="space-y-1.5 flex-1">
          {/* Title */}
          <div className="h-3.5 bg-gray-200 rounded-xs w-4/5" />
          {/* Subtitle */}
          <div className="h-3 bg-gray-100 rounded-xs w-2/3" />
        </div>
        {/* Pulsing indicator */}
        <div className="h-4 bg-emerald-100 rounded-xs w-16 shrink-0" />
      </div>
      <div className="flex items-end justify-between gap-3 pt-1 border-t border-gray-100 mt-1">
        {/* Value */}
        <div className="h-5 bg-gray-200 rounded-xs w-24" />
        {/* Source */}
        <div className="h-3 bg-gray-100 rounded-xs w-20" />
      </div>
    </div>
  );
};

// Skeleton for the Home page view (mimics HomeView)
export const HomeViewSkeleton: React.FC = () => {
  return (
    <div className="flex-1 min-h-screen bg-[#edf1f5] text-[#222222] flex flex-col font-sans">
      {/* Header Placeholder */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#16385c] h-21 border-b border-[#0d233a]" />
      <div className="h-21 w-full shrink-0" />

      <main className="flex-1 w-full max-w-4xl mx-auto bg-white border-x border-[#cdd5de] px-3 sm:px-8 py-4 sm:py-6 shadow-xs my-0 sm:my-3 animate-pulse">
        {/* Explanation Header */}
        <div className="flex flex-col items-center mt-2 mb-6 space-y-2">
          <div className="h-7 bg-gray-200 rounded-xs w-3/4 sm:w-2/3" />
          <div className="h-3.5 bg-gray-100 rounded-xs w-5/6 sm:w-1/2" />
          <div className="h-3.5 bg-gray-100 rounded-xs w-4/6 sm:w-1/3" />
        </div>

        {/* HeroTotalTicker Skeleton */}
        <div className="bg-[#f4f8fc] border border-[#d2dce6] rounded-xs p-4 sm:p-5 text-center mb-4 sm:mb-5 shadow-2xs">
          <div className="h-3.5 bg-gray-200 rounded-xs w-48 mx-auto mb-2" />
          <div className="h-10 sm:h-12 bg-gray-200 rounded-xs w-72 sm:w-96 mx-auto mb-3" />
          <div className="h-4 bg-emerald-100 rounded-xs w-36 mx-auto" />
        </div>

        {/* FiltersAndTabs Skeleton */}
        <div className="mb-4 sm:mb-6 bg-[#f4f7fa] border border-[#cbd3dc] rounded-xs p-2.5 sm:p-3 shadow-2xs flex flex-col sm:flex-row items-center gap-2">
          <div className="h-8 bg-gray-200 rounded-xs w-full sm:flex-1" />
          <div className="h-8 bg-gray-200 rounded-xs w-full sm:w-48" />
        </div>

        {/* Categories Skeletons */}
        <div className="space-y-6">
          {[1, 2].map((i) => (
            <div key={i} className="space-y-2">
              {/* Category Strip */}
              <div className="bg-[#122e4d] h-8 rounded-xs w-full" />
              {/* Counter Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {[1, 2, 3, 4].map((j) => (
                  <CounterCardSkeleton key={j} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

// Skeleton for the counter detail page (mimics CounterDetailView)
export const CounterDetailViewSkeleton: React.FC = () => {
  return (
    <div className="flex-1 min-h-screen bg-[#edf1f5] text-[#222222] flex flex-col font-sans">
      {/* Header Placeholder */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#16385c] h-21 border-b border-[#0d233a]" />
      <div className="h-21 w-full shrink-0" />

      <main className="flex-1 w-full max-w-4xl mx-auto bg-white border-x border-[#cdd5de] px-3 sm:px-8 py-4 sm:py-6 shadow-xs my-0 sm:my-3 animate-pulse">
        {/* Breadcrumb skeleton */}
        <div className="h-8 bg-gray-100 rounded-xs w-full mb-3" />

        {/* Category strip */}
        <div className="bg-gray-200 h-6 rounded-xs w-32 mb-4" />

        {/* Title */}
        <div className="h-7 bg-gray-200 rounded-xs w-2/3 mb-1.5" />
        {/* Subtitle */}
        <div className="h-4 bg-gray-100 rounded-xs w-full mb-4" />

        {/* Grand Real-Time Master Ticker skeleton */}
        <div className="bg-[#f4f8fc] border border-[#d2dce6] rounded-xs p-6 text-center mb-5 shadow-2xs">
          <div className="h-3.5 bg-gray-100 rounded-xs w-24 mx-auto mb-2" />
          <div className="h-12 bg-gray-200 rounded-xs w-80 mx-auto mb-3" />
          <div className="h-4 bg-emerald-100 rounded-xs w-40 mx-auto" />
        </div>

        {/* Action buttons skeleton */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
          <div className="h-8 bg-gray-200 rounded-xs w-28" />
          <div className="h-8 bg-gray-200 rounded-xs w-28" />
          <div className="h-8 bg-gray-200 rounded-xs w-28" />
        </div>

        {/* Rich Statistical Summary Area skeleton */}
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xs p-4 sm:p-5 mb-5 shadow-2xs space-y-3">
          <div className="h-4 bg-gray-200 rounded-xs w-48 mb-3" />
          <div className="h-3.5 bg-gray-100 rounded-xs w-full" />
          <div className="h-3.5 bg-gray-100 rounded-xs w-5/6" />
          
          <div className="h-3.5 bg-gray-200 rounded-xs w-64 mt-4 mb-2" />
          {/* Grid of Projections */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white border border-[#e2e8f0] p-2 rounded-xs">
                <div className="h-3 bg-gray-100 rounded-xs w-16 mb-1.5" />
                <div className="h-4.5 bg-gray-200 rounded-xs w-24" />
              </div>
            ))}
          </div>
        </div>

        {/* Official source card skeleton */}
        <div className="bg-[#edf3f8] border border-[#c8d6e5] rounded-xs px-3.5 py-2.5 mb-6 h-12" />
      </main>
    </div>
  );
};

// Skeleton for the Personal Spend Calculator page (mimics CalculatorView)
export const CalculatorViewSkeleton: React.FC = () => {
  return (
    <div className="flex-1 min-h-screen bg-[#edf1f5] text-[#222222] flex flex-col font-sans">
      {/* Header Placeholder */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#16385c] h-21 border-b border-[#0d233a]" />
      <div className="h-21 w-full shrink-0" />

      <main className="flex-1 w-full max-w-4xl mx-auto bg-white border-x border-[#cdd5de] px-3 sm:px-8 py-4 sm:py-6 shadow-xs my-0 sm:my-3 animate-pulse">
        {/* Title */}
        <div className="mb-6 pb-4 border-b border-[#e2edf8]">
          <div className="h-7 bg-gray-200 rounded-xs w-64" />
        </div>

        <div className="w-full space-y-6">
          {/* Description */}
          <div className="mb-6 space-y-1.5">
            <div className="h-5 bg-gray-200 rounded-xs w-48" />
            <div className="h-3.5 bg-gray-100 rounded-xs w-72" />
          </div>

          <div className="space-y-6">
            {/* Amount + Frequency row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <div className="h-3 bg-gray-200 rounded-xs w-16" />
                <div className="h-10 bg-gray-100 rounded-xs w-full" />
              </div>
              <div className="space-y-1.5">
                <div className="h-3 bg-gray-200 rounded-xs w-16" />
                <div className="h-10 bg-gray-100 rounded-xs w-full" />
              </div>
            </div>

            {/* Unit selector */}
            <div className="space-y-1.5">
              <div className="h-3 bg-gray-200 rounded-xs w-32" />
              <div className="flex flex-wrap gap-1.5">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-7 bg-gray-200 rounded-xs w-14" />
                ))}
              </div>
            </div>

            {/* Result box */}
            <div className="bg-[#f8fafc] border border-dashed border-[#cbd5e1] rounded-xs p-6 h-20" />
          </div>
        </div>
      </main>
    </div>
  );
};
