import { use, Suspense } from 'react';
import { notFound } from 'next/navigation';
import { CounterDetailView } from '@/components/CounterDetailView';
import { CounterDetailViewSkeleton } from '@/components/Skeleton';
import { getLocalizedSpendItems, generateDetailSEO } from '@/utils/i18n';
import { Metadata } from 'next';

interface StatPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: StatPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const items = getLocalizedSpendItems('en');
  const item = items.find((s) => s.slug === resolvedParams.id || s.id === resolvedParams.id);

  if (!item) return {};

  const seo = generateDetailSEO(item, 'en');

  const canonicalSlug = item.slug || item.id;
  const canonicalUrl = `https://worldspend.org/stat/${canonicalSlug}`;

  const langAlternates: Record<string, string> = {};
  const locales: ('en' | 'es' | 'fr' | 'de' | 'pt')[] = ['en', 'es', 'fr', 'de', 'pt'];
  locales.forEach((loc) => {
    const targetItems = getLocalizedSpendItems(loc);
    const targetItem = targetItems.find((s) => s.id === item.id);
    if (targetItem) {
      const targetSlug = targetItem.slug || item.id;
      langAlternates[loc] = loc === 'en'
        ? `https://worldspend.org/stat/${targetSlug}`
        : `https://worldspend.org/${loc}/stat/${targetSlug}`;
    }
  });

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      siteName: 'WorldSpend.org',
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: seo.title,
      description: seo.description,
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ...langAlternates,
        'x-default': langAlternates['en'],
      },
    },
  };
}

export default function StatPage({ params }: StatPageProps) {
  const resolvedParams = use(params);
  const items = getLocalizedSpendItems('en');
  const item = items.find((s) => s.slug === resolvedParams.id || s.id === resolvedParams.id);

  if (!item) {
    return notFound();
  }

  const canonicalSlug = item.slug || item.id;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    'name': item.title,
    'description': item.description,
    'url': `https://worldspend.org/stat/${canonicalSlug}`,
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
    <Suspense fallback={<CounterDetailViewSkeleton />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CounterDetailView id={item.id} locale="en" />
    </Suspense>
  );
}
