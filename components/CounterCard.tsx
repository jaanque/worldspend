'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SpendItem, CurrencyConfig, TimeframeMode } from '@/types/spend';
import { Locale } from '@/types/i18n';
import { formatCurrencyValue, formatRatePerSecond } from '@/utils/formatters';
import { getDictionary } from '@/utils/i18n';
import { Info, Code, Check, X, Copy, ExternalLink } from 'lucide-react';

interface CounterCardProps {
  item: SpendItem;
  currentSpend: number;
  ratePerSecond: number;
  activeCurrency: CurrencyConfig;
  timeframe: TimeframeMode;
  locale?: Locale;
}

export const CounterCard: React.FC<CounterCardProps> = ({
  item,
  currentSpend,
  ratePerSecond,
  activeCurrency,
  timeframe,
  locale = 'en',
}) => {
  const router = useRouter();
  const dict = getDictionary(locale);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showEmbedBox, setShowEmbedBox] = useState(false);
  const [copied, setCopied] = useState(false);
  const [origin, setOrigin] = useState('https://worldspend.org');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.origin) {
      setOrigin(window.location.origin);
    }
  }, []);

  const embedPrefix = locale === 'en' ? '' : `/${locale}`;
  const embedUrl = `${origin}${embedPrefix}/embed/${item.id}?currency=${activeCurrency.code}&timeframe=${timeframe}`;
  const embedCode = `<iframe src="${embedUrl}" width="340" height="105" frameborder="0" scrolling="no"></iframe>`;

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(embedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCardClick = () => {
    if (!showEmbedBox) {
      const targetPath = locale === 'en' ? `/stat/${item.id}` : `/${locale}/stat/${item.id}`;
      router.push(targetPath);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white border border-[#c8d1db] rounded-xs px-3 sm:px-3.5 py-2.5 sm:py-3 flex flex-col justify-between relative shadow-xs hover:border-[#245280] hover:bg-[#fafbfc] transition-all cursor-pointer group"
    >
      {/* Top line: Title + Info & Embed options & Rate */}
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-1.5 flex-1 min-w-0">
          <span className="text-xs font-bold text-[#14324f] leading-snug group-hover:text-[#1c4b78] group-hover:underline">
            {item.title}
          </span>

          <div
            className="flex items-center gap-1 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Info icon with hover tooltip */}
            <div
              className="relative inline-flex items-center"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <button
                type="button"
                aria-label="View description"
                onClick={(e) => e.stopPropagation()}
                className="p-0.5 text-[#557799] hover:text-[#14324f] cursor-help"
              >
                <Info className="w-3.5 h-3.5" />
              </button>

              {showTooltip && !showEmbedBox && (
                <div className="absolute left-0 bottom-full mb-1.5 z-50 w-60 sm:w-64 p-2 bg-[#1a2e42] text-white text-[11px] leading-snug rounded-xs shadow-md pointer-events-none border border-[#0d1a26]">
                  <div className="font-bold text-white mb-0.5">{item.subtitle}</div>
                  {item.description && item.description !== item.subtitle && (
                    <div className="text-gray-200 text-[10px]">{item.description}</div>
                  )}
                  <div className="text-blue-200 text-[10px] mt-1 border-t border-[#314a63] pt-1">
                    {dict.card.officialSourcePrefix} {item.sourceName} ({item.sourceYear})
                  </div>
                </div>
              )}
            </div>

            {/* Real Embed Option Button */}
            <div className="relative inline-flex items-center">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowEmbedBox((prev) => !prev);
                }}
                title="Embed this live counter widget on your site"
                className={`p-0.5 transition-colors cursor-pointer ${
                  showEmbedBox ? 'text-[#14324f] bg-blue-50 rounded-xs' : 'text-[#557799] hover:text-[#14324f]'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
              </button>

              {/* Real Embed Box (Responsive positioning) */}
              {showEmbedBox && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 bottom-full mb-1.5 z-50 w-[280px] sm:w-80 p-2.5 bg-[#ffffff] text-gray-800 text-[11px] rounded-xs shadow-xl border-2 border-[#1c4b78] cursor-default"
                >
                  <div className="flex items-center justify-between gap-1 mb-1.5 pb-1 border-b border-gray-200">
                    <span className="font-bold text-[#14324f] text-xs">
                      {dict.card.embedTitle}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowEmbedBox(false);
                      }}
                      className="text-gray-400 hover:text-gray-700 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-[10px] text-gray-600 mb-1.5">
                    {dict.card.embedInstruction}
                  </p>

                  <textarea
                    readOnly
                    value={embedCode}
                    onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                    rows={3}
                    className="w-full bg-[#f4f7fa] border border-[#a0b0c0] font-mono text-[10px] p-1.5 rounded-xs resize-none focus:outline-none mb-2 select-all leading-tight cursor-text"
                  />

                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`${embedPrefix}/embed/${item.id}?currency=${activeCurrency.code}&timeframe=${timeframe}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-[#1c4b78] hover:underline flex items-center gap-1 font-bold truncate"
                    >
                      <ExternalLink className="w-3 h-3 shrink-0" />
                      <span>{dict.card.testWidgetPage}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className={`px-2.5 py-1 text-xs font-bold rounded-xs cursor-pointer flex items-center gap-1 transition-colors shrink-0 ${
                        copied
                          ? 'bg-[#007700] text-white'
                          : 'bg-[#1c4b78] text-white hover:bg-[#143759]'
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>{dict.card.copied}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>{dict.card.copyHtml}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <span className="text-[11px] font-bold text-[#007700] tabular-numbers shrink-0 pt-0.5">
          +{formatRatePerSecond(ratePerSecond, activeCurrency)}{dict.card.perSecondBadge}
        </span>
      </div>

      {/* Main Direct Ticking Number (Responsive scaling) */}
      <div className="text-xl sm:text-2xl font-black text-black tabular-numbers select-all py-0.5 leading-tight">
        {formatCurrencyValue(currentSpend, activeCurrency, activeCurrency.code === 'BTC')}
      </div>
    </div>
  );
};
