'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme ?? 'dark';

  const handleToggle = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    console.log('현재 테마:', theme);
  }, [theme]);

  if (!mounted) return null; // 클라이언트에서만 렌더링

  return (
    <button
      type="button"
      className="fixed bottom-4 right-4 z-10 flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-gray-50 text-sm text-gray-100 backdrop-blur-sm"
      onClick={handleToggle}
    >
      {currentTheme === 'dark' ? (
        <>
          <span>☀️</span>
          <span>Light</span>
        </>
      ) : (
        <>
          <span>🌙</span>
          <span>Dark</span>
        </>
      )}
    </button>
  );
}

export default ThemeToggle;
