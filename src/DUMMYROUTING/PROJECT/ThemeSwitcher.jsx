// src/components/ThemeSwitcher.jsx
import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react'; // optional icons (install: npm i lucide-react)

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    // Default theme from localStorage or system preference
    return localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
    </>
  );
};

export default ThemeSwitcher;
