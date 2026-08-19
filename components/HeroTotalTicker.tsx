import React, { useState } from 'react';
import { CurrencyConfig, TimeframeMode } from '@/types/spend';
import { Locale } from '@/types/i18n';
import { formatCurrencyValue } from '@/utils/formatters';
import { getDictionary } from '@/utils/i18n';
import { Info, X, ExternalLink } from 'lucide-react';

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

  const timeframeLabels: Record<TimeframeMode, string> = {
    year: dict.heroTicker.yearLabel,
    today: dict.heroTicker.todayLabel,
    session: dict.heroTicker.sessionLabel(sessionSeconds),
    second: dict.heroTicker.secondLabel,
    custom: 'Gasto Mundial Total en el Rango Personalizado',
  };

  return (
    <div className="relative bg-[#f4f8fc] border border-[#d2dce6] rounded-xs p-3.5 sm:p-5 md:p-6 text-center mt-1 mb-4 sm:mb-6 shadow-2xs">
      {/* Corner Collapsible Info Button & Sources Popup */}
      <div className="absolute top-2 right-2 z-20">
        <button
          type="button"
          onClick={() => setShowSources((prev) => !prev)}
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
