'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';

export default function HomePage() {
  // Problem vs Solution Switcher: 'solution' | 'problem'
  const [workflowTab, setWorkflowTab] = useState<'solution' | 'problem'>('solution');

  // Role Selector: 'designers' | 'developers' | 'teams'
  const [roleTab, setRoleTab] = useState<'designers' | 'developers' | 'teams'>('designers');

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
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION WITH FULL VIEWPORT MESH GRADIENT */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center border-b border-neutral-200/80 dark:border-neutral-800/80 hero-mesh-gradient py-16 lg:py-24">
          {/* Atmospheric Glowing Aura Spots */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl pointer-events-none rounded-full" />

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

              {/* UNIFIED TECH STACK LOGOS STRIP */}
              <div className="pt-8 flex flex-col items-center justify-center gap-3.5 max-w-3xl mx-auto border-t border-neutral-200/50 dark:border-neutral-800/50">
                <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs text-neutral-600 dark:text-neutral-400">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium mr-1">
                    Built & Designed with
                  </span>

                  {/* React */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800 font-medium text-neutral-900 dark:text-neutral-100 shadow-2xs transition-transform hover:scale-105">
                    <svg className="w-3.5 h-3.5 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                      <ellipse cx="12" cy="12" rx="9" ry="4.5" />
                      <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(60 12 12)" />
                      <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(120 12 12)" />
                    </svg>
                    React
                  </span>

                  {/* Tailwind CSS */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800 font-medium text-neutral-900 dark:text-neutral-100 shadow-2xs transition-transform hover:scale-105">
                    <svg className="w-3.5 h-3.5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
                    </svg>
                    Tailwind
                  </span>

                  {/* Base UI Official Vector Logo */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800 font-medium text-neutral-900 dark:text-neutral-100 shadow-2xs transition-transform hover:scale-105">
                    <svg className="w-3 h-3.5 text-neutral-900 dark:text-neutral-100" viewBox="0 0 17 24" fill="currentColor">
                      <path d="M9.5001 7.01537C9.2245 6.99837 9 7.22385 9 7.49999V23C13.4183 23 17 19.4183 17 15C17 10.7497 13.6854 7.27351 9.5001 7.01537Z" />
                      <path d="M8 9.8V12V23C3.58172 23 0 19.0601 0 14.2V12V1C4.41828 1 8 4.93989 8 9.8Z" />
                    </svg>
                    Base UI
                  </span>

                  {/* Figma Official Multi-Color Logo */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800 font-medium text-neutral-900 dark:text-neutral-100 shadow-2xs transition-transform hover:scale-105">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 38 57" fill="none">
                      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE" />
                      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
                      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
                    </svg>
                    Figma
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>



        {/* 3. VALUE PROPOSITION BY ROLE (INTERACTIVE SEGMENTED TABS) */}
        <section className="py-16 lg:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <Container size="default" className="space-y-10">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                Value Proposition
              </h2>
              <p className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Tailored for every role in your product team.
              </p>

              {/* Role Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <button
                  onClick={() => setRoleTab('designers')}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${roleTab === 'designers'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                    }`}
                >
                  🎨 For Designers
                </button>
                <button
                  onClick={() => setRoleTab('developers')}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${roleTab === 'developers'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                    }`}
                >
                  ⚛️ For Developers
                </button>
                <button
                  onClick={() => setRoleTab('teams')}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${roleTab === 'teams'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                    }`}
                >
                  🤝 For Teams
                </button>
              </div>
            </div>

            {/* Role Card Content */}
            <div className="max-w-4xl mx-auto">
              {roleTab === 'designers' && (
                <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg">
                      🎨
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                        Designers Experience
                      </h3>
                      <p className="text-xs text-neutral-500">Design complete interfaces without rebuilding UI primitives from scratch.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/60 dark:border-neutral-800/60">
                      <span className="font-semibold text-neutral-900 dark:text-neutral-100 block mb-1">Complete Figma Library</span>
                      <p className="text-neutral-500">Production-ready design patterns matching every state and variant in code.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/60 dark:border-neutral-800/60">
                      <span className="font-semibold text-neutral-900 dark:text-neutral-100 block mb-1">Shared Tokens</span>
                      <p className="text-neutral-500">Design tokens for spatial grids, typography, and color directly synced with code.</p>
                    </div>
                  </div>
                </div>
              )}

              {roleTab === 'developers' && (
                <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
                      ⚛️
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                        Developers Experience
                      </h3>
                      <p className="text-xs text-neutral-500">Accessible React components with headless flexibility and zero runtime overhead.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/60 dark:border-neutral-800/60">
                      <span className="font-semibold text-neutral-900 dark:text-neutral-100 block mb-1">Base UI Primitives</span>
                      <p className="text-neutral-500">Unstyled primitives providing keyboard focus and ARIA attributes out of the box.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/60 dark:border-neutral-800/60">
                      <span className="font-semibold text-neutral-900 dark:text-neutral-100 block mb-1">Tailwind CSS & Types</span>
                      <p className="text-neutral-500">Utility class styling with predictable TypeScript auto-completion.</p>
                    </div>
                  </div>
                </div>
              )}

              {roleTab === 'teams' && (
                <div className="p-8 sm:p-10 rounded-2xl bg-neutral-950 text-white dark:bg-neutral-900 border border-neutral-800 shadow-2xl space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-lg border border-emerald-800">
                      🤝
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Team Alignment
                      </h3>
                      <p className="text-xs text-neutral-400">Eliminating duplicated work and inconsistent interfaces across products.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
                    <div className="p-4 rounded-xl bg-neutral-900 dark:bg-neutral-800/80 border border-neutral-800 text-emerald-400 font-mono font-semibold">
                      ✓ One shared design system
                    </div>
                    <div className="p-4 rounded-xl bg-neutral-900 dark:bg-neutral-800/80 border border-neutral-800 text-emerald-400 font-mono font-semibold">
                      ✓ One visual language
                    </div>
                    <div className="p-4 rounded-xl bg-neutral-900 dark:bg-neutral-800/80 border border-neutral-800 text-emerald-400 font-mono font-semibold">
                      ✓ One source of truth
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* 4. CORE PRINCIPLES INTERACTIVE EXPLORER */}
        <section className="py-16 lg:py-24 bg-neutral-50/50 dark:bg-neutral-950/40 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <Container size="default" className="space-y-10">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                Core Principles
              </h2>
              <p className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                The five pillars guiding Creativ UI.
              </p>
            </div>

            {/* Interactive Principle Selector */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
              {/* Number List */}
              <div className="space-y-2 lg:col-span-1">
                {principles.map((p, index) => (
                  <button
                    key={p.num}
                    onClick={() => setActivePrinciple(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between border ${activePrinciple === index
                      ? 'bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 shadow-sm font-semibold'
                      : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/40'
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

              {/* Active Detail Box */}
              <div className="lg:col-span-2 p-8 sm:p-10 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3">
                  <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest">
                    Principle {principles[activePrinciple].num}
                  </span>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 font-medium">
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


      </main>

      <Footer />
    </div>
  );
}
