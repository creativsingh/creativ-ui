import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 py-12 lg:py-16 text-sm text-neutral-600 dark:text-neutral-400">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand & Core Tagline */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-100">
              <div className="w-5 h-5 rounded bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 flex items-center justify-center font-mono text-[10px] font-bold">
                C
              </div>
              <span className="text-sm tracking-tight font-semibold">Creativ UI</span>
            </div>
            <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
              An open-source design system combining production-ready React components with a matching Figma library. One shared design system. One visual language. One source of truth.
            </p>
          </div>

          {/* Column 2: Getting Started */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-900 dark:text-neutral-100 font-semibold mb-3">
              Getting Started
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/getting-started/introduction" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Introduction
                </Link>
              </li>
              <li>
                <Link href="/getting-started/installation" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Installation
                </Link>
              </li>
              <li>
                <Link href="/getting-started/accessibility" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Foundations */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-900 dark:text-neutral-100 font-semibold mb-3">
              Foundations
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/foundations/colors" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Color Tokens
                </Link>
              </li>
              <li>
                <Link href="/foundations/typography" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Typography Scale
                </Link>
              </li>
              <li>
                <Link href="/foundations/spacing" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Spatial Grid
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Components */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-900 dark:text-neutral-100 font-semibold mb-3">
              Components
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/components/accordion" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Accordion
                </Link>
              </li>
              <li>
                <Link href="/components/alert-dialog" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Alert Dialog
                </Link>
              </li>
              <li>
                <Link href="/components/button" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Button
                </Link>
              </li>
              <li>
                <Link href="/components/dialog" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Dialog
                </Link>
              </li>
              <li>
                <Link href="/components/select" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Select
                </Link>
              </li>
              <li>
                <Link href="/components/tabs" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Tabs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200/60 dark:border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Creativ UI. Built on Base UI & Tailwind CSS.</p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 font-mono">
              <span>Created by</span>
              <a
                href="https://github.com/creativsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-neutral-900 dark:text-neutral-100 hover:underline transition-all"
              >
                Creativsingh
              </a>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
