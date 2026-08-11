import { Breadcrumbs } from './Breadcrumbs';
import { BreadcrumbItem } from '@/data/types';

interface PageHeaderProps {
  title: string;
  description: string;
  category: string;
  status?: string;
  breadcrumbs: BreadcrumbItem[];
}

export function PageHeader({
  title,
  description,
  category,
  status = 'coming-soon',
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <header className="pb-8 mb-8 border-b border-neutral-200 dark:border-neutral-800">
      <Breadcrumbs items={breadcrumbs} />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
            {category}
          </span>
          {status && (
            <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900/60 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Coming Soon
            </span>
          )}
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3">
        {title}
      </h1>

      <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
        {description}
      </p>
    </header>
  );
}
