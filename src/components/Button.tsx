import { TailwindColor, TailwindRounded } from "@/types/buttonTailwindType";
import { ReactNode, useState } from "react";

type ButtonProps = {
  rounded?: TailwindRounded;
  textColor?: TailwindColor;
  bgColor?: TailwindColor;
  isClickTextColor?: TailwindColor;
  isClickBg?: TailwindColor;
  children: ReactNode;
  onClick?: () => void;
};

export default function Button({
  rounded = "rounded-[3rem]",
  textColor = "text-primary",
  bgColor = "bg-primary",
  isClickTextColor,
  isClickBg,
  children,
  onClick,
}: ButtonProps) {
  const [isClick, setIsClick] = useState(false);

  const handleCLick = () => {
    if (onClick) onClick();
    setIsClick(!isClick);
  };

  return (
    <div>
      {isClick ? (
        <button
          className={`text-center ${isClickBg} ${isClickTextColor} py-6 px-6 ${rounded} font-bold text-lg w-full active:opacity-80 trasition-all duration-300 ease-out`}
          onClick={handleCLick}
        >
          {children}
        </button>
      ) : (
        <button
          className={`text-center ${bgColor} ${textColor} py-6 px-6 ${rounded} font-bold text-lg w-full active:opacity-80 trasition-all duration-300 ease-out`}
          onClick={handleCLick}
        >
          {children}
        </button>
      )}
    </div>
  );
}
