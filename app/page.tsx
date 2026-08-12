'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';

export default function HomePage() {
  // Role Selector: 'designers' | 'developers'
  const [roleTab, setRoleTab] = useState<'designers' | 'developers'>('designers');

  // Active Core Principle
  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  const principles = [
    {
      num: '01',
      title: 'Accessibility First',
      tagline: 'WCAG AA & WAI-ARIA Standards',
      desc: 'Uncompromising accessibility built into unstyled Base UI primitives. Built-in keyboard focus management, ARIA announcements, and high-contrast color systems.',
    },
    {
      num: '02',
      title: 'Design–Code Parity',
      tagline: '1:1 Figma & React Synchronization',
      desc: 'Figma assets and React code built from the exact same tokens, spacing, typography, and state variants so design and production never drift apart.',
    },
    {
      num: '03',
      title: 'Composable Architecture',
      tagline: 'Unstyled Primitives + Tailwind CSS',
      desc: 'Flexible slot APIs allowing engineers to customize rendering without breaking keyboard behaviors or accessibility contracts.',
    },
    {
      num: '04',
      title: 'Consistency at Scale',
      tagline: 'Systematic Spatial & Typographic Grid',
      desc: '4px baseline spatial rhythm, Geist font hierarchy, and tokenized CSS variables ensuring zero arbitrary layout values.',
    },
    {
      num: '05',
      title: 'Developer & Designer DX',
      tagline: 'Frictionless Dual Workflow',
      desc: 'Intuitive TypeScript auto-completion for engineers, drag-and-drop auto-layout components for designers in Figma.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900">
      {/* Root level sticky Navbar (persists throughout full page scroll) */}
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION WITH BACKGROUND MESH GRADIENT EXTENDING UP BEHIND TRANSPARENT NAVBAR */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center hero-mesh-gradient -mt-16 pt-16 py-16 lg:py-24 overflow-hidden">
          {/* Atmospheric Glowing Aura Spots - Softened & Subtle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl pointer-events-none rounded-full" />

          {/* Bottom Gradient Fade Overlay - Merges hero gradient smoothly into background */}
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-48 bg-gradient-to-b from-transparent via-white/60 to-white dark:via-[#09090b]/75 dark:to-[#09090b] z-10" />

          <Container size="default" className="relative z-10 space-y-12">
            {/* Top Text Cluster */}
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-950 dark:text-white leading-[1.05] text-balance">
                Design in Figma. <br className="hidden sm:inline" />
                Build in React.
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal text-balance">
                An open-source design system combining production-ready React components with a complete Figma design library—built from one shared source of truth.
              </p>

              {/* CTAs - Equal Width/Length for Primary & Secondary */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/getting-started/introduction"
                  className="w-full sm:w-52 h-12 px-6 rounded-full bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium text-sm inline-flex items-center justify-center transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-neutral-950/10 dark:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-100"
                >
                  Get Started →
                </Link>
                <Link
                  href="/components/button"
                  className="w-full sm:w-52 h-12 px-6 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md text-neutral-900 dark:text-neutral-100 font-medium text-sm inline-flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-100"
                >
                  Browse Components
                </Link>
              </div>

              {/* UNIFIED TECH STACK LOGOS STRIP - HEADING ON TOP & ICONS ONLY */}
              <div className="pt-8 flex flex-col items-center justify-center gap-3 max-w-3xl mx-auto border-t border-neutral-200/50 dark:border-neutral-800/50">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                  Built & Designed with
                </span>

                <div className="flex items-center justify-center gap-3">
                  {/* React */}
                  <div
                    title="React"
                    className="p-2.5 rounded-xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200/70 dark:border-neutral-800/70 shadow-2xs transition-all hover:scale-110 hover:border-neutral-300 dark:hover:border-neutral-700 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                      <ellipse cx="12" cy="12" rx="9" ry="4.5" />
                      <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(60 12 12)" />
                      <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(120 12 12)" />
                    </svg>
                  </div>

                  {/* Tailwind CSS */}
                  <div
                    title="Tailwind CSS"
                    className="p-2.5 rounded-xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200/70 dark:border-neutral-800/70 shadow-2xs transition-all hover:scale-110 hover:border-neutral-300 dark:hover:border-neutral-700 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
                    </svg>
                  </div>

                  {/* Base UI Official Vector Logo */}
                  <div
                    title="Base UI"
                    className="p-2.5 rounded-xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200/70 dark:border-neutral-800/70 shadow-2xs transition-all hover:scale-110 hover:border-neutral-300 dark:hover:border-neutral-700 flex items-center justify-center"
                  >
                    <svg className="w-3.5 h-5 text-neutral-900 dark:text-neutral-100" viewBox="0 0 17 24" fill="currentColor">
                      <path d="M9.5001 7.01537C9.2245 6.99837 9 7.22385 9 7.49999V23C13.4183 23 17 19.4183 17 15C17 10.7497 13.6854 7.27351 9.5001 7.01537Z" />
                      <path d="M8 9.8V12V23C3.58172 23 0 19.0601 0 14.2V12V1C4.41828 1 8 4.93989 8 9.8Z" />
                    </svg>
                  </div>

                  {/* Figma Official Multi-Color Logo */}
                  <div
                    title="Figma"
                    className="p-2.5 rounded-xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200/70 dark:border-neutral-800/70 shadow-2xs transition-all hover:scale-110 hover:border-neutral-300 dark:hover:border-neutral-700 flex items-center justify-center"
                  >
                    <svg className="w-3.5 h-5" viewBox="0 0 38 57" fill="none">
                      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE" />
                      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
                      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 2. VALUE PROPOSITION BY ROLE */}
        <section className="py-16 lg:py-24 bg-white dark:bg-[#09090b]">
          <Container size="default" className="space-y-10">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Tailored for every role in your product team.
              </h2>

              {/* Dual Role Segmented Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <button
                  onClick={() => setRoleTab('designers')}
                  className={`px-6 py-2.5 rounded-full text-xs font-semibold transition-all ${roleTab === 'designers'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                    }`}
                >
                  🎨 For Designers
                </button>
                <button
                  onClick={() => setRoleTab('developers')}
                  className={`px-6 py-2.5 rounded-full text-xs font-semibold transition-all ${roleTab === 'developers'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                    }`}
                >
                  ⚛️ For Developers
                </button>
              </div>
            </div>

            {/* MINIMAL ROLE CARDS (PARAGRAPH + BUTTON ONLY) */}
            <div className="max-w-3xl mx-auto">
              {roleTab === 'designers' && (
                <div className=" flex flex-col gap-4">

                  <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal max-w-xl mx-auto text-balance">
                    Every React component ships with its matching Figma component, giving designers and developers one shared design system from idea to production.
                  </p>
                  <div className="pt-2 flex items-center justify-center">
                    <a
                      href="https://figma.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium text-xs transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-md focus-visible:outline-none"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 38 57" fill="none">
                        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE" />
                        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
                        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
                      </svg>
                      Open Figma Library ↗
                    </a>
                  </div>
                </div>
              )}

              {roleTab === 'developers' && (
                <div className="flex flex-col gap-4">

                  <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal max-w-xl mx-auto text-balance">
                    Unstyled Base UI primitives styled with Tailwind CSS—delivering built-in WAI-ARIA accessibility, flexible component slot props, and zero runtime overhead.
                  </p>
                  <div className="pt-2 flex items-center justify-center">
                    <Link
                      href="/components/button"
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium text-xs transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-md focus-visible:outline-none"
                    >
                      Browse Components →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* 3. CORE PRINCIPLES INTERACTIVE EXPLORER WITH SECONDARY MESH GRADIENT */}
        <div className="relative secondary-mesh-gradient">
          {/* Top Gradient Fade Overlay - Starts from black/canvas and merges into subtle gradient */}
          <div className="pointer-events-none absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-white via-white/70 to-transparent dark:from-[#09090b] dark:via-[#09090b]/75 dark:to-transparent z-10" />

          {/* Bottom Gradient Fade Overlay - Merges gradient back into black/canvas tone */}
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-36 bg-gradient-to-b from-transparent via-white/70 to-white dark:via-[#09090b]/75 dark:to-[#09090b] z-10" />

          <section className="relative z-10 py-16 lg:py-24">
            <Container size="default" className="space-y-10">
              <div className="text-center space-y-3 max-w-2xl mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                  The five pillars guiding Creativ UI.
                </h2>
              </div>

              {/* Interactive Principle Selector with Glassmorphism */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
                {/* Number List Buttons */}
                <div className="space-y-2 lg:col-span-1">
                  {principles.map((p, index) => (
                    <button
                      key={p.num}
                      onClick={() => setActivePrinciple(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between border ${activePrinciple === index
                        ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-neutral-300 dark:border-neutral-700 shadow-md font-semibold'
                        : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-white/40 dark:hover:bg-neutral-900/40 backdrop-blur-sm'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-neutral-400">{p.num}</span>
                        <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{p.title}</span>
                      </div>
                      {activePrinciple === index && <span className="text-xs text-emerald-500 font-bold">→</span>}
                    </button>
                  ))}
                </div>

                {/* Active Detail Box with Translucent Backdrop Blur */}
                <div className="lg:col-span-2 p-8 sm:p-10 rounded-2xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/70 shadow-2xl shadow-neutral-950/5 dark:shadow-black/20 space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-200/50 dark:border-neutral-800/50 pb-3">
                    <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest">
                      Principle {principles[activePrinciple].num}
                    </span>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-50/80 dark:bg-emerald-950/60 backdrop-blur-md font-medium">
                      {principles[activePrinciple].tagline}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                    {principles[activePrinciple].title}
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {principles[activePrinciple].desc}
                  </p>
                </div>
              </div>
            </Container>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
