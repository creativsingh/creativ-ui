'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { Container } from '@/components/layout/Container';

interface DocLayoutProps {
  children: React.ReactNode;
}

export function DocLayout({ children }: DocLayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[var(--canvas)] text-neutral-900 dark:text-neutral-100">
      {/* Sticky Top Navbar */}
      <Navbar onMobileNavToggle={() => setMobileNavOpen(true)} />

      {/* Mobile Drawer */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      {/* Main Documentation Shell */}
      <div className="flex-1 w-full">
        <Container size="wide" className="flex gap-8">
          {/* Desktop Sticky Sidebar */}
          <Sidebar />

          {/* Main Content Viewport */}
          <div className="flex-1 min-w-0 py-4 lg:py-8">{children}</div>
        </Container>
      </div>
    </div>
  );
}
