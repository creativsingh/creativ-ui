import { NAVIGATION_DATA } from './navigation';

export interface SearchResultItem {
  id: string;
  title: string;
  category: string;
  description: string;
  href: string;
  icon?: string;
  keywords?: string[];
}

export function getSearchIndex(): SearchResultItem[] {
  const index: SearchResultItem[] = [
    {
      id: 'home',
      title: 'Creativ UI Homepage',
      category: 'Overview',
      description: 'Design system landing page, hero overview, and ecosystem index.',
      href: '/',
      icon: '🏠',
      keywords: ['home', 'landing', 'creativ', 'overview', 'design system'],
    },
  ];

  // Map all navigation items
  NAVIGATION_DATA.forEach((section) => {
    section.items.forEach((item) => {
      index.push({
        id: `${section.id}-${item.slug}`,
        title: item.title,
        category: section.title,
        description: item.description,
        href: item.href,
        icon: section.id === 'components' ? '🧩' : section.id === 'foundations' ? '🎨' : '📚',
        keywords: [item.title.toLowerCase(), item.slug.toLowerCase(), section.title.toLowerCase()],
      });
    });
  });

  // Add specific section shortcuts
  index.push(
    {
      id: 'sec-figma',
      title: 'Figma Component Library',
      category: 'Design Assets',
      description: 'Complete 1:1 Figma design system matching every React component.',
      href: '/getting-started/introduction#figma',
      icon: '🎨',
      keywords: ['figma', 'design', 'ui kit', 'sketch', 'tokens'],
    },
    {
      id: 'sec-baseui',
      title: 'Base UI Accessibility Contracts',
      category: 'Engineering',
      description: 'Unstyled Base UI primitives providing ARIA roles and focus trapping.',
      href: '/getting-started/introduction#baseui',
      icon: '♿',
      keywords: ['base ui', 'accessibility', 'wcag', 'aria', 'keyboard'],
    },
    {
      id: 'sec-principles',
      title: 'Core Design Principles',
      category: 'Philosophy',
      description: 'Accessibility First, Design-Code Parity, Composable Architecture.',
      href: '/getting-started/introduction#principles',
      icon: '⚡',
      keywords: ['principles', 'philosophy', 'parity', 'composition'],
    }
  );

  return index;
}
