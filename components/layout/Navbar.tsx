'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onMobileNavToggle?: () => void;
}

export function Navbar({ onMobileNavToggle }: NavbarProps) {
  const pathname = usePathname();

  const isDocs = pathname.startsWith('/getting-started') ||
                 pathname.startsWith('/foundations') ||
                 pathname.startsWith('/components');

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/85 dark:bg-[var(--canvas)]/85 backdrop-blur-md transition-colors">
      <Container size="wide" className="h-16 flex items-center justify-between gap-4">
        {/* Brand & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {onMobileNavToggle && (
            <button
              onClick={onMobileNavToggle}
              className="lg:hidden p-2 -ml-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-100"
              aria-label="Toggle mobile navigation menu"
              type="button"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}

          <Link
            href="/"
            className="flex items-center gap-2.5 font-semibold text-neutral-900 dark:text-neutral-100 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-100 rounded-md py-1"
          >
            <div className="w-6 h-6 rounded bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 flex items-center justify-center font-mono text-xs font-bold transition-transform group-hover:scale-105">
              C
            </div>
            <span className="tracking-tight text-base font-semibold">Creativ UI</span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-medium">
              v0.1
            </span>
          </Link>
        </div>

        {/* Central Navigation Links */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1 text-sm font-medium">
          <Link
            href="/getting-started/introduction"
            className={`px-3 py-1.5 rounded-full transition-colors ${
              pathname.startsWith('/getting-started')
                ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
            }`}
          >
            Docs
          </Link>
          <Link
            href="/foundations/colors"
            className={`px-3 py-1.5 rounded-full transition-colors ${
              pathname.startsWith('/foundations')
                ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
            }`}
          >
            Foundations
          </Link>
          <Link
            href="/components/button"
            className={`px-3 py-1.5 rounded-full transition-colors ${
              pathname.startsWith('/components')
                ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
            }`}
          >
            Components
          </Link>
        </nav>

        {/* Utility Actions */}
        <div className="flex items-center gap-2">
          {/* Quick Nav / Search Placeholder */}
          <Link
            href="/getting-started/introduction"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded-md bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search docs...</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded">
              ⌘K
            </kbd>
          </Link>

          <ThemeToggle />

          <Link
            href="/getting-started/introduction"
            className="h-8 px-3 rounded-md bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium text-xs flex items-center justify-center transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-100"
          >
            Documentation
          </Link>
        </div>
      </Container>
    </header>
  );
}
