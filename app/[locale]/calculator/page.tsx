import { use, Suspense } from 'react';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/utils/i18n';
import { CalculatorView } from '@/components/CalculatorView';
import { CalculatorViewSkeleton } from '@/components/Skeleton';
import { Locale } from '@/types/i18n';
import { Metadata } from 'next';

interface LocalizedCalculatorPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LocalizedCalculatorPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  if (!isValidLocale(resolvedParams.locale)) {
    return {};
  }
  const locale = resolvedParams.locale as Locale;

  const titles: Record<Locale, string> = {
    es: 'Calculadora de Gasto Personal — Compara tu gasto con el mundo',
    fr: 'Calculatrice de dépenses personnelles — Comparez vos dépenses',
    de: 'Persönlicher Ausgabenrechner — Vergleichen Sie Ihre Ausgaben',
    pt: 'Calculadora de Gastos Pessoais — Compare seus gastos',
    en: 'Personal Spend Calculator — Compare Your Spending',
  };

  const descriptions: Record<Locale, string> = {
    es: 'Introduce cualquier gasto y observa al instante cuánto tarda el mundo entero en gastar la misma cantidad.',
    fr: 'Saisissez vos dépenses et voyez instantanément combien de temps le monde met à dépenser la même somme.',
    de: 'Geben Sie Ihre Ausgaben ein und sehen Sie, wie schnell die Welt den gleichen Betrag ausgibt.',
    pt: 'Insira qualquer gasto e veja instantaneamente quanto tempo o mundo leva para gastar a mesma quantia.',
    en: 'Enter any daily, monthly or yearly expense and instantly see how long it takes the entire world to spend the same amount.',
  };

  const slugs: Record<Locale, string> = {
    en: 'calculator',
    es: 'calculadora',
    fr: 'calculatrice',
    de: 'rechner',
    pt: 'calculadora',
  };

  const canonicalUrl = `https://worldspend.org/${locale}/${slugs[locale]}`;

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': 'https://worldspend.org/calculator',
        'es': 'https://worldspend.org/es/calculadora',
        'fr': 'https://worldspend.org/fr/calculatrice',
        'de': 'https://worldspend.org/de/rechner',
        'pt': 'https://worldspend.org/pt/calculadora',
        'x-default': 'https://worldspend.org/calculator',
      },
    },
  };
}

export default function LocalizedCalculatorPage({ params }: LocalizedCalculatorPageProps) {
  const resolvedParams = use(params);

  if (!isValidLocale(resolvedParams.locale) || resolvedParams.locale === 'en') {
    return notFound();
  }

  return (
    <Suspense fallback={<CalculatorViewSkeleton />}>
      <CalculatorView locale={resolvedParams.locale as Locale} />
    </Suspense>
  );
}
