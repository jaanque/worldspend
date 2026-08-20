import type { Metadata } from 'next';
import './globals.css';
import { CookieBanner } from '@/components/CookieBanner';

const BASE_URL = 'https://worldspend.org';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'WorldSpend.org — Real-Time Global Spending Statistics',
    template: '%s | WorldSpend.org',
  },
  description:
    'Track how the world spends money in real time. Live counters for military spending, global health, food, illegal markets, GDP by country and more — updated every second.',
  keywords: [
    'real-time global spending',
    'live spending statistics',
    'world spending clock',
    'global expenditure tracker',
    'military spending live',
    'global health spending',
    'world GDP statistics',
    'macroeconomic real-time data',
    'global financial tracker',
    'money spent in the world',
  ],
  authors: [{ name: 'WorldSpend.org', url: BASE_URL }],
  creator: 'WorldSpend.org',
  publisher: 'WorldSpend.org',
  category: 'Economics & Finance',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en': BASE_URL,
      'es': `${BASE_URL}/es`,
      'fr': `${BASE_URL}/fr`,
      'de': `${BASE_URL}/de`,
      'pt': `${BASE_URL}/pt`,
      'x-default': BASE_URL,
    },
  },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'WorldSpend.org',
    title: 'WorldSpend.org — Real-Time Global Spending Statistics',
    description:
      'Track how the world spends money in real time. Live counters for military, health, food, illegal markets, GDP and more — updated every second.',
    locale: 'en_US',
    alternateLocale: ['es_ES', 'fr_FR', 'de_DE', 'pt_PT'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@worldspend',
    creator: '@worldspend',
    title: 'WorldSpend.org — Real-Time Global Spending Statistics',
    description:
      'Track how the world spends money in real time. Live counters for military, health, food, illegal markets, GDP and more.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'WorldSpend.org',
      description: 'Real-time global spending statistics — live counters updated every second.',
      inLanguage: ['en', 'es', 'fr', 'de', 'pt'],
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'WorldSpend.org',
      url: BASE_URL,
      description: 'Provider of real-time macroeconomic and global spending statistics.',
      sameAs: [],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#edf1f5] text-[#222222] min-h-screen antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

