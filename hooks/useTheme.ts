'use client';

import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = (localStorage.getItem('creativ-ui-theme') as Theme) || 'dark';
    setTheme(storedTheme);
    applyTheme(storedTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    if (
      newTheme === 'dark' ||
      (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('creativ-ui-theme', newTheme);
    applyTheme(newTheme);
  };

  return { theme, updateTheme, mounted };
}
