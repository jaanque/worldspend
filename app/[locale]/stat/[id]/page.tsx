import { use } from 'react';
import { notFound } from 'next/navigation';
import { isValidLocale, getLocalizedSpendItems, generateDetailSEO } from '@/utils/i18n';
import { CounterDetailView } from '@/components/CounterDetailView';
import { Metadata } from 'next';
import { Locale } from '@/types/i18n';

interface LocalizedStatPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateMetadata({ params }: LocalizedStatPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  if (!isValidLocale(resolvedParams.locale)) {
    return {};
  }

  const locale = resolvedParams.locale as Locale;
  const items = getLocalizedSpendItems(locale);
  const item = items.find((s) => s.id === resolvedParams.id);

  if (!item) return {};

  const seo = generateDetailSEO(item, locale);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `https://worldspend.org/${locale}/stat/${item.id}`,
      languages: {
        'en': `https://worldspend.org/stat/${item.id}`,
        'es': `https://worldspend.org/es/stat/${item.id}`,
        'fr': `https://worldspend.org/fr/stat/${item.id}`,
        'de': `https://worldspend.org/de/stat/${item.id}`,
        'pt': `https://worldspend.org/pt/stat/${item.id}`,
        'x-default': `https://worldspend.org/stat/${item.id}`,
      },
    },
  };
}

export default function LocalizedStatPage({ params }: LocalizedStatPageProps) {
  const resolvedParams = use(params);

  if (!isValidLocale(resolvedParams.locale) || resolvedParams.locale === 'en') {
    return notFound();
  }

  return <CounterDetailView id={resolvedParams.id} locale={resolvedParams.locale as Locale} />;
}
