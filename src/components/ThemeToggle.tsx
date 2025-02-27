'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // 클라이언트에서만 렌더링
  }, []);

  // 클라이언트에서만 theme 값 처리
  const currentTheme = mounted && theme ? theme : 'dark';

  const handleToggle = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {}, [theme]);

  if (!mounted) return null; // mounted가 false일 때는 렌더링 안 함

  return (
    <button
      type="button"
      className="fixed bottom-4 right-4 z-10 flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-gray-50 text-sm text-gray-100 backdrop-blur-sm"
      onClick={handleToggle}
    >
      {currentTheme === 'dark' ? (
        <>
          <span className="text-lg">☀️</span>
          <span className="text-xs">Light</span>
        </>
      ) : (
        <>
          <span className="text-lg">🌙</span>
          <span className="text-xs">Dark</span>
        </>
      )}
    </button>
  );
}

export default ThemeToggle;
