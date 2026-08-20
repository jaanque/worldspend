import { HomeView } from '@/components/HomeView';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomeView locale="en" />
    </Suspense>
  );
}
