import { memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Logo from '../Logo';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import Button from '../Button';
import BackButton from './BackButton';

function Header() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isRegisterPage = router.pathname === '/pricing/register';

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile && window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, lastScrollY]);

  /* 신청하기 모바일 헤더 */
  if (isRegisterPage && isMobile) {
    return (
      <header className="relative flex h-12 items-center justify-center bg-bg-primary">
        <BackButton />
        <h1 className="absolute text-[18px] font-semibold text-white">
          신청하기
        </h1>
      </header>
    );
  }

  /* 일반 헤더 */
  return (
    <header
      className={`fixed left-0 top-0 z-30 w-full transform transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } flex h-[48px] items-center justify-between bg-bg-primary px-3 md:h-[60px] lg:px-8`}
    >
      <h1
        aria-label="핏큘레이터 메인 페이지로 이동"
        className="h-[24px] md:h-[32px]"
      >
        <Logo />
      </h1>

      <div className="hidden h-full items-center gap-3 md:flex lg:gap-10">
        <nav className="text-base text-gray-100">
          <NavLinks />
        </nav>
        <div className="flex h-full items-center">
          <Button type="primary">앱 다운로드</Button>
        </div>
      </div>

      <div className="flex h-full items-center md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}

export default memo(Header);
