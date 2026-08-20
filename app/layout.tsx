import type { Metadata } from 'next';
import './globals.css';
import { CookieBanner } from '@/components/CookieBanner';

export const metadata: Metadata = {
  metadataBase: new URL('https://worldspend.org'),
  title: 'WorldSpend.org — Real-Time Global Expenditure & Live Spending Statistics',
  description:
    'Authoritative live statistics tracking real-time global expenditure, live spending statistics, world spending clock, and global financial tracker data.',
  keywords: [
    'Real-time global expenditure',
    'Live spending statistics',
    'Global financial tracker',
    'World spending clock',
    'world expenditure',
    'macroeconomic statistics',
    'global finance dashboard',
  ],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  alternates: {
    canonical: 'https://worldspend.org',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#edf1f5] text-[#222222] min-h-screen antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
