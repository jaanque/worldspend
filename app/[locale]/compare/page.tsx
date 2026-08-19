import { use, Suspense } from 'react';
import { notFound } from 'next/navigation';
import { isValidLocale, getDictionary } from '@/utils/i18n';
import { MultiCompareView } from '@/components/MultiCompareView';
import { Metadata } from 'next';
import { Locale } from '@/types/i18n';

interface LocalizedComparePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LocalizedComparePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  if (!isValidLocale(resolvedParams.locale)) {
    return {};
  }

  const locale = resolvedParams.locale as Locale;
  const dict = getDictionary(locale);

  return {
    title: `${dict.comparePage?.title || 'Compare'} | WorldSpend.org`,
    description: dict.comparePage?.subtitle || 'Compare up to 10 real-time expenditure counters.',
    alternates: {
      canonical: `https://worldspend.org/${locale}/compare`,
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
}

export default function LocalizedComparePage({ params }: LocalizedComparePageProps) {
  const resolvedParams = use(params);

  if (!isValidLocale(resolvedParams.locale) || resolvedParams.locale === 'en') {
    return notFound();
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f4f6f8] flex items-center justify-center text-sm font-bold text-gray-500">Loading comparator...</div>}>
      <MultiCompareView locale={resolvedParams.locale as Locale} />
    </Suspense>
  );
}
