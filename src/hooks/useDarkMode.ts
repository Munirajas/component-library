/* ===================================
   DARK MODE HOOK FOR TAILWIND CSS
   =================================== */
'use client'
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check if user has a preference saved
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) {
        return JSON.parse(saved);
      }
      // Check system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  const toggle = () => setIsDark(!isDark);
  const enable = () => setIsDark(true);
  const disable = () => setIsDark(false);

  return { isDark, toggle, enable, disable };
};
