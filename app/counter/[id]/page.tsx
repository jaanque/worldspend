import { redirect } from 'next/navigation';

interface CounterRedirectProps {
  params: Promise<{ id: string }>;
}

export default async function CounterRedirectPage({ params }: CounterRedirectProps) {
  const resolvedParams = await params;
  redirect(`/stat/${resolvedParams.id}`);
}
