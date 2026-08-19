import { use } from 'react';
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
  return <CounterDetailView id={resolvedParams.id} locale="en" />;
}
