import { useCallback, useState } from 'react';
import { MoonIcon } from './moon-icon';
import { SunIcon } from './sun-icon';

export function ThemeToggle() {
  const [dark, setDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  const toggle = useCallback(() => {
    setDark((d) => {
      const next = !d;
      document.documentElement.setAttribute(
        'data-theme',
        next ? 'dark' : 'light',
      );
      return next;
    });
  }, []);

  return (
    <button
      className="header__theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
