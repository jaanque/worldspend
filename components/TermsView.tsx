'use client';

import React from 'react';
import { Locale } from '@/types/i18n';
import { useWorldSpendEngine } from '@/hooks/useWorldSpendEngine';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface TermsViewProps {
  locale?: Locale;
}

export const TermsView: React.FC<TermsViewProps> = ({ locale = 'en' }) => {
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
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Términos de Servicio</h1>
            <p className="text-gray-500 text-xs mb-6">Última actualización: Agosto de 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar WorldSpend.org, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web ni nuestros widgets.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">2. Propiedad Intelectual y Licencia de Widgets</h2>
              <p>
                Todo el código, diseño y algoritmos de contadores dinámicos de este sitio son propiedad de WorldSpend.org. Le otorgamos una licencia limitada, no exclusiva e intransferible para incrustar nuestros widgets de estadísticas (`/embed/[id]`) en su propio sitio web, siempre y cuando se mantenga el enlace e atribución visible y funcional a WorldSpend.org.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">3. Limitación de Responsabilidad</h2>
              <p>
                Los datos que se muestran en este sitio web representan proyecciones matemáticas en tiempo real basadas en cifras estadísticas históricas y fuentes oficiales citadas. Aunque nos esforzamos por mantener la precisión, WorldSpend.org no garantiza la exactitud de los datos ni se hace responsable de las decisiones tomadas en función de ellos.
              </p>
            </section>
          </>
        );
      case 'fr':
        return (
          <>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Conditions d\'Utilisation</h1>
            <p className="text-gray-500 text-xs mb-6">Dernière mise à jour : août 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. Acceptation des Conditions</h2>
              <p>
                En accédant et en utilisant WorldSpend.org, vous acceptez d\'être lié par les présentes conditions d\'utilisation. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser notre site ni nos widgets.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">2. Licence de Widgets</h2>
              <p>
                Nous vous accordons une licence limitée pour intégrer nos widgets de statistiques (`/embed/[id]`) sur votre propre site web, à condition que le lien de crédit et d\'attribution vers WorldSpend.org reste visible et fonctionnel.
              </p>
            </section>
          </>
        );
      case 'de':
        return (
          <>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Nutzungsbedingungen</h1>
            <p className="text-gray-500 text-xs mb-6">Letzte Aktualisierung: August 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. Akzeptanz der Bedingungen</h2>
              <p>
                Durch den Zugriff auf WorldSpend.org erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Wenn Sie mit Teilen dieser Bedingungen nicht einverstanden sind, nutzen Sie unsere Website bitte nicht.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">2. Widget-Lizenz</h2>
              <p>
                Wir gewähren Ihnen eine eingeschränkte Lizenz zur Einbettung unserer Statistik-Widgets (`/embed/[id]`) auf Ihrer Website, vorausgesetzt, dass die Quellenangabe und der Link zu WorldSpend.org sichtbar bleiben.
              </p>
            </section>
          </>
        );
      case 'pt':
        return (
          <>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Termos de Serviço</h1>
            <p className="text-gray-500 text-xs mb-6">Última atualização: Agosto de 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. Aceitação dos Termos</h2>
              <p>
                Ao aceder e utilizar o WorldSpend.org, o utilizador concorda em cumprir estes termos e condições. Se não concordar com alguma parte destes termos, não deverá utilizar o nosso website.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">2. Licença de Widgets</h2>
              <p>
                Concedemos uma licença limitada para incorporar os nossos widgets de estatísticas (`/embed/[id]`) no seu próprio website, desde que a atribuição com link visível para a WorldSpend.org seja mantida.
              </p>
            </section>
          </>
        );
      default:
        return (
          <>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Terms of Service</h1>
            <p className="text-gray-500 text-xs mb-6">Last updated: August 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. Acceptance of Terms</h2>
              <p>
                By accessing and using WorldSpend.org, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must not use our website or our widgets.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">2. Intellectual Property & Widget License</h2>
              <p>
                All code, design, and dynamic counter algorithms on this site are the property of WorldSpend.org. We grant you a limited, non-exclusive, non-transferable license to embed our statistics widgets (`/embed/[id]`) on your own website, as long as the attribution link to WorldSpend.org remains visible and functional.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">3. Limitation of Liability</h2>
              <p>
                The data shown on this website represents real-time mathematical projections based on historical statistics and cited official sources. While we strive for accuracy, WorldSpend.org does not guarantee the exactness of the data and is not liable for decisions made based on it.
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
