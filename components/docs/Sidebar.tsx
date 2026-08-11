'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getNavSections } from '@/lib/navigation';

export function Sidebar() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const sections = getNavSections();

  return (
    <aside
      aria-label="Documentation sidebar"
      className="hidden lg:block w-64 flex-shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-6 pr-4 border-r border-neutral-200/80 dark:border-neutral-800/80 custom-scrollbar"
    >
      {/* Quick Search Filter */}
      <div className="mb-6 px-1">
        <div className="relative">
          <input
            type="text"
            placeholder="Filter docs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-8 pl-8 pr-3 text-xs bg-neutral-100 dark:bg-neutral-900 border border-transparent dark:border-neutral-800 rounded-md text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
          />
          <svg
            className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-neutral-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Navigation Tree */}
      <div className="space-y-6">
        {sections.map((section) => {
          const filteredItems = section.items.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (searchQuery && filteredItems.length === 0) return null;

          return (
            <div key={section.id} className="space-y-2">
              <h3 className="px-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {section.title}
              </h3>
              <ul className="space-y-0.5 border-l border-neutral-200 dark:border-neutral-800 ml-2 pl-2">
                {filteredItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className={`group relative flex items-center justify-between py-1.5 px-2.5 text-xs font-medium rounded-md transition-all ${
                          isActive
                            ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 font-semibold shadow-xs'
                            : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/50'
                        }`}
                      >
                        <span className="truncate">{item.title}</span>
                        {item.status === 'coming-soon' && (
                          <span
                            className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                              isActive
                                ? 'bg-neutral-800 text-neutral-300 dark:bg-neutral-200 dark:text-neutral-700'
                                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400'
                            }`}
                          >
                            Soon
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
