import Link from 'next/link';
import Logo from "../Logo";
import SocialLink from "./SocialLink";
import socialList from "./socialList";
import { memo } from 'react';

function Footer() {
  return (
    <footer className="w-full bg-bg-secondary p-6 xl:px-[320px] md:px-[100px] md:py-[80px] flex flex-col md:flex-row md:justify-between md:items-start text-gray-200">
      
      {/* 로고 + 회사 정보 */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <Logo />

        {/* 고객센터 정보 */}
        <div className="mt-4 text-gray-100 text-sm lg:text-base">
          <div>고객센터</div>
          <div className="text-base md:text-lg font-bold mt-1">010-7977-1101</div>
          <div className="flex gap-3 justify-center md:justify-start font-semibold mt-2">
            <Link href="/privacy-policy" className="hover:underline">개인정보 처리방침</Link>
            <span className="text-gray-400">|</span>
            <Link href="/" className="hover:underline">서비스 이용약관</Link>
          </div>
        </div>

        {/* 회사 정보 */}
        <div className="text-[12px] mt-4">
          <span>(주) Fitculator (핏큘레이터) | 대표 류현지</span><br />
          <span>사업자등록번호: 262-67-00523</span><br />
          <span>통신판매신고 제2023-서울서대문-0576</span><br />
          <span>서울특별시 중구 청계천로 100 (시그니처타워) 서관 10층 1029호</span><br />
          <span className="mt-2 block">©2025 Fitculator. All rights reserved.</span>
        </div>
      </div>

      {/* 소셜 링크 */}
      <ul className="flex gap-4 items-center mt-6 md:mt-0 md:self-start justify-center">
        {socialList.map((item, index) => (
          <SocialLink key={index} social={item} />
        ))}
      </ul>

    </footer>
  );
}


export default memo(Footer)