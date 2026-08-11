'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getNavSections } from '@/lib/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const sections = getNavSections();

  // Close drawer on path change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Lock body scroll when drawer open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Content */}
      <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white dark:bg-[var(--canvas)] border-r border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200 dark:border-neutral-800">
            <Link href="/" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-100">
              <div className="w-6 h-6 rounded bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 flex items-center justify-center font-mono text-xs font-bold">
                C
              </div>
              <span>Creativ UI</span>
            </Link>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-100"
              aria-label="Close navigation menu"
              type="button"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.id} className="space-y-2">
                <h3 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {section.title}
                </h3>
                <ul className="space-y-1 pl-2 border-l border-neutral-200 dark:border-neutral-800">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          className={`flex items-center justify-between py-2 px-2.5 text-sm font-medium rounded-md transition-colors ${
                            isActive
                              ? 'bg-neutral-950 text-white dark:bg-neutral-100 dark:text-neutral-950 font-semibold'
                              : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                          }`}
                        >
                          <span>{item.title}</span>
                          {item.status === 'coming-soon' && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                              Soon
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500">
          <p>© Creativ UI Design System</p>
        </div>
      </div>
    </div>
  );
}
