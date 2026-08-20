'use client';

import React, { useState, useEffect } from 'react';
import { Locale } from '@/types/i18n';
import Link from 'next/link';

interface CookieBannerProps {
  // We can read locale from document cookie or html lang
  forcedLocale?: Locale;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ forcedLocale }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    // Detect locale from HTML lang or path
    if (typeof window !== 'undefined') {
      const pathLocale = window.location.pathname.split('/')[1] as Locale;
      const supported: Locale[] = ['en', 'es', 'fr', 'de', 'pt'];
      if (supported.includes(pathLocale)) {
        setLocale(pathLocale);
      } else {
        setLocale('en');
      }

      // Check if cookies are already accepted
      const isAccepted = localStorage.getItem('worldspend_cookies_accepted');
      if (isAccepted !== 'true') {
        setIsVisible(true);
      }
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('worldspend_cookies_accepted', 'true');
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  const resolvedLocale = forcedLocale || locale;

  const messages = {
    es: {
      text: 'Utilizamos cookies propias y de terceros para recordar tus preferencias (moneda y período) y optimizar tu experiencia. Al continuar navegando, aceptas su uso.',
      accept: 'Aceptar',
      policy: 'Política de Cookies',
      policyPath: '/cookies',
    },
    en: {
      text: 'We use cookies to remember your preferences (currency and timeframe) and optimize your experience. By continuing to browse, you accept their use.',
      accept: 'Accept',
      policy: 'Cookies Policy',
      policyPath: '/cookies',
    },
    fr: {
      text: 'Nous utilisons des cookies pour mémoriser vos préférences (devise et période) et optimiser votre expérience. En continuant à naviguer, vous acceptez leur utilisation.',
      accept: 'Accepter',
      policy: 'Politique de Cookies',
      policyPath: '/fr/cookies',
    },
    de: {
      text: 'Wir verwenden Cookies, um Ihre Einstellungen (Währung und Zeitraum) zu speichern und Ihr Erlebnis zu optimieren. Durch die weitere Nutzung stimmen Sie deren Verwendung zu.',
      accept: 'Akzeptieren',
      policy: 'Cookie-Richtlinie',
      policyPath: '/de/cookies',
    },
    pt: {
      text: 'Utilizamos cookies para memorizar as suas preferências (moeda e período) e otimizar a sua experiência. Ao continuar a navegar, aceita a sua utilização.',
      accept: 'Aceitar',
      policy: 'Política de Cookies',
      policyPath: '/pt/cookies',
    },
  };

  const current = messages[resolvedLocale] || messages.en;

  return (
    <div className="fixed bottom-3 right-3 left-3 sm:left-auto sm:max-w-md z-[9999] bg-[#112d4af2] backdrop-blur-md text-white border border-[#245280] rounded-xs p-4 shadow-xl flex flex-col gap-3 transition-all duration-300">
      <p className="text-[11px] leading-relaxed text-blue-100">
        {current.text}{' '}
        <Link href={current.policyPath} className="underline text-white font-bold hover:text-blue-200">
          {current.policy}
        </Link>
        .
      </p>
      <div className="flex justify-end">
        <button
          onClick={handleAccept}
          className="bg-[#245280] hover:bg-[#1f4e7a] text-white text-[11px] font-bold px-4 py-1.5 rounded-xs transition-colors cursor-pointer focus:outline-none"
        >
          {current.accept}
        </button>
      </div>
    </div>
  );
};
