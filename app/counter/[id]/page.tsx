import { redirect } from 'next/navigation';
import { getLocalizedSpendItems } from '@/utils/i18n';

interface CounterRedirectProps {
  params: Promise<{ id: string }>;
}

export default async function CounterRedirectPage({ params }: CounterRedirectProps) {
  const resolvedParams = await params;
  const items = getLocalizedSpendItems('en');
  const item = items.find(s => s.id === resolvedParams.id);
  const slug = item?.slug || resolvedParams.id;
  redirect(`/stat/${slug}`);
}
