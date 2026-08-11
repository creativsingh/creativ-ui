import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-[#0a0a0b] text-neutral-900 dark:text-neutral-100 overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative py-20 lg:py-32 border-b border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden hero-mesh-gradient">
          <Container size="default" className="relative z-10 text-center space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open-Source Design System Ecosystem</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-950 dark:text-white max-w-4xl mx-auto leading-[1.08] text-balance">
              Build interfaces with confidence.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
              A modern, open-source design system featuring accessible React components, matching Figma assets, and comprehensive documentation for designers and developers.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/getting-started/introduction"
                className="h-12 px-7 rounded-full bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium text-base inline-flex items-center justify-center transition-all hover:opacity-90 shadow-lg shadow-neutral-950/10 dark:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-100"
              >
                Get Started →
              </Link>
              <Link
                href="/components/button"
                className="h-12 px-7 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-neutral-100 font-medium text-base inline-flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-100"
              >
                Browse Components
              </Link>
            </div>
          </Container>
        </section>

        {/* MISSION & POSITIONING SECTION */}
        <section className="py-16 lg:py-24 bg-neutral-50/50 dark:bg-neutral-950/40 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <Container size="default">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                Our Mission & Philosophy
              </h2>
              <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 leading-snug">
                Bridging the gap between design and engineering.
              </p>
              <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed pt-2">
                Unlike traditional UI libraries that only provide raw components, Creativ UI explains the thinking behind every design decision, accessibility pattern, and implementation detail—making it a complete learning resource and production design system ecosystem.
              </p>
            </div>

            {/* Product Definition Quote Box */}
            <div className="mt-12 p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 max-w-4xl mx-auto shadow-xs">
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-3">
                Product Definition
              </div>
              <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed">
                "Creativ UI is a comprehensive design system platform that combines a React component library, Figma design system, design tokens, accessibility best practices, and educational documentation into a single ecosystem."
              </p>
            </div>
          </Container>
        </section>

        {/* VALUE PROPOSITION GRID */}
        <section className="py-16 lg:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <Container size="default">
            <div className="text-center space-y-3 mb-12">
              <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                Value Proposition
              </h2>
              <p className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Everything product teams need in one ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Item 1 */}
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs space-y-3">
                <div className="text-2xl">🎨</div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  Figma Design System
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Complete 1:1 Figma component library with matching variants, states, and design token variables.
                </p>
              </div>

              {/* Item 2 */}
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs space-y-3">
                <div className="text-2xl">⚛️</div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  Production-Ready React
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Strictly typed React components built with Base UI and Tailwind CSS for seamless integration.
                </p>
              </div>

              {/* Item 3 */}
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs space-y-3">
                <div className="text-2xl">♿</div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  Accessibility-First
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Full WCAG AA compliance, screen reader attributes, keyboard navigation, and visible focus management.
                </p>
              </div>

              {/* Item 4 */}
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs space-y-3">
                <div className="text-2xl">📚</div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  Educational Documentation
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  In-depth guides explaining implementation patterns, API specifications, and architectural tradeoffs.
                </p>
              </div>

              {/* Item 5 */}
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs space-y-3">
                <div className="text-2xl">🧩</div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  Design Tokens & Motion
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Systematic color, Geist typography scale, spatial grid, and Framer Motion interaction guidelines.
                </p>
              </div>

              {/* Item 6 */}
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs space-y-3">
                <div className="text-2xl">💡</div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  Design Rationale
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Clear explanations of why components are built the way they are, helping teams learn design engineering.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CATEGORIES SECTION */}
        <section className="py-16 lg:py-24 bg-neutral-50/50 dark:bg-neutral-950/40">
          <Container size="default">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">
                  Ecosystem Index
                </h2>
                <p className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                  Explore the design system.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category 1: Getting Started */}
              <Link
                href="/getting-started/introduction"
                className="group p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-medium">
                    Category 01
                  </span>
                  <span className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
                    →
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    Getting Started
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Learn the architectural workflow, Tailwind configuration, and ecosystem setup.
                  </p>
                </div>
              </Link>

              {/* Category 2: Foundations */}
              <Link
                href="/foundations/colors"
                className="group p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-medium">
                    Category 02
                  </span>
                  <span className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
                    →
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    Foundations
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Design tokens, Geist typography, spatial grids, color palettes, and motion guidelines.
                  </p>
                </div>
              </Link>

              {/* Category 3: Components */}
              <Link
                href="/components/button"
                className="group p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-medium">
                    Category 03
                  </span>
                  <span className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
                    →
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    React Components
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Button, Input, Dialog, Card, Badge, and future production-ready UI primitives.
                  </p>
                </div>
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
