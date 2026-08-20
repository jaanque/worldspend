import { use, Suspense } from 'react';
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

  const locale = resolvedParams.locale as Locale;
  const items = getLocalizedSpendItems(locale);
  const item = items.find((s) => s.id === resolvedParams.id);

  if (!item) {
    return notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    'name': item.title,
    'description': item.description,
    'url': `https://worldspend.org/${locale}/stat/${item.id}`,
    'creator': {
      '@type': 'Organization',
      'name': 'WorldSpend.org',
      'url': 'https://worldspend.org',
    },
    'sourceOrganization': {
      '@type': 'Organization',
      'name': item.sourceName,
    },
    'temporalCoverage': `${item.sourceYear}-01-01/${item.sourceYear}-12-31`,
  };

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#edf1f5]" />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CounterDetailView id={resolvedParams.id} locale={resolvedParams.locale as Locale} />
    </Suspense>
  );
}
