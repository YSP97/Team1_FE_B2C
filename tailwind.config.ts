import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        primary: 'var(--color-primary)',
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        'primary-yellow': 'var(--color-primary-yellow)',
        'primary-green': 'var(--color-primary-green)',
        'primary-red': 'var(--color-primary-red)',
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'gray-50': 'var(--color-gray-50)',
        'gray-100': 'var(--color-gray-100)',
        'gray-200': 'var(--color-gray-200)',
        'gray-300': 'var(--color-gray-300)',
        'gray-400': 'var(--color-gray-400)',
        'gray-500': 'var(--color-gray-500)',
        'navy-dark': 'var(--color-navy-dark)',
      },
      fontSize: {
        xs: '0.8125rem', // 13px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        md: '1.125rem', // 18px
        lg: '1.5rem', // 24px
        xl: '2rem', // 32px
        '2xl': '2.5rem', // 40px
      },
      borderRadius: {
        xs: '0.375rem', // 6px
        sm: '0.5rem', // 8px
        base: '1rem', // 16px
        md: '2rem', // 32px
        lg: '2.5rem', // 40px
        xl: '3rem', // 48px
        '2xl': '3.5rem', // 56px
      },
    },
  },
  plugins: [],
} satisfies Config;
