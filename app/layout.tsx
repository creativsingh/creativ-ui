import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Creativ UI — Open-Source Design System & Component Library',
    template: '%s | Creativ UI',
  },
  description:
    'Creativ UI is a modern design system built with Base UI, React, TypeScript, and Tailwind CSS. It provides accessible, production-ready components with matching Figma designs, comprehensive documentation, and implementation guides—bridging the gap between design and engineering.',
  keywords: [
    'Design System',
    'React',
    'Base UI',
    'Tailwind CSS',
    'TypeScript',
    'Figma',
    'Accessibility',
    'Design Engineering',
    'UI Components',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0a0a0b] text-neutral-900 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}
