import { use } from 'react';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/utils/i18n';
import { EmbedView } from '@/components/EmbedView';
import { Locale } from '@/types/i18n';

interface LocalizedEmbedPageProps {
  params: Promise<{ locale: string; id: string }>;
  searchParams?: Promise<{
    currency?: string;
    timeframe?: string;
  }>;
}

export default function LocalizedEmbedPage({ params, searchParams }: LocalizedEmbedPageProps) {
  const resolvedParams = use(params);
  const resolvedSearchParams = searchParams ? use(searchParams) : {};

  if (!isValidLocale(resolvedParams.locale) || resolvedParams.locale === 'en') {
    return notFound();
  }

  return (
    <EmbedView
      id={resolvedParams.id}
      locale={resolvedParams.locale as Locale}
      currency={resolvedSearchParams.currency}
      timeframe={resolvedSearchParams.timeframe}
    />
  );
}
