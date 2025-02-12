import localFont from 'next/font/local';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${pretendard.className} font-pretendard`}>
      <Component {...pageProps} />
    </main>
  );
}
