import { NAVIGATION_DATA } from '@/data/navigation';
import { NavCategory, NavItem, NavSection, BreadcrumbItem } from '@/data/types';

/**
 * Returns all navigation sections.
 */
export function getNavSections(): NavSection[] {
  return NAVIGATION_DATA;
}

/**
 * Validates whether a category and slug exist in navigation data.
 */
export function isValidSlug(category: string, slug: string): boolean {
  const section = NAVIGATION_DATA.find((s) => s.id === category);
  if (!section) return false;
  return section.items.some((item) => item.slug === slug);
}

/**
 * Finds a specific navigation entry by category and slug.
 */
export function getNavEntry(category: string, slug: string): NavItem | null {
  const section = NAVIGATION_DATA.find((s) => s.id === category);
  if (!section) return null;
  return section.items.find((item) => item.slug === slug) || null;
}

/**
 * Generates data-driven breadcrumbs for a given category and slug.
 */
export function getBreadcrumbs(category: string, slug: string): BreadcrumbItem[] {
  const section = NAVIGATION_DATA.find((s) => s.id === category);
  const item = getNavEntry(category, slug);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Docs', href: '/getting-started/introduction' },
  ];

  if (section) {
    breadcrumbs.push({
      label: section.title,
      href: section.items[0]?.href,
    });
  }

  if (item) {
    breadcrumbs.push({
      label: item.title,
    });
  }

  return breadcrumbs;
}

/**
 * Retrieves the previous and next navigation items for pagination.
 */
export function getPrevNextNav(
  category: string,
  slug: string
): { prev: NavItem | null; next: NavItem | null } {
  const allItems: NavItem[] = NAVIGATION_DATA.flatMap((section) => section.items);
  const currentIndex = allItems.findIndex(
    (item) => item.category === category && item.slug === slug
  );

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  const prev = currentIndex > 0 ? allItems[currentIndex - 1] : null;
  const next = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

  return { prev, next };
}
