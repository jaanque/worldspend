'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Locale } from '@/types/i18n';
import { getDictionary } from '@/utils/i18n';

interface BackToTopProps {
  locale?: Locale;
}

export const BackToTop: React.FC<BackToTopProps> = ({ locale = 'en' }) => {
  const [visible, setVisible] = useState(false);
  const dict = getDictionary(locale);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  if (!visible) return null;

  const label = dict.header.backToTop || 'Volver arriba';

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      title={label}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-b from-[#245280] to-[#16385c] hover:from-[#1c4b78] hover:to-[#0f2842] text-white rounded-xs shadow-md hover:shadow-lg border border-[#0f2842] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
    >
      <ChevronUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </button>
  );
};
