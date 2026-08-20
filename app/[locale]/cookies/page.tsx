import { use } from 'react';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/utils/i18n';
import { CookiesView } from '@/components/CookiesView';
import { Locale } from '@/types/i18n';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

interface LocalizedCookiesPageProps {
  params: Promise<{ locale: string }>;
}

export default function LocalizedCookiesPage({ params }: LocalizedCookiesPageProps) {
  const resolvedParams = use(params);

  if (!isValidLocale(resolvedParams.locale) || resolvedParams.locale === 'en') {
    return notFound();
  }

  return <CookiesView locale={resolvedParams.locale as Locale} />;
}
