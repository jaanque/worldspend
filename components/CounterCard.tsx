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
      className={`bg-white border border-[#c8d1db] rounded-xs p-3.5 sm:p-4 flex flex-col justify-between relative shadow-2xs hover:border-[#1c4b78] hover:bg-[#fafbfc] transition-all cursor-pointer group ${
        showEmbedBox || showTooltip ? 'z-40' : 'hover:z-30'
      }`}
    >
      {/* Block 1: Full Title Header */}
      <div className="mb-2">
        <h3 className="text-xs sm:text-sm font-bold text-[#14324f] leading-snug group-hover:text-[#1c4b78] group-hover:underline">
          {item.title}
        </h3>
      </div>

      {/* Block 2: Main Direct Ticking Number + Tight Rate Tag (Left) & Action Buttons (Far Right) */}
      <div className="flex items-center justify-between gap-2 pt-1 flex-wrap">
        {/* Main Number Ticker & Rate Badge side-by-side with tight gap */}
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="text-xl sm:text-2xl font-black text-[#112d4a] tabular-numbers select-all tracking-tight leading-none">
            {formatCurrencyValue(currentSpend, activeCurrency, activeCurrency.code === 'BTC')}
          </div>

          {/* Rate Per Second Badge placed closely next to the counter */}
          <span className="text-[11px] sm:text-xs font-bold text-[#007700] bg-[#edf8ee] border border-[#c3e6c6] px-1.5 py-0.5 rounded-xs tabular-numbers shrink-0">
            +{formatRatePerSecond(ratePerSecond, activeCurrency)}{dict.card.perSecondBadge}
          </span>
        </div>

        {/* Action Buttons (Info & Embed) Aligned Far Right */}
        <div
          className="flex items-center gap-1.5 shrink-0 ml-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Info Button */}
          <div className="relative inline-flex items-center">
            <button
              type="button"
              aria-label="Información de la estadística"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip((prev) => !prev);
                if (showEmbedBox) setShowEmbedBox(false);
              }}
              className={`p-1.5 rounded-full border transition-colors cursor-pointer ${
                showTooltip
                  ? 'bg-[#14324f] text-white border-[#14324f]'
                  : 'bg-[#edf3f8] text-[#1c4b78] border-[#c8d6e5] hover:bg-[#dce6f0]'
              }`}
              title={item.title}
            >
              <Info className="w-3.5 h-3.5" />
            </button>

            {showTooltip && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute right-0 bottom-full mb-2 z-50 w-64 sm:w-72 p-3 bg-white text-gray-800 text-[11px] rounded-xs shadow-xl border-2 border-[#1c4b78] cursor-default text-left"
              >
                <div className="flex items-center justify-between gap-1 mb-1.5 pb-1 border-b border-gray-200">
                  <span className="font-bold text-[#14324f] text-xs">
                    {item.title}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowTooltip(false);
                    }}
                    className="text-gray-400 hover:text-gray-700 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-[10px] text-gray-600 mb-2 leading-snug">
                  {item.description || item.subtitle}
                </p>

                {item.sources && item.sources.length > 0 && (
                  <div className="pt-1.5 border-t border-gray-200 text-[10px]">
                    <ul className="space-y-1">
                      {item.sources.map((src, idx) => (
                        <li key={idx}>
                          <a
                            href={src.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1c4b78] hover:underline font-bold flex items-center gap-1 leading-tight"
                          >
                            <ExternalLink className="w-3 h-3 shrink-0 text-[#1c4b78]" />
                            <span>{src.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Embed Button */}
          <div className="relative inline-flex items-center">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowEmbedBox((prev) => !prev);
                if (showTooltip) setShowTooltip(false);
              }}
              title="Insertar widget"
              className={`p-1.5 rounded-full border transition-colors cursor-pointer ${
                showEmbedBox
                  ? 'bg-[#14324f] text-white border-[#14324f]'
                  : 'bg-[#edf3f8] text-[#1c4b78] border-[#c8d6e5] hover:bg-[#dce6f0]'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
            </button>

            {/* Embed Box Modal */}
            {showEmbedBox && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute right-0 bottom-full mb-2 z-50 w-[280px] sm:w-80 p-2.5 bg-white text-gray-800 text-[11px] rounded-xs shadow-2xl border-2 border-[#1c4b78] cursor-default text-left"
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
    </div>
  );
};
