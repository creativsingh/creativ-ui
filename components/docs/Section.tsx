import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-6 border-b border-neutral-100 dark:border-neutral-900 last:border-b-0 ${className}`}>
      <div className="group flex items-center gap-2 mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {title}
        </h2>
        <a
          href={`#${id}`}
          className="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-opacity p-1"
          aria-label={`Link to section: ${title}`}
        >
          #
        </a>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
