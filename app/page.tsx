import { HomeView } from '@/components/HomeView';
import { HomeViewSkeleton } from '@/components/Skeleton';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <Suspense fallback={<HomeViewSkeleton />}>
      <HomeView locale="en" />
    </Suspense>
  );
}
