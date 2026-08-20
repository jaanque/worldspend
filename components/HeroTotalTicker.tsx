import React, { useState } from 'react';
import { CurrencyConfig, TimeframeMode } from '@/types/spend';
import { Locale } from '@/types/i18n';
import { formatCurrencyValue } from '@/utils/formatters';
import { getDictionary } from '@/utils/i18n';
import { Info, X, ExternalLink, Share2, Code, Check, Copy } from 'lucide-react';

interface HeroTotalTickerProps {
  totalWorldSpend: number;
  totalRatePerSecond: number;
  activeCurrency: CurrencyConfig;
  timeframe: TimeframeMode;
  sessionSeconds: number;
  locale?: Locale;
}

export const HeroTotalTicker: React.FC<HeroTotalTickerProps> = ({
  totalWorldSpend,
  totalRatePerSecond,
  activeCurrency,
  timeframe,
  sessionSeconds,
  locale = 'en',
}) => {
  const dict = getDictionary(locale);
  const [showSources, setShowSources] = useState<boolean>(false);
  const [showShare, setShowShare] = useState<boolean>(false);
  const [showEmbedBox, setShowEmbedBox] = useState<boolean>(false);
  const [shareCopied, setShareCopied] = useState<boolean>(false);
  const [embedCopied, setEmbedCopied] = useState<boolean>(false);

  const timeframeLabels: Record<TimeframeMode, string> = {
    year: dict.heroTicker.yearLabel,
    today: dict.heroTicker.todayLabel,
    session: dict.heroTicker.sessionLabel(sessionSeconds),
    second: dict.heroTicker.secondLabel,
    custom: 'Gasto Mundial Total en el Rango Personalizado',
  };

  const originUrl = typeof window !== 'undefined' ? window.location.origin : 'https://worldspend.app';
  const embedPrefix = locale !== 'en' ? `${originUrl}/${locale}` : originUrl;
  
  const shareTitle = `WorldSpend — ${timeframeLabels[timeframe]}`;
  const shareText = `Consulta el Gasto Mundial Total en tiempo real en WorldSpend: ${formatCurrencyValue(totalWorldSpend, activeCurrency, activeCurrency.code === 'BTC')}`;
  const shareUrl = typeof window !== 'undefined' ? window.location.href : originUrl;

  const embedCode = `<iframe src="${embedPrefix}/embed/global-total?currency=${activeCurrency.code}&timeframe=${timeframe}" width="100%" height="220" frameborder="0" scrolling="no" style="border:1px solid #d2dce6; border-radius:4px; max-width:450px;"></iframe>`;

  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch {
        // Fallback to popup box if user cancels or share fails
      }
    }
    setShowShare((prev) => !prev);
    if (showSources) setShowSources(false);
    if (showEmbedBox) setShowEmbedBox(false);
  };

  const handleCopyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleCopyEmbedCode = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      setEmbedCopied(true);
      setTimeout(() => setEmbedCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="relative bg-[#f4f8fc] border border-[#d2dce6] rounded-xs p-3.5 sm:p-5 md:p-6 text-center mt-1 mb-4 sm:mb-6 shadow-2xs">
      {/* Corner Collapsible Action Buttons: Info, Share & Embed */}
      <div className="absolute top-2 right-2 z-20 flex items-center gap-1.5">
        {/* Info Button & Modal */}
        <div className="relative inline-flex items-center">
          <button
            type="button"
            onClick={() => {
              setShowSources((prev) => !prev);
              if (showShare) setShowShare(false);
              if (showEmbedBox) setShowEmbedBox(false);
            }}
            className={`p-1.5 rounded-full transition-colors cursor-pointer border ${
              showSources
                ? 'bg-[#14324f] text-white border-[#14324f]'
                : 'bg-white text-[#1c4b78] hover:bg-[#edf3f8] border-[#c8d6e5] shadow-2xs'
            }`}
            title={timeframeLabels[timeframe]}
          >
            <Info className="w-3.5 h-3.5" />
          </button>

          {showSources && (
            <div className="absolute right-0 top-full mt-1.5 z-50 w-64 sm:w-72 p-3 bg-white text-gray-800 text-[11px] rounded-xs shadow-xl border-2 border-[#1c4b78] text-left">
              <div className="flex items-center justify-between gap-1 mb-1.5 pb-1 border-b border-gray-200">
                <span className="font-bold text-[#14324f] text-xs">
                  {timeframeLabels[timeframe]}
                </span>
                <button
                  type="button"
                  onClick={() => setShowSources(false)}
                  className="text-gray-400 hover:text-gray-700 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[10px] text-gray-600 mb-2 leading-snug">
                Cifras globales basadas en los registros oficiales del PIB mundial:
              </p>

              <ul className="space-y-1.5">
                <li>
                  <a
                    href="https://es.tradingeconomics.com/world/gdp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1c4b78] hover:underline font-bold flex items-center gap-1 leading-snug"
                  >
                    <ExternalLink className="w-3 h-3 shrink-0 text-[#1c4b78]" />
                    <span>Trading Economics (World GDP)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://baike.baidu.com/es/item/Ranking%20mundial%20del%20PIB/3094217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1c4b78] hover:underline font-bold flex items-center gap-1 leading-snug"
                  >
                    <ExternalLink className="w-3 h-3 shrink-0 text-[#1c4b78]" />
                    <span>Baidu Baike (Ranking PIB)</span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Share Button & Popup */}
        <div className="relative inline-flex items-center">
          <button
            type="button"
            onClick={handleShareClick}
            className={`p-1.5 rounded-full transition-colors cursor-pointer border ${
              showShare
                ? 'bg-[#14324f] text-white border-[#14324f]'
                : 'bg-white text-[#1c4b78] hover:bg-[#edf3f8] border-[#c8d6e5] shadow-2xs'
            }`}
            title="Compartir contador gigante"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>

          {showShare && (
            <div className="absolute right-0 top-full mt-1.5 z-50 w-64 sm:w-72 p-3 bg-white text-gray-800 text-[11px] rounded-xs shadow-xl border-2 border-[#1c4b78] text-left">
              <div className="flex items-center justify-between gap-1 mb-1.5 pb-1 border-b border-gray-200">
                <span className="font-bold text-[#14324f] text-xs">
                  Compartir Contador Gigante
                </span>
                <button
                  type="button"
                  onClick={() => setShowShare(false)}
                  className="text-gray-400 hover:text-gray-700 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[10px] text-gray-600 mb-2 leading-snug">
                Copia el enlace directo para compartir este contador en vivo:
              </p>

              <div className="flex items-center gap-1.5 mb-2">
                <input
                  type="text"
                  readOnly
                  value={shareUrl}
                  onClick={(e) => (e.target as HTMLInputElement).select()}
                  className="w-full bg-[#f4f7fa] border border-[#a0b0c0] text-[10px] p-1.5 rounded-xs select-all focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleCopyShareLink}
                  className={`px-2.5 py-1 text-xs font-bold rounded-xs cursor-pointer flex items-center gap-1 transition-colors shrink-0 ${
                    shareCopied
                      ? 'bg-[#007700] text-white'
                      : 'bg-[#1c4b78] text-white hover:bg-[#143759]'
                  }`}
                >
                  {shareCopied ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Embed Button & Popup */}
        <div className="relative inline-flex items-center">
          <button
            type="button"
            onClick={() => {
              setShowEmbedBox((prev) => !prev);
              if (showSources) setShowSources(false);
              if (showShare) setShowShare(false);
            }}
            className={`p-1.5 rounded-full transition-colors cursor-pointer border ${
              showEmbedBox
                ? 'bg-[#14324f] text-white border-[#14324f]'
                : 'bg-white text-[#1c4b78] hover:bg-[#edf3f8] border-[#c8d6e5] shadow-2xs'
            }`}
            title="Insertar widget del contador"
          >
            <Code className="w-3.5 h-3.5" />
          </button>

          {showEmbedBox && (
            <div className="absolute right-0 top-full mt-1.5 z-50 w-[280px] sm:w-80 p-3 bg-white text-gray-800 text-[11px] rounded-xs shadow-xl border-2 border-[#1c4b78] text-left">
              <div className="flex items-center justify-between gap-1 mb-1.5 pb-1 border-b border-gray-200">
                <span className="font-bold text-[#14324f] text-xs">
                  {dict.card.embedTitle}
                </span>
                <button
                  type="button"
                  onClick={() => setShowEmbedBox(false)}
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
                  href={`${embedPrefix}/embed/global-total?currency=${activeCurrency.code}&timeframe=${timeframe}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-[#1c4b78] hover:underline flex items-center gap-1 font-bold truncate"
                >
                  <ExternalLink className="w-3 h-3 shrink-0" />
                  <span>{dict.card.testWidgetPage}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmbedCode}
                  className={`px-2.5 py-1 text-xs font-bold rounded-xs cursor-pointer flex items-center gap-1 transition-colors shrink-0 ${
                    embedCopied
                      ? 'bg-[#007700] text-white'
                      : 'bg-[#1c4b78] text-white hover:bg-[#143759]'
                  }`}
                >
                  {embedCopied ? (
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

      <div className="text-[10px] sm:text-xs md:text-xs font-bold uppercase tracking-wider text-[#1c4b78] mb-1 px-1 opacity-90">
        {timeframeLabels[timeframe]}
      </div>

      <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#112d4a] tabular-numbers py-0.5 select-all tracking-tight leading-none break-all sm:break-normal">
        {formatCurrencyValue(totalWorldSpend, activeCurrency, activeCurrency.code === 'BTC')}
      </div>

      <div className="text-xs font-bold text-[#007700] mt-1.5 flex items-center justify-center gap-1.5">
        <span>+{formatCurrencyValue(totalRatePerSecond, activeCurrency)}</span>
        <span className="text-gray-500 font-normal">{dict.heroTicker.perSecondSuffix}</span>
      </div>
    </div>
  );
};

