import { use, Suspense } from 'react';
import { notFound } from 'next/navigation';
import { CounterDetailView } from '@/components/CounterDetailView';
import { getLocalizedSpendItems, generateDetailSEO } from '@/utils/i18n';
import { Metadata } from 'next';

interface StatPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: StatPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const items = getLocalizedSpendItems('en');
  const item = items.find((s) => s.id === resolvedParams.id);

  if (!item) return {};

  const seo = generateDetailSEO(item, 'en');

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `https://worldspend.org/stat/${item.id}`,
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

export default function StatPage({ params }: StatPageProps) {
  const resolvedParams = use(params);
  const items = getLocalizedSpendItems('en');
  const item = items.find((s) => s.id === resolvedParams.id);

  if (!item) {
    return notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    'name': item.title,
    'description': item.description,
    'url': `https://worldspend.org/stat/${item.id}`,
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
      <CounterDetailView id={resolvedParams.id} locale="en" />
    </Suspense>
  );
}
