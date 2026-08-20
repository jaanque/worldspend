import { use } from 'react';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/utils/i18n';
import { PrivacyView } from '@/components/PrivacyView';
import { Locale } from '@/types/i18n';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

interface LocalizedPrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export default function LocalizedPrivacyPage({ params }: LocalizedPrivacyPageProps) {
  const resolvedParams = use(params);

  if (!isValidLocale(resolvedParams.locale) || resolvedParams.locale === 'en') {
    return notFound();
  }

  return <PrivacyView locale={resolvedParams.locale as Locale} />;
}
