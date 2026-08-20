'use client';

import React from 'react';
import { Locale } from '@/types/i18n';
import { useWorldSpendEngine } from '@/hooks/useWorldSpendEngine';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface PrivacyViewProps {
  locale?: Locale;
}

export const PrivacyView: React.FC<PrivacyViewProps> = ({ locale = 'en' }) => {
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
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Política de Privacidad</h1>
            <p className="text-gray-500 text-xs mb-6">Última actualización: Agosto de 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. Información General</h2>
              <p>
                En WorldSpend.org respetamos su privacidad y nos comprometemos a proteger los datos personales que pueda compartir con nosotros. Esta política describe cómo recopilamos, utilizamos y protegemos su información al visitar nuestro sitio web.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">2. Recopilación de Datos</h2>
              <p>
                No recopilamos información de identificación personal (como su nombre, dirección o correo electrónico) a menos que decida proporcionarla voluntariamente. Sin embargo, para mejorar el servicio y la experiencia de usuario, utilizamos herramientas analíticas de terceros (como Google Analytics) que pueden recopilar datos técnicos de forma anónima, como su dirección IP, tipo de navegador y las páginas visitadas.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">3. Cookies y Anuncios</h2>
              <p>
                Utilizamos cookies propias y de terceros para recordar sus preferencias (como la moneda y el período seleccionados) y para optimizar el rendimiento técnico. En un futuro, este sitio web podría mostrar publicidad mediante redes de anuncios de terceros (como Google AdSense), las cuales podrían utilizar cookies analíticas para orientar anuncios en función de sus intereses.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">4. Sus Derechos</h2>
              <p>
                Puede configurar su navegador web para rechazar todas las cookies o para indicarle cuándo se envía una cookie. Sin embargo, tenga en cuenta que algunas características del sitio web podrían no funcionar correctamente si deshabilita las cookies.
              </p>
            </section>
          </>
        );
      case 'fr':
        return (
          <>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Politique de Confidentialité</h1>
            <p className="text-gray-500 text-xs mb-6">Dernière mise à jour : août 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. Informations Générales</h2>
              <p>
                Chez WorldSpend.org, nous respectons votre vie privée et nous nous engageons à protéger les données personnelles que vous partagez avec nous. Cette politique décrit la manière dont nous collectons, utilisons et protégeons vos informations lors de votre visite sur notre site web.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">2. Collecte de Données</h2>
              <p>
                Nous ne collectons aucune information personnellement identifiable à moins que vous ne choisissiez de la fournir volontairement. Pour améliorer notre service, nous utilisons des outils analytiques tiers (comme Google Analytics) qui collectent des données techniques anonymes (telles que l\'adresse IP et le type de navigateur).
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">3. Cookies et Publicités</h2>
              <p>
                Nous utilisons des cookies pour mémoriser vos préférences (telles que la devise et la période sélectionnées). À l\'avenir, ce site pourrait afficher des publicités via des régies publicitaires tierces (comme Google AdSense), qui peuvent utiliser des cookies pour proposer des annonces adaptées à vos centres d\'intérêt.
              </p>
            </section>
          </>
        );
      case 'de':
        return (
          <>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Datenschutzerklärung</h1>
            <p className="text-gray-500 text-xs mb-6">Letzte Aktualisierung: August 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. Allgemeine Informationen</h2>
              <p>
                Wir bei WorldSpend.org respektieren Ihre Privatsphäre und verpflichten uns zum Schutz der personenbezogenen Daten, die Sie mit uns teilen. Diese Richtlinie beschreibt, wie wir Ihre Informationen sammeln, verwenden und schützen, wenn Sie unsere Website besuchen.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">2. Datenerhebung</h2>
              <p>
                Wir erheben keine personenbezogenen Daten, es sei denn, Sie stellen uns diese freiwillig zur Verfügung. Zur Verbesserung unseres Dienstes nutzen wir Analysetools von Drittanbietern (wie Google Analytics), die anonyme technische Daten erheben.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">3. Cookies und Werbung</h2>
              <p>
                Wir verwenden Cookies, um Ihre Einstellungen (wie Währung und Zeitraum) zu speichern. In Zukunft kann diese Website Anzeigen über Werbenetzwerke von Drittanbietern (wie Google AdSense) schalten, die Cookies zur Schaltung personalisierter Werbung verwenden.
              </p>
            </section>
          </>
        );
      case 'pt':
        return (
          <>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Política de Privacidade</h1>
            <p className="text-gray-500 text-xs mb-6">Última actualización: Agosto de 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. Informações Gerais</h2>
              <p>
                Na WorldSpend.org respeitamos a sua privacidade e comprometemo-nos a proteger os dados pessoais que partilha connosco. Esta política descreve como recolhemos, utilizamos e protegemos as suas informações ao visitar o nosso website.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">2. Recolha de Dados</h2>
              <p>
                Não recolhemos informações de identificação pessoal, a menos que as forneça voluntariamente. Para melhorar a experiência do utilizador, utilizamos ferramentas de análise de terceiros (como o Google Analytics) para recolher dados técnicos anónimos.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">3. Cookies e Anúncios</h2>
              <p>
                Utilizamos cookies para memorizar as suas preferências (como a moeda e o período). No futuro, este website poderá apresentar publicidade através de redes de anúncios (como o Google AdSense), que podem utilizar cookies para orientar anúncios de acordo com os seus interesses.
              </p>
            </section>
          </>
        );
      default:
        return (
          <>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14324f] mb-4">Privacy Policy</h1>
            <p className="text-gray-500 text-xs mb-6">Last updated: August 2026</p>
            
            <section className="space-y-4 text-sm text-gray-700">
              <h2 className="text-lg font-bold text-[#112d4a] mt-6">1. General Information</h2>
              <p>
                At WorldSpend.org, we respect your privacy and are committed to protecting the personal data you may share with us. This policy describes how we collect, use, and protect your information when visiting our website.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">2. Data Collection</h2>
              <p>
                We do not collect personally identifiable information (such as your name, address, or email) unless you choose to provide it voluntarily. However, to improve service and user experience, we use third-party analytics tools (such as Google Analytics) that may collect technical data anonymously, such as your IP address, browser type, and visited pages.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">3. Cookies and Ads</h2>
              <p>
                We use first-party and third-party cookies to remember your preferences (such as selected currency and timeframe) and to optimize technical performance. In the future, this website may display advertising through third-party ad networks (such as Google AdSense), which may use cookies to target ads based on your interests.
              </p>

              <h2 className="text-lg font-bold text-[#112d4a] mt-6">4. Your Rights</h2>
              <p>
                You can configure your web browser to reject cookies. However, please note that some features of the website may not function correctly if you disable them.
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
