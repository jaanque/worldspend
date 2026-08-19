import { MultiCompareView } from '@/components/MultiCompareView';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Compare World Spending Counters & Real-Time Flow Benchmarks | WorldSpend.org',
  description:
    'Compare up to 10 global real-time financial expenditure counters simultaneously. Live 60 FPS velocity benchmarks, relative rankings, and proportional macroeconomic flows.',
  keywords: [
    'Compare world spend',
    'Real-time financial flow comparison',
    'Live spending benchmarks',
    'Macroeconomic expenditure comparison',
    'WorldSpend comparator',
  ],
  alternates: {
    canonical: 'https://worldspend.org/compare',
    languages: {
      'en': 'https://worldspend.org/compare',
      'es': 'https://worldspend.org/es/compare',
      'fr': 'https://worldspend.org/fr/compare',
      'de': 'https://worldspend.org/de/compare',
      'pt': 'https://worldspend.org/pt/compare',
      'x-default': 'https://worldspend.org/compare',
    },
  },
};

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f4f6f8] flex items-center justify-center text-sm font-bold text-gray-500">Loading comparator...</div>}>
      <MultiCompareView locale="en" />
    </Suspense>
  );
}
