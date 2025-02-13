import '@/styles/globals.css';
import localFont from 'next/font/local';
import type { AppProps } from 'next/app';
import Header from '@/components/Header/Header';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${pretendard.variable} font-pretendard`}>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
