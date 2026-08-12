import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getNavEntry, isValidSlug } from '@/lib/navigation';
import { PlaceholderDoc } from '@/components/docs/PlaceholderDoc';
import { AccessibilityDoc } from '@/components/docs/AccessibilityDoc';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getNavEntry('getting-started', slug);

  if (!item) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${item.title} — Getting Started`,
    description: item.description,
  };
}

export default async function GettingStartedPage({ params }: PageProps) {
  const { slug } = await params;

  if (!isValidSlug('getting-started', slug)) {
    notFound();
  }

  const item = getNavEntry('getting-started', slug);
  if (!item) {
    notFound();
  }

  if (slug === 'accessibility') {
    return <AccessibilityDoc item={item} />;
  }

  return <PlaceholderDoc item={item} />;
}
