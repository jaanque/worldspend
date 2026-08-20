import { use } from 'react';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/utils/i18n';
import { LegalView } from '@/components/LegalView';
import { Locale } from '@/types/i18n';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

interface LocalizedLegalPageProps {
  params: Promise<{ locale: string }>;
}

export default function LocalizedLegalPage({ params }: LocalizedLegalPageProps) {
  const resolvedParams = use(params);

  if (!isValidLocale(resolvedParams.locale) || resolvedParams.locale === 'en') {
    return notFound();
  }

  return <LegalView locale={resolvedParams.locale as Locale} />;
}
