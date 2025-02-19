import localFont from 'next/font/local';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`${pretendard.variable} bg-bg-primary font-pretendard`}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
