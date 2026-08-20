import { use } from 'react';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/utils/i18n';
import { TermsView } from '@/components/TermsView';
import { Locale } from '@/types/i18n';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

interface LocalizedTermsPageProps {
  params: Promise<{ locale: string }>;
}

export default function LocalizedTermsPage({ params }: LocalizedTermsPageProps) {
  const resolvedParams = use(params);

  if (!isValidLocale(resolvedParams.locale) || resolvedParams.locale === 'en') {
    return notFound();
  }

  return <TermsView locale={resolvedParams.locale as Locale} />;
}
