import { use, Suspense } from 'react';
import { notFound } from 'next/navigation';
import { isValidLocale, getDictionary } from '@/utils/i18n';
import { HomeView } from '@/components/HomeView';
import { Metadata } from 'next';
import { Locale } from '@/types/i18n';

interface LocalizedHomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LocalizedHomePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  if (!isValidLocale(resolvedParams.locale)) {
    return {};
  }

  const locale = resolvedParams.locale as Locale;
  const dict = getDictionary(locale);

  return {
    title: dict.seo.title,
    description: dict.seo.description,
    keywords: dict.seo.keywords,
    alternates: {
      canonical: `https://worldspend.org/${locale}`,
      languages: {
        'en': 'https://worldspend.org',
        'es': 'https://worldspend.org/es',
        'fr': 'https://worldspend.org/fr',
        'de': 'https://worldspend.org/de',
        'pt': 'https://worldspend.org/pt',
        'x-default': 'https://worldspend.org',
      },
    },
  };
}

export default function LocalizedHomePage({ params }: LocalizedHomePageProps) {
  const resolvedParams = use(params);

  if (!isValidLocale(resolvedParams.locale) || resolvedParams.locale === 'en') {
    return notFound();
  }

  return (
    <Suspense fallback={null}>
      <HomeView locale={resolvedParams.locale as Locale} />
    </Suspense>
  );
}
