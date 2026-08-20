'use client';

import React from 'react';
import { Locale } from '@/types/i18n';
import { useWorldSpendEngine } from '@/hooks/useWorldSpendEngine';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface LegalViewProps {
  locale?: Locale;
}

export const LegalView: React.FC<LegalViewProps> = ({ locale = 'en' }) => {
  const {
    currencyCode,
    setCurrencyCode,
    timeframe,
    setTimeframe,
  } = useWorldSpendEngine(locale);

  const renderContent = () => {
    switch (locale) {
      case 'es':
        return (
          <>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Aviso Legal</h1>
            <p className="text-gray-500 text-xs mb-6">Última actualización: Agosto de 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. Identificación y Titularidad</h2>
              <p>
                En cumplimiento de las normativas de servicios de la sociedad de la información, se informa que el sitio web WorldSpend.org es operado de forma independiente con fines informativos y de divulgación estadística a nivel mundial.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">2. Propósito y Exclusión de Responsabilidad</h2>
              <p>
                El sitio web WorldSpend.org tiene como finalidad mostrar contadores estimativos en tiempo real de variables de gasto y macroeconomía global basadas en fuentes públicas e institucionales oficiales (como la ONU, la UNESCO, la OMS, etc.). Los contadores son modelos matemáticos proyectados basados en tasas promedio y no representan transacciones financieras reales directas en los servidores del sitio web.
              </p>
            </section>
          </>
        );
      case 'fr':
        return (
          <>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Mentions Légales</h1>
            <p className="text-gray-500 text-xs mb-6">Dernière mise à jour : août 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. Édition et Propriété</h2>
              <p>
                Conformément aux réglementations sur la confiance dans l\'économie numérique, le site WorldSpend.org est édité de manière indépendante à des fins de vulgarisation et de statistiques macroéconomiques mondiales.
              </p>
            </section>
          </>
        );
      case 'de':
        return (
          <>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Impressum & Rechtliche Hinweise</h1>
            <p className="text-gray-500 text-xs mb-6">Letzte Aktualisierung: August 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. Haftungsausschluss</h2>
              <p>
                Die auf WorldSpend.org angezeigten Echtzeit-Zähler basieren auf mathematischen Hochrechnungen historischer offizieller Statistiken. Sie dienen ausschließlich Informationszwecken und stellen keine Beratung dar.
              </p>
            </section>
          </>
        );
      case 'pt':
        return (
          <>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Aviso Legal</h1>
            <p className="text-gray-500 text-xs mb-6">Última atualização: Agosto de 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. Informação Legal</h2>
              <p>
                Em conformidade com a legislação aplicável, informa-se que o website WorldSpend.org é operado de forma independente para fins informativos e de divulgação estatística global.
              </p>
            </section>
          </>
        );
      default:
        return (
          <>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Legal Notice</h1>
            <p className="text-gray-500 text-xs mb-6">Last updated: August 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. Owner and Disclaimer</h2>
              <p>
                In compliance with information society services regulations, please be informed that WorldSpend.org is operated independently for educational, informational, and general macroeconomic statistical purposes.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">2. Content and Limitations of Liability</h2>
              <p>
                WorldSpend.org aims to show estimated real-time counters of global spending and macroeconomic variables based on public and institutional official sources (such as the UN, UNESCO, WHO, etc.). These counters represent mathematical projection models based on average rates and do not represent direct actual financial transactions.
              </p>
            </section>
          </>
        );
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
        {renderContent()}
      </main>

      <Footer locale={locale} />
    </div>
  );
};
