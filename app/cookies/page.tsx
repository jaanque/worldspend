import { CookiesView } from '@/components/CookiesView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function CookiesPage() {
  return <CookiesView locale="en" />;
}
