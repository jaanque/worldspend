import { redirect } from 'next/navigation';

interface LocalizedCounterRedirectProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function LocalizedCounterRedirectPage({ params }: LocalizedCounterRedirectProps) {
  const resolvedParams = await params;
  redirect(`/${resolvedParams.locale}/stat/${resolvedParams.id}`);
}
