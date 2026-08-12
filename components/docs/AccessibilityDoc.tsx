import Link from 'next/link';
import { PageHeader } from './PageHeader';
import { Section } from './Section';
import { ContentWrapper } from './ContentWrapper';
import { NavItem } from '@/data/types';
import { getBreadcrumbs, getPrevNextNav } from '@/lib/navigation';

interface AccessibilityDocProps {
  item: NavItem;
}

export function AccessibilityDoc({ item }: AccessibilityDocProps) {
  const breadcrumbs = getBreadcrumbs(item.category, item.slug);
  const { prev, next } = getPrevNextNav(item.category, item.slug);

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'keyboard-navigation', title: 'Keyboard Navigation' },
    { id: 'focus-management', title: 'Focus Management' },
    { id: 'color-contrast', title: 'Color Contrast' },
    { id: 'accessible-labels', title: 'Accessible Labels' },
    { id: 'testing', title: 'Testing' },
  ];

  return (
    <ContentWrapper sections={sections}>
      <PageHeader
        title={item.title}
        description={item.description}
        category={item.category}
        status={item.status}
        breadcrumbs={breadcrumbs}
      />

      {/* 1. Overview */}
      <Section id="overview" title="Overview">
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Accessibility is a foundational priority for <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Creativ UI</strong>. Built on top of <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Base UI</strong> primitives, Creativ UI components handle complex accessibility requirements including WAI-ARIA attributes, role definitions, pointer interactions, keyboard navigation, and focus management out of the box.
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          This guide outlines the key accessibility patterns built into Creativ UI and Base UI, as well as guidelines to ensure your production applications remain accessible to all users.
        </p>
      </Section>

      {/* 2. Keyboard Navigation */}
      <Section id="keyboard-navigation" title="Keyboard navigation">
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Creativ UI</strong> components inherit <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Base UI</strong>&apos;s strict adherence to WAI-ARIA Authoring Practices. Every interactive element provides keyboard navigation out of the box, ensuring an optimal experience for users relying on keyboards or assistive switch devices.
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium text-neutral-900 dark:text-neutral-100">
          Components support standard keyboard triggers including Arrow keys, Tab, Shift+Tab, Home, End, Enter, Space, and Esc.
        </p>
      </Section>

      {/* 3. Focus Management */}
      <Section id="focus-management" title="Focus management">
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Creativ UI</strong> leverages <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Base UI</strong> to manage DOM focus automatically following user interactions. Overlay components (like Dialog and Drawer) provide props such as <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">initialFocus</code> and <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">finalFocus</code> for explicit focus restoration.
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          While Base UI manages underlying focus trapping, Creativ UI provides pre-styled high-contrast <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">:focus-visible</code> focus rings using Tailwind CSS to meet WCAG focus visibility standards.
        </p>
      </Section>

      {/* 4. Color Contrast */}
      <Section id="color-contrast" title="Color contrast">
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Creativ UI</strong>&apos;s design system tokens and gray scale palettes are engineered to exceed WCAG 2.1 AA contrast requirements (minimum 4.5:1 for normal text and 3:1 for large text). Theme tokens support both high-contrast light and dark mode surfaces.
        </p>
      </Section>

      {/* 5. Accessible Labels */}
      <Section id="accessible-labels" title="Accessible labels">
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Creativ UI</strong> includes form primitives (<code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">Form</code>, <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">Input</code>, <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">Field</code>, <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">Fieldset</code>) powered by Base UI that automatically associate labels with input controls via unique IDs and ARIA attributes.
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Custom icon buttons or unlabelled triggers use <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">aria-label</code> or <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">aria-labelledby</code> attributes to ensure screen readers receive descriptive accessible names.
        </p>
      </Section>

      {/* 6. Testing */}
      <Section id="testing" title="Testing">
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Creativ UI</strong> and <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Base UI</strong> components are rigorously tested across modern browsers, operating systems, screen readers (VoiceOver, NVDA, JAWS), and keyboard-only input environments.
        </p>
      </Section>

      {/* Pagination Footer */}
      <nav aria-label="Pagination" className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-4">
        {prev ? (
          <Link
            href={prev.href}
            className="group flex flex-col p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          >
            <span className="text-[10px] font-mono uppercase text-neutral-500">Previous</span>
            <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-950 dark:group-hover:text-white">
              ← {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {next && (
          <Link
            href={next.href}
            className="group flex flex-col items-end p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          >
            <span className="text-[10px] font-mono uppercase text-neutral-500">Next</span>
            <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-950 dark:group-hover:text-white">
              {next.title} →
            </span>
          </Link>
        )}
      </nav>
    </ContentWrapper>
  );
}
