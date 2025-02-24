import localFont from 'next/font/local';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${pretendard.variable} bg-bg-primary font-pretendard`}>
      <Header />
      <main className="mt-[3rem] md:mt-[3.75rem]">{children}</main>
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Layout;
