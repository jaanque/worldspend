import { LegalView } from '@/components/LegalView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function LegalPage() {
  return <LegalView locale="en" />;
}
