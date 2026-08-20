import { use } from 'react';
import { EmbedView } from '@/components/EmbedView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

interface EmbedPageProps {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{
    currency?: string;
    timeframe?: string;
  }>;
}

export default function EmbedPage({ params, searchParams }: EmbedPageProps) {
  const resolvedParams = use(params);
  const resolvedSearchParams = searchParams ? use(searchParams) : {};

  return (
    <EmbedView
      id={resolvedParams.id}
      locale="en"
      currency={resolvedSearchParams.currency}
      timeframe={resolvedSearchParams.timeframe}
    />
  );
}
