import {
  TailwindColor,
  TailwindFontBold,
  TailwindFontSize,
  TailwindRounded,
} from '@/types/buttonTailwindType';
import Link from 'next/link';
import { ReactNode } from 'react';

// 타입 조건 적용
type ButtonBaseProps = {
  type: 'primary' | 'secondary' | 'invisible';
  rounded?: TailwindRounded;
  textColor?: TailwindColor;
  bgColor?: TailwindColor;
  fontSize?: TailwindFontSize;
  fontBold?: TailwindFontBold;
  className?: string;
  isClick?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

// 조건부 타입 적용: isLink가 true이면 href 필수
type ButtonProps =
  | (ButtonBaseProps & { isLink: true; href: string }) // isLink가 true이면 href 필수
  | (ButtonBaseProps & { isLink?: false; href?: never }); // isLink가 false면 href 필요 없음

export default function Button({
  textColor = 'text-navy-dark',
  bgColor = 'bg-primary',
  type = 'primary',
  fontSize = 'text-[1rem]',
  fontBold = 'font-bold',
  rounded = 'rounded-sm',
  className = '',
  isLink,
  isClick,
  href,
  children,
  onClick,
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  let buttonClass;
  switch (type) {
    case 'primary':
      buttonClass = `${bgColor} ${textColor} ${rounded} hover:brightness-[80%]`;
      break;
    case 'secondary':
      buttonClass = `${rounded} border-[1px] border-solid ${
        type === 'secondary' && 'border-gray-100 text-gray-100'
      } hover:border-primary hover:text-primary ${isClick ? 'bg-primary text-navy-dark hover:brightness-[80%] hover:text-navy-dark border-primary' : ''}`;
      break;
    case 'invisible':
      buttonClass =
        'border-none bg-inherit hover:border-primary hover:text-primary text-gray-100';
      break;
  }

  const commonClass = `${fontBold} ${fontSize} transition-all px-6 py-[0.72rem] duration-300 text-center ${buttonClass} ${className}`;

  return isLink ? (
    <Link href={href!} className={commonClass}>
      {children}
    </Link>
  ) : (
    <button type="button" className={commonClass} onClick={handleClick}>
      {children}
    </button>
  );
}
