import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getNavEntry, isValidSlug } from '@/lib/navigation';
import { PlaceholderDoc } from '@/components/docs/PlaceholderDoc';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getNavEntry('components', slug);

  if (!item) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${item.title} — Component Library`,
    description: item.description,
  };
}

export default async function ComponentsPage({ params }: PageProps) {
  const { slug } = await params;

  if (!isValidSlug('components', slug)) {
    notFound();
  }

  const item = getNavEntry('components', slug);
  if (!item) {
    notFound();
  }

  return <PlaceholderDoc item={item} />;
}
