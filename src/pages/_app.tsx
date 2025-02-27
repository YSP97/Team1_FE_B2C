import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/pages/layout';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

interface DataLayerEvent {
  event: string;
  page?: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  depth?: number;
  section?: string;
  [key: string]: string | number | boolean | object | undefined; // 추가 속성 허용
}

const GTM_ID = 'GTM-NK887F89'; // 여기에 실제 GTM ID 입력

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // GTM 초기화
    TagManager.initialize({ gtmId: GTM_ID });

    // 페이지 변경 감지하여 GTM에 전송
    const handleRouteChange = (url: string) => {
      window.dataLayer.push({ event: 'pageview', page: url });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  return (
    <>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NK887F89');`,
        }}
      />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
