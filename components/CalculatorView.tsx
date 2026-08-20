'use client';

import React from 'react';
import { Locale } from '@/types/i18n';
import { useWorldSpendEngine } from '@/hooks/useWorldSpendEngine';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PersonalSpendCalculator } from '@/components/PersonalSpendCalculator';
import { Calculator } from 'lucide-react';

interface CalculatorViewProps {
  locale?: Locale;
}

export const CalculatorView: React.FC<CalculatorViewProps> = ({ locale = 'en' }) => {
  const {
    currencyCode,
    setCurrencyCode,
    timeframe,
    setTimeframe,
    totalRatePerSecond,
    activeCurrency,
  } = useWorldSpendEngine(locale);

  const getPageTitle = () => {
    switch (locale) {
      case 'es': return 'Calculadora de Gasto Personal';
      case 'fr': return 'Calculatrice de Dépenses Personnelles';
      case 'de': return 'Persönlicher Ausgabenrechner';
      case 'pt': return 'Calculadora de Gastos Pessoais';
      default:   return 'Personal Spend Calculator';
    }
  };

  return (
    <div className="flex-1 min-h-screen bg-[#edf1f5] text-[#222222] flex flex-col font-sans">
      <Header
        timeframe={timeframe}
        setTimeframe={setTimeframe}
        currencyCode={currencyCode}
        setCurrencyCode={setCurrencyCode}
        locale={locale}
      />

      <main className="flex-1 w-full max-w-4xl mx-auto bg-white border-x border-[#cdd5de] px-3 sm:px-8 py-4 sm:py-6 shadow-xs my-0 sm:my-3">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e2edf8]">
          <div className="w-9 h-9 rounded-full bg-[#e2edf8] flex items-center justify-center shrink-0">
            <Calculator className="w-4 h-4 text-[#1c4b78]" />
          </div>
          <h1 className="text-lg sm:text-xl font-black text-[#14324f]">{getPageTitle()}</h1>
        </div>

        <PersonalSpendCalculator
          totalRatePerSecond={totalRatePerSecond}
          activeCurrency={activeCurrency}
          locale={locale}
        />
      </main>

      <Footer locale={locale} />
    </div>
  );
};
