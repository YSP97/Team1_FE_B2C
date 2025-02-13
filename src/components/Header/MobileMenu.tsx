import { useState } from 'react';
import NavLinks from './NavLinks';
import Button from '../Button';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 메뉴 (열기/닫기) 이벤트 핸들러
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* 모바일 햄버거 버튼 */}
      <button onClick={handleClick} className="relative z-50">
        <svg className="w-6 h-6">
          <use href="assets/sprite.svg#hamburger" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={handleClick} />
      )}

      {/* 모바일 사이드바 메뉴 */}
      <div
        className={`fixed top-0 right-0 h-full w-3/5 bg-bg-secondary z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}>
        {/* 닫기 버튼 */}
        <button className="absolute top-3 right-4" onClick={handleClick}>
          <svg className="w-6 h-6">
            <use href="assets/sprite.svg#cancel" />
          </svg>
        </button>

        <div className="flex-col mt-16 pl-6">
          <nav className="text-gray-100 mb-10">
            <NavLinks onClick={handleClick} />
          </nav>
          <Button />
        </div>
      </div>
    </>
  );
}
