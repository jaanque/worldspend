import { PrivacyView } from '@/components/PrivacyView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return <PrivacyView locale="en" />;
}
