'use client';

import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, updateTheme, mounted } = useTheme();

  if (!mounted) {
    return <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 animate-pulse" />;
  }

  // Determine current active dark mode state from document root or theme state
  const isDark =
    typeof document !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : theme === 'dark';

  return (
    <button
      onClick={() => updateTheme(isDark ? 'light' : 'dark')}
      className="inline-flex items-center justify-center p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-100"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      type="button"
    >
      {isDark ? (
        // Sun Icon (for switching to light mode)
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
        </svg>
      ) : (
        // Moon Icon (for switching to dark mode)
        <svg
          className="w-4 h-4 text-neutral-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
}
