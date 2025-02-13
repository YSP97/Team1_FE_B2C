  import Link from 'next/link';
  import NavLinks from './NavLinks';
  import MobileMenu from './MobileMenu';
  import Button from '../Button';
  import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-bg-primary h-[48px] md:h-[60px] px-6 md:px-8 flex justify-between items-center">
      {/* 로고 */}
      <h1
        aria-label="핏큘레이터 메인 페이지로 이동"
        className="h-[24px] md:h-[32px]">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="핏큘레이터 로고 이미지"
            width={232}
            height={24}
            className="h-full w-full md:h-[32px]"
          />
        </Link>
      </h1>

      {/* 데스크톱 네비게이션 */}
      <div className="hidden md:flex gap-3 lg:gap-10 items-center h-full">
        <nav className="text-gray-100 text-base">
          <NavLinks />
        </nav>
        <div className="h-full flex items-center">
          <Button
            rounded="rounded-3xl"
            textColor="text-navy-dark"
            bgColor="bg-primary"
          >
            다운로드
          </Button>
        </div>
      </div>

      {/* 모바일 햄버거 버튼 */}
      <div className="md:hidden flex items-center h-full">
        <MobileMenu />
      </div>
    </header>
  );
}
