import { TermsView } from '@/components/TermsView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return <TermsView locale="en" />;
}
