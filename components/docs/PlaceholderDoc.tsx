import Link from 'next/link';
import { PageHeader } from './PageHeader';
import { Section } from './Section';
import { ContentWrapper } from './ContentWrapper';
import { NavItem } from '@/data/types';
import { getBreadcrumbs, getPrevNextNav } from '@/lib/navigation';

interface PlaceholderDocProps {
  item: NavItem;
}

export function PlaceholderDoc({ item }: PlaceholderDocProps) {
  const breadcrumbs = getBreadcrumbs(item.category, item.slug);
  const { prev, next } = getPrevNextNav(item.category, item.slug);

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'preview', title: 'Preview' },
    { id: 'installation', title: 'Installation' },
    { id: 'usage', title: 'Usage' },
    { id: 'variants', title: 'Variants' },
    { id: 'accessibility', title: 'Accessibility' },
    { id: 'api', title: 'API' },
    { id: 'design-notes', title: 'Design Notes' },
    { id: 'figma', title: 'Figma' },
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

      {/* Banner / Notice */}
      <div className="p-4 mb-8 rounded-lg bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 flex items-start gap-3">
        <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5">
          !
        </div>
        <div className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
          <p className="font-semibold text-neutral-900 dark:text-neutral-100 mb-0.5">
            Documentation Platform Ready (Phase 1)
          </p>
          <p>
            The architectural shell for <span className="font-semibold text-neutral-900 dark:text-neutral-100">{item.title}</span> is complete. Component implementation and interactive playgrounds will be introduced in Phase 2 in strict adherence to Base UI accessibility patterns and design tokens.
          </p>
        </div>
      </div>

      {/* 1. Overview */}
      <Section id="overview" title="Overview">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {item.description}
        </p>
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 text-xs text-neutral-500 space-y-2">
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">Design Rationale & Usage Guidelines:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Designed for high legibility, accessible focus management, and keyboard interaction.</li>
            <li>Built on unstyled Base UI primitive for WCAG AA compliance.</li>
            <li>Supports light and dark mode with zero layout shift.</li>
          </ul>
        </div>
      </Section>

      {/* 2. Preview */}
      <Section id="preview" title="Preview">
        <div className="min-h-[200px] p-8 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50/80 dark:bg-neutral-900/40 flex flex-col items-center justify-center text-center">
          <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 flex items-center justify-center font-mono text-sm mb-3">
            🎨
          </div>
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
            Component Preview Placeholder
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-md">
            Interactive canvas for <span className="font-medium text-neutral-700 dark:text-neutral-300">{item.title}</span> will render here once component implementation is completed.
          </p>
        </div>
      </Section>

      {/* 3. Installation */}
      <Section id="installation" title="Installation">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Install the required Base UI primitive and Creativ UI tokens in your project:
        </p>
        <div className="relative rounded-md bg-neutral-950 p-4 font-mono text-xs text-neutral-200 overflow-x-auto border border-neutral-800">
          <code>npm install @base-ui/react framer-motion class-variance-authority</code>
        </div>
      </Section>

      {/* 4. Usage */}
      <Section id="usage" title="Usage">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Import and compose the component within your React application:
        </p>
        <div className="relative rounded-md bg-neutral-950 p-4 font-mono text-xs text-neutral-200 overflow-x-auto border border-neutral-800">
          <pre>{`import { ${item.title} } from '@/components/ui/${item.slug}';

export default function Example() {
  return (
    <${item.title} variant="primary">
      ${item.title} Label
    </${item.title}>
  );
}`}</pre>
        </div>
      </Section>

      {/* 5. Variants */}
      <Section id="variants" title="Variants">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Available visual configurations and size options defined in design tokens:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {['Default', 'Secondary', 'Outline'].map((variant) => (
            <div
              key={variant}
              className="p-3 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-xs"
            >
              <span className="font-mono text-[10px] uppercase text-neutral-500 block mb-1">
                Variant
              </span>
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                {variant}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. Accessibility */}
      <Section id="accessibility" title="Accessibility">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Adheres to WAI-ARIA authoring practices and WCAG 2.1 AA contrast ratios.
        </p>
        <div className="overflow-x-auto border border-neutral-200 dark:border-neutral-800 rounded-md text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                <th className="p-3 font-mono font-semibold text-neutral-900 dark:text-neutral-100">Key / Attribute</th>
                <th className="p-3 font-mono font-semibold text-neutral-900 dark:text-neutral-100">Target</th>
                <th className="p-3 font-mono font-semibold text-neutral-900 dark:text-neutral-100">Behavior</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
              <tr>
                <td className="p-3 font-mono text-neutral-800 dark:text-neutral-200">Tab</td>
                <td className="p-3 text-neutral-600 dark:text-neutral-400">Focus</td>
                <td className="p-3 text-neutral-600 dark:text-neutral-400">Moves focus to element with visible focus indicator</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-neutral-800 dark:text-neutral-200">Space / Enter</td>
                <td className="p-3 text-neutral-600 dark:text-neutral-400">Action</td>
                <td className="p-3 text-neutral-600 dark:text-neutral-400">Triggers primary action or opens popover overlay</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-neutral-800 dark:text-neutral-200">aria-disabled</td>
                <td className="p-3 text-neutral-600 dark:text-neutral-400">State</td>
                <td className="p-3 text-neutral-600 dark:text-neutral-400">Communicates disabled state to assistive devices</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* 7. API */}
      <Section id="api" title="API">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Props and interface definitions for <code className="font-mono text-xs px-1 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">{item.title}Props</code>:
        </p>
        <div className="overflow-x-auto border border-neutral-200 dark:border-neutral-800 rounded-md text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                <th className="p-3 font-mono font-semibold text-neutral-900 dark:text-neutral-100">Prop</th>
                <th className="p-3 font-mono font-semibold text-neutral-900 dark:text-neutral-100">Type</th>
                <th className="p-3 font-mono font-semibold text-neutral-900 dark:text-neutral-100">Default</th>
                <th className="p-3 font-mono font-semibold text-neutral-900 dark:text-neutral-100">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
              <tr>
                <td className="p-3 font-mono font-semibold text-neutral-900 dark:text-neutral-100">variant</td>
                <td className="p-3 font-mono text-neutral-600 dark:text-neutral-400">'primary' | 'secondary' | 'ghost'</td>
                <td className="p-3 font-mono text-neutral-500">'primary'</td>
                <td className="p-3 text-neutral-600 dark:text-neutral-400">Visual style variant</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-semibold text-neutral-900 dark:text-neutral-100">size</td>
                <td className="p-3 font-mono text-neutral-600 dark:text-neutral-400">'sm' | 'md' | 'lg'</td>
                <td className="p-3 font-mono text-neutral-500">'md'</td>
                <td className="p-3 text-neutral-600 dark:text-neutral-400">Physical dimension scale</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-semibold text-neutral-900 dark:text-neutral-100">disabled</td>
                <td className="p-3 font-mono text-neutral-600 dark:text-neutral-400">boolean</td>
                <td className="p-3 font-mono text-neutral-500">false</td>
                <td className="p-3 text-neutral-600 dark:text-neutral-400">Disables user interaction</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* 8. Design Notes */}
      <Section id="design-notes" title="Design Notes">
        <div className="p-4 rounded-md bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">Figma & Token Specification:</p>
          <p>
            This component adheres strictly to the tokens defined in <code className="font-mono text-neutral-800 dark:text-neutral-200">DESIGN.md</code>. Radius token <code className="font-mono text-neutral-800 dark:text-neutral-200">rounded-pill</code> (100px) is applied for primary marketing actions, and <code className="font-mono text-neutral-800 dark:text-neutral-200">rounded-sm</code> (6px) for UI controls.
          </p>
        </div>
      </Section>

      {/* 9. Figma */}
      <Section id="figma" title="Figma">
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-neutral-900 text-white flex items-center justify-center font-mono text-xs font-bold">
              F
            </div>
            <div>
              <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                Matching Figma Component
              </p>
              <p className="text-[11px] text-neutral-500">
                Creativ UI Figma Design System Library
              </p>
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400">
            Figma Sync Connected
          </span>
        </div>
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
