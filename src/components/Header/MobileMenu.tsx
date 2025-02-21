'use client';
import { useCallback, useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import Button from '../Button';
import SVGIcon from '../SVGIcon';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 메뉴 (열기/닫기) 이벤트 핸들러
  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(()=>{
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  },[isOpen])

  return (
    <>
     {isOpen && <div className="fixed h-screen bg-black z-[99] opacity-70 inset-0"/>}
      <div className="flex gap-3">
        <Button
          type="primary"
          rounded="rounded-xl"
          fontSize="max-md:text-[10px]"
          className="max-md:px-3 max-md:py-2"
        >
          앱 다운로드
        </Button>
        {/* 햄버거 버튼 */}
        <button
          onClick={handleClick}
          className="relative z-10"
          aria-label="메뉴 열기"
        >
          <SVGIcon name="icon-menu" className="text-gray-100" size={24} />
        </button>
      </div>

      <div
        className={`fixed right-0 top-0 z-[100] h-screen w-3/5 transform bg-bg-secondary ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* 닫기 버튼 */}
        <button
          className="absolute right-4 top-3"
          onClick={handleClick}
          aria-label="메뉴 닫기"
        >
          <SVGIcon name="icon-close" className="text-gray-100" size={24} />
        </button>

        <div className="mt-16 h-full flex-col bg-bg-secondary px-6">
          <nav className="mb-10 text-gray-100">
            <NavLinks onClick={handleClick} />
          </nav>
          <Button type="primary" rounded="rounded-xl">
            앱 다운로드
          </Button>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
