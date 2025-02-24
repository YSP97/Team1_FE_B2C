'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

function Logo() {
  const { theme } = useTheme();

  const logoSrc =
    theme === 'dark' ? '/assets/logo_dark.svg' : '/assets/logo_light.svg';

  return (
    <Link href="/">
      <Image
        src={logoSrc}
        alt="핏큘레이터 로고 이미지"
        width={232}
        height={24}
        className="h-auto w-auto md:h-[32px]"
        priority={true}
      />
    </Link>
  );
}

export default memo(Logo);
