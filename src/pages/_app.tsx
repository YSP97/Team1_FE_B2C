import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/pages/layout';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';


export default function App({ Component, pageProps }: AppProps) {
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
