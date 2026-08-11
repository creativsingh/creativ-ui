export type NavCategory = 'getting-started' | 'foundations' | 'components';

export type ComponentStatus = 'stable' | 'beta' | 'planned' | 'coming-soon';

export interface NavItem {
  id: string;
  title: string;
  slug: string;
  category: NavCategory;
  href: string;
  description: string;
  status: ComponentStatus;
  badge?: string;
  order: number;
}

export interface NavSection {
  id: NavCategory;
  title: string;
  description: string;
  items: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface DocPageSection {
  id: string;
  title: string;
}
