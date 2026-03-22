import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('asvan-theme');
    if (saved === 'light') {
      setIsLight(true);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('asvan-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('asvan-theme', 'dark');
    }
  };

  return (
    <button
      className={`theme-toggle${isLight ? ' light' : ''}`}
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Dark mode' : 'Light mode'}
    >
      <span className="theme-toggle-thumb">
        {isLight ? '☀️' : '🌙'}
      </span>
    </button>
  );
}
