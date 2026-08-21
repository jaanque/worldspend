import { use, Suspense } from 'react';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/utils/i18n';
import { CalculatorView } from '@/components/CalculatorView';
import { CalculatorViewSkeleton } from '@/components/Skeleton';
import { Locale } from '@/types/i18n';

interface LocalizedCalculatorPageProps {
  params: Promise<{ locale: string }>;
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
