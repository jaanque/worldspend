import { redirect } from 'next/navigation';
import { getLocalizedSpendItems, isValidLocale } from '@/utils/i18n';
import { Locale } from '@/types/i18n';

interface LocalizedCounterRedirectProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function LocalizedCounterRedirectPage({ params }: LocalizedCounterRedirectProps) {
  const resolvedParams = await params;
  const locale = isValidLocale(resolvedParams.locale) ? resolvedParams.locale as Locale : 'en';
  const items = getLocalizedSpendItems(locale);
  const item = items.find(s => s.id === resolvedParams.id);
  const slug = item?.slug || resolvedParams.id;
  redirect(locale === 'en' ? `/stat/${slug}` : `/${locale}/stat/${slug}`);
}
