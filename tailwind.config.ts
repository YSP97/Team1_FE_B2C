import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        primary: 'rgba(38, 203, 254, 1)',
        white: 'rgba(255, 255, 255, 1)',
        black: 'rgba(0, 0, 0, 1)',
        'primary-yellow': 'rgba(255, 199, 0, 1)',
        'primary-green': 'rgba(109, 190, 119, 1)',
        'primary-red': 'rgba(244, 67, 54, 1)',
        'bg-primary': 'rgba(36, 36, 36, 1)',
        'bg-secondary': 'rgba(46, 46, 46, 1)',
        'gray-50': 'rgba(255, 255, 255, 0.05)',
        'gray-100': 'rgba(176, 176, 176, 1)',
        'gray-200': 'rgba(108, 108, 108, 1)',
        'gray-300': 'rgba(100, 100, 100, 1)',
        'gray-400': 'rgba(66, 66, 66, 1)',
        'gray-500': 'rgba(52, 52, 52, 1)',
        'navy-dark': 'rgba(0, 60, 90, 1)',
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
