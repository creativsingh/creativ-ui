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
    'Creativ UI is an open-source design system that combines production-ready React components with a complete Figma design library, enabling designers and developers to build consistent, accessible, and scalable products from the same source of truth.',
  keywords: [
    'Creativ UI',
    'Design System',
    'React Components',
    'Figma Library',
    'Base UI',
    'Tailwind CSS',
    'TypeScript',
    'Accessibility',
    'Design Code Parity',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('creativ-ui-theme');
                  var theme = stored || 'dark';
                  if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
