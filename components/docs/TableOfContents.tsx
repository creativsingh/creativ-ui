'use client';

import { useEffect, useState } from 'react';
import { DocPageSection } from '@/data/types';

interface TableOfContentsProps {
  sections: DocPageSection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  if (!sections || sections.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="hidden xl:block w-56 flex-shrink-0 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto pl-6 border-l border-neutral-200/80 dark:border-neutral-800/80"
    >
      <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
        On This Page
      </p>
      <ul className="space-y-2 text-xs">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block py-1 transition-colors leading-relaxed ${
                  isActive
                    ? 'text-neutral-900 dark:text-neutral-100 font-semibold translate-x-0.5'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                }`}
              >
                {section.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
