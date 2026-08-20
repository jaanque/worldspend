'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { notFound, useSearchParams } from 'next/navigation';
import { CURRENCIES } from '@/data/spendData';
import { CurrencyCode, TimeframeMode } from '@/types/spend';
import { Locale } from '@/types/i18n';
import {
  getElapsedSeconds,
  calculateCurrentSpend,
  getRatePerSecond,
  formatCurrencyValue,
  formatRatePerSecond,
  formatCompactCurrency,
} from '@/utils/formatters';
import { getLocalizedSpendItems, getLocalizedCategories, getDictionary } from '@/utils/i18n';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

import { CounterCard } from '@/components/CounterCard';
import { ArrowLeft, ShieldCheck, Globe, Layers, ChevronRight, Home, Share2, Check, Download, MessageCircle, Code, Info, X, Copy, ExternalLink } from 'lucide-react';
import { GLOBAL_ANNUAL_SPEND_USD } from '@/hooks/useWorldSpendEngine';

interface CounterDetailViewProps {
  id: string;
  locale?: Locale;
}

export const CounterDetailView: React.FC<CounterDetailViewProps> = ({
  id,
  locale = 'en',
}) => {
  const dict = getDictionary(locale);
  const items = getLocalizedSpendItems(locale);
  const categories = getLocalizedCategories(locale);

  const searchParams = useSearchParams();

  const backHref = locale === 'en' ? '/' : `/${locale}`;
  const backLabel = dict.detailPage.backLink;

  const item = useMemo(() => {
    return items.find((s) => s.id === id);
  }, [items, id]);

  const [currencyCode, setCurrencyCode] = useState<CurrencyCode>('USD');
  const [timeframe, setTimeframe] = useState<TimeframeMode>('year');
  const [sessionStartTime] = useState<number>(() => Date.now());
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [sessionSeconds, setSessionSeconds] = useState<number>(0);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [showEmbedBox, setShowEmbedBox] = useState<boolean>(false);

  const [embedCodeCopied, setEmbedCodeCopied] = useState<boolean>(false);
  const [origin, setOrigin] = useState<string>('https://worldspend.org');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.origin) {
      setOrigin(window.location.origin);
    }
  }, []);

  const handleShare = async () => {
    if (typeof window !== 'undefined') {
      const shareUrl = window.location.href;
      const shareData = {
        title: item?.title || 'WorldSpend',
        text: item?.subtitle || 'Estadísticas de gasto en tiempo real | WorldSpend.org',
        url: shareUrl,
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
          return;
        } catch {
          // User cancelled share modal or browser restricted
        }
      }

      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(shareUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const embedPrefix = locale === 'en' ? '' : `/${locale}`;
  const embedUrl = item ? `${origin}${embedPrefix}/embed/${item.id}?currency=${currencyCode}&timeframe=${timeframe}` : '';
  const embedCode = `<iframe src="${embedUrl}" width="340" height="105" frameborder="0" scrolling="no"></iframe>`;

  const handleCopyEmbedCode = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(embedCode);
      setEmbedCodeCopied(true);
      setTimeout(() => setEmbedCodeCopied(false), 2000);
    }
  };

  const handleDownloadCsv = () => {
    if (!item) return;

    const startYear = 2000;
    const currentYear = 2026;
    const baseSpend = item.annualSpendUSD;

    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += 'Year,SpendUSD,SourceName,SourceYear\n';

    for (let year = startYear; year <= currentYear; year++) {
      const growthFactor = Math.pow(1.035, year - currentYear);
      const annualUSD = Math.round(baseSpend * growthFactor);
      csvContent += `${year},${annualUSD},"${item.sourceName.replace(/"/g, '""')}",${item.sourceYear}\n`;
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${item.id}-historical-data-2000-2026.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    let active = true;

    const tick = () => {
      if (!active) return;
      const now = new Date();
      const currentElapsed = getElapsedSeconds(timeframe, now, sessionStartTime);
      setElapsedSeconds(currentElapsed);

      const currentSession = (Date.now() - sessionStartTime) / 1000;
      setSessionSeconds(currentSession);

      requestRef.current = requestAnimationFrame(tick);
    };

    requestRef.current = requestAnimationFrame(tick);

    return () => {
      active = false;
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [timeframe, sessionStartTime]);

  if (!item) {
    return notFound();
  }

  const activeCurrency = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const category = categories.find((c) => c.id === item.categoryId) || categories[0];

  const currentSpend = calculateCurrentSpend(
    item.annualSpendUSD,
    timeframe,
    elapsedSeconds,
    currencyCode
  );

  const ratePerSecond = getRatePerSecond(item.annualSpendUSD, currencyCode);
  const ratePerMinute = ratePerSecond * 60;
  const pctOfWorldTotal = ((item.annualSpendUSD / GLOBAL_ANNUAL_SPEND_USD) * 100).toFixed(2);

  const timeframeLabels: Record<TimeframeMode, string> = {
    year: dict.detailPage.annualizedExp,
    today: dict.heroTicker.todayLabel,
    session: dict.heroTicker.sessionLabel(sessionSeconds),
    second: dict.heroTicker.secondLabel,
    custom: 'Gasto Acumulado en el Rango Personalizado',
  };

  return (
    <div className="flex-1 min-h-screen bg-[#edf1f5] text-[#222222] flex flex-col font-sans">
      {/* Authority Header */}
      <Header
        timeframe={timeframe}
        setTimeframe={setTimeframe}
        currencyCode={currencyCode}
        setCurrencyCode={setCurrencyCode}
        locale={locale}
      />

      {/* Balanced Authority Details Container */}
      <main className="flex-1 w-full max-w-4xl mx-auto bg-white border-x border-[#cdd5de] px-3 sm:px-8 py-4 sm:py-6 shadow-xs my-0 sm:my-3">
        {/* Single Clear Breadcrumb / Return Navigation Bar */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-xs text-gray-600 mb-3 bg-[#edf3f8] border border-[#c8d6e5] px-3 py-2 rounded-xs shadow-2xs">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1 font-bold text-[#1c4b78] hover:underline bg-white border border-[#b8c9dc] px-2 py-0.5 rounded-xs shadow-2xs text-[#14324f]"
            title={backLabel}
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#1c4b78]" />
            <span>{dict.header.homeNav || 'Inicio'}</span>
          </Link>
          
          <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />

          <span className="font-semibold text-gray-700">
            {category.name}
          </span>

          <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />

          <span className="font-bold text-[#14324f] truncate max-w-[200px] sm:max-w-none">
            {item.title}
          </span>
        </nav>

        {/* Section Header Strip */}
        <div className="authority-section-header px-3 py-1.5 flex items-center justify-between text-xs font-bold mb-3 sm:mb-4 rounded-xs">
          <span>{category.name.toUpperCase()} — {dict.detailPage.statisticalIndicator}</span>
        </div>

        {/* Title & Description */}
        <div className="mb-3 sm:mb-4">
          <h1 className="text-lg sm:text-2xl font-black text-[#14324f] leading-tight">
            {item.title}
          </h1>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            {item.subtitle}
          </p>
        </div>

        {/* Grand Real-Time Master Ticker (Responsive scale) */}
        <div className="bg-[#f4f8fc] border border-[#d2dce6] rounded-xs p-4 sm:p-6 text-center mb-4 sm:mb-5 shadow-2xs overflow-hidden">
          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1c4b78] mb-1 opacity-90">
            {timeframeLabels[timeframe]} ({activeCurrency.code})
          </div>

          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#112d4a] tabular-numbers py-0.5 select-all tracking-tight leading-none break-all sm:break-normal">
            {formatCurrencyValue(currentSpend, activeCurrency, activeCurrency.code === 'BTC')}
          </div>

          <div className="text-xs font-bold text-[#007700] mt-1.5 flex items-center justify-center gap-1.5">
            <span>+{formatRatePerSecond(ratePerSecond, activeCurrency)}</span>
            <span className="text-gray-500 font-normal">{dict.heroTicker.perSecondSuffix}</span>
          </div>
        </div>

        {/* Action Buttons: CSV Download, Embed Widget & Native Share */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4 sm:mb-5">
          {/* CSV Download Button */}
          <button
            onClick={handleDownloadCsv}
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#edf3f8] hover:bg-[#dce6f0] text-[#1c4b78] border border-[#c8d6e5] px-3.5 py-1.5 rounded-xs transition-colors cursor-pointer shadow-2xs"
            title={dict.detailPage.downloadCsv || 'Descargar CSV'}
          >
            <Download className="w-3.5 h-3.5 text-[#1c4b78]" />
            <span>{dict.detailPage.downloadCsv || 'Descargar CSV'}</span>
          </button>

          {/* Embed Widget Button with Modal */}
          <div className="relative inline-flex items-center">
            <button
              onClick={() => setShowEmbedBox((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 text-xs font-bold border px-3.5 py-1.5 rounded-xs transition-colors cursor-pointer shadow-2xs ${
                showEmbedBox
                  ? 'bg-[#14324f] text-white border-[#14324f]'
                  : 'bg-[#edf3f8] hover:bg-[#dce6f0] text-[#1c4b78] border-[#c8d6e5]'
              }`}
              title={dict.detailPage.embedWidget || 'Insertar Widget'}
            >
              <Code className="w-3.5 h-3.5" />
              <span>{dict.detailPage.embedWidget || 'Insertar Widget'}</span>
            </button>

            {/* Embed Modal Box (Positioned smoothly below the button) */}
            {showEmbedBox && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-[290px] sm:w-80 p-3 bg-white text-gray-800 text-[11px] rounded-xs shadow-2xl border-2 border-[#1c4b78]">
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
                    href={`${embedPrefix}/embed/${item.id}?currency=${currencyCode}&timeframe=${timeframe}`}
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
                      embedCodeCopied
                        ? 'bg-[#007700] text-white'
                        : 'bg-[#1c4b78] text-white hover:bg-[#143759]'
                    }`}
                  >
                    {embedCodeCopied ? (
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



          {/* Native Share Button */}
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#edf3f8] hover:bg-[#dce6f0] text-[#1c4b78] border border-[#c8d6e5] px-3.5 py-1.5 rounded-xs transition-colors cursor-pointer shadow-2xs"
            title={dict.detailPage.shareButton || 'Compartir estadística'}
          >
            {isCopied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span className="text-green-700">{dict.detailPage.shareCopied || '¡Copiado!'}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#1c4b78]" />
                <span>{dict.detailPage.shareButton || 'Compartir'}</span>
              </>
            )}
          </button>
        </div>



        {/* Concise Institutional Context Callout (Información de la Estadística) */}
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xs p-3.5 text-xs text-gray-700 mb-4 sm:mb-5 leading-relaxed shadow-2xs">
          <div className="font-bold text-[#14324f] mb-1.5 border-b border-[#e2e8f0] pb-1 flex items-center gap-1.5">
            <Info className="w-4 h-4 text-[#1c4b78]" />
            <span>{dict.detailPage.statisticalOverview}</span>
          </div>
          <p className="text-gray-600">
            {item.description}
          </p>
        </div>

        {/* Simple Infographic Official Sources Card */}
        <div className="bg-[#edf3f8] border border-[#c8d6e5] rounded-xs px-3.5 py-2.5 mb-6 text-xs text-gray-700 shadow-2xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-bold text-[#14324f]">
              {dict.detailPage.officialSource}
            </span>
          </div>

          {/* Clean Source Links List */}
          {item.sources && item.sources.length > 0 && (
            <div className="mt-2.5 pt-2 border-t border-[#cbd5e1]/80">
              <ul className="space-y-1 text-[11px]">
                {item.sources.map((src, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="text-[#1c4b78] font-bold">•</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1c4b78] hover:underline font-medium flex items-center gap-1 leading-snug"
                    >
                      <span>{src.name}</span>
                      <ExternalLink className="w-3 h-3 shrink-0 opacity-80" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Related Counters Section (Same Category) */}
        {items.filter((s) => s.categoryId === item.categoryId && s.id !== item.id).length > 0 && (
          <div className="mt-8 pt-6 border-t border-[#dce3ea]">
            <div className="mb-3">
              <h2 className="text-xs sm:text-sm font-bold text-[#14324f] uppercase tracking-wide">
                {dict.detailPage.relatedCountersTitle || 'Indicadores Relacionados en esta Categoría'}
              </h2>
              <p className="text-[11px] text-gray-500 mt-0.5">
                {dict.detailPage.relatedCountersSubtitle || 'Otros contadores estadísticos en tiempo real de la misma categoría'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {items
                .filter((s) => s.categoryId === item.categoryId && s.id !== item.id)
                .slice(0, 4)
                .map((relItem) => (
                  <CounterCard
                    key={relItem.id}
                    item={relItem}
                    currentSpend={calculateCurrentSpend(relItem.annualSpendUSD, timeframe, elapsedSeconds, currencyCode)}
                    ratePerSecond={getRatePerSecond(relItem.annualSpendUSD, currencyCode)}
                    activeCurrency={activeCurrency}
                    timeframe={timeframe}
                    locale={locale}
                  />
                ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
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
