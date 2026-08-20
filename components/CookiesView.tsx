'use client';

import React from 'react';
import { Locale } from '@/types/i18n';
import { useWorldSpendEngine } from '@/hooks/useWorldSpendEngine';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface CookiesViewProps {
  locale?: Locale;
}

export const CookiesView: React.FC<CookiesViewProps> = ({ locale = 'en' }) => {
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
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Política de Cookies</h1>
            <p className="text-gray-500 text-xs mb-6">Última actualización: Agosto de 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. ¿Qué son las Cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que los sitios web almacenan en su ordenador o dispositivo móvil cuando los visita. Permiten recordar acciones y preferencias (como el inicio de sesión, el idioma o la moneda seleccionada) durante un período de tiempo.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">2. ¿Qué Cookies Utilizamos?</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Cookies de Preferencias (Técnicas)</strong>: Guardan su moneda preferida (USD, EUR, etc.) y período seleccionado para que no tenga que reconfigurarlos en cada visita.
                </li>
                <li>
                  <strong>Cookies de Análisis</strong>: Nos ayudan a comprender cómo interactúan los usuarios con la web, recopilando información anónima sobre visitas y tráfico.
                </li>
                <li>
                  <strong>Cookies de Terceros</strong>: En el futuro, los proveedores de anuncios (como Google AdSense) podrían instalar cookies para personalizar la publicidad que se muestra en esta web.
                </li>
              </ul>
            </section>
          </>
        );
      case 'fr':
        return (
          <>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Politique de Cookies</h1>
            <p className="text-gray-500 text-xs mb-6">Dernière mise à jour : août 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. Qu\'est-ce qu\'un Cookie ?</h2>
              <p>
                Les cookies sont des petits fichiers texte enregistrés sur votre ordinateur ou appareil mobile lorsque vous visitez un site internet. Ils permettent de mémoriser vos préférences (telles que la devise et la période sélectionnées).
              </p>
            </section>
          </>
        );
      case 'de':
        return (
          <>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Cookie-Richtlinie</h1>
            <p className="text-gray-500 text-xs mb-6">Letzte Aktualisierung: August 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. Was sind Cookies?</h2>
              <p>
                Cookies sind kleine Textdateien, die auf Ihrem Computer oder Mobilgerät gespeichert werden, wenn Sie eine Website besuchen. Sie speichern Ihre Präferenzen (wie Währung und Zeitraum).
              </p>
            </section>
          </>
        );
      case 'pt':
        return (
          <>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Política de Cookies</h1>
            <p className="text-gray-500 text-xs mb-6">Última atualização: Agosto de 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. O que são Cookies?</h2>
              <p>
                Os cookies são pequenos ficheiros de texto guardados no seu computador ou dispositivo móvel quando visita um website. Servem para guardar preferências (como a moeda ou o período).
              </p>
            </section>
          </>
        );
      default:
        return (
          <>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Cookies Policy</h1>
            <p className="text-gray-500 text-xs mb-6">Last updated: August 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your computer or mobile device when you visit a website. They allow the site to remember your actions and preferences (such as language or selected currency) over a period of time.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">2. How We Use Cookies</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Preference Cookies (Technical)</strong>: We save your chosen currency and timeframe selections so you do not have to set them again on subsequent visits.
                </li>
                <li>
                  <strong>Analytics Cookies</strong>: Help us understand how visitors interact with the site by gathering anonymous usage and traffic data.
                </li>
                <li>
                  <strong>Third-Party Cookies</strong>: In the future, third-party advertising networks (like Google AdSense) may set cookies to target ads according to your interests.
                </li>
              </ul>
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
