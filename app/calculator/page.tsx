import { CalculatorView } from '@/components/CalculatorView';
import { CalculatorViewSkeleton } from '@/components/Skeleton';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personal Spend Calculator — Compare Your Spending to the World',
  description:
    'Enter any daily, monthly or yearly expense and instantly see how long it takes the entire world to spend the same amount. A free real-time global spending comparison tool.',
  keywords: ['personal spend calculator', 'global spending comparison', 'world spending tool', 'money calculator'],
  openGraph: {
    title: 'Personal Spend Calculator | WorldSpend.org',
    description: 'How fast does the world spend what you earn? Compare your spending to global statistics in real time.',
    url: 'https://worldspend.org/calculator',
    siteName: 'WorldSpend.org',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Personal Spend Calculator | WorldSpend.org',
    description: 'How fast does the world spend what you earn? Compare your spending to global statistics in real time.',
  },
  alternates: {
    canonical: 'https://worldspend.org/calculator',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'WorldSpend Personal Spend Calculator',
  url: 'https://worldspend.org/calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  description: 'Enter any expense and see how quickly the world spends the same amount, in microseconds, seconds, minutes, hours, days or years.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  creator: { '@type': 'Organization', name: 'WorldSpend.org', url: 'https://worldspend.org' },
};

export default function CalculatorPage() {
  return (
    <Suspense fallback={<CalculatorViewSkeleton />}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CalculatorView locale="en" />
    </Suspense>
  );
}
