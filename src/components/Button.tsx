import {
  TailwindColor,
  TailwindFontBold,
  TailwindFontSize,
  TailwindRounded,
} from "@/types/buttonTailwindType";
import { ReactNode, useState } from "react";

type ButtonProps = {
  type: "primary" | "secondary";
  rounded?: TailwindRounded;
  textColor?: TailwindColor;
  bgColor?: TailwindColor;
  fontSize?: TailwindFontSize;
  fontBold?: TailwindFontBold;
  children: ReactNode;
  onClick?: () => void;
};

export default function Button({
  textColor = "text-navy-dark",
  bgColor = "bg-primary",
  type = "primary",
  fontSize = "text-[1rem]",
  fontBold = "font-bold",
  children,
  onClick,
}: ButtonProps) {
  const [isClick, setIsClick] = useState(false);
  const handleCLick = () => {
    setIsClick(!isClick);
    console.log(isClick);

    if (onClick) {
      onClick();
    }
  };

  let buttonClass;
  switch (type) {
    case "primary":
      buttonClass = `text-center ${bgColor} ${textColor} px-6 py-[0.72rem] rounded-[3rem]`;
      break;
    case "secondary":
      buttonClass = isClick
        ? `text-center bg-primary text-navy-dark p-4 rounded-lg border-[1px] border-solid border-primary`
        : `text-center bg-bg-primary text-gray-100 p-4 rounded-lg border-[1px] border-solid border-gray-100`;
  }

  return (
    <div>
      <button
        type="button"
        className={`${fontBold} ${fontSize} w-full hover:brightness-[80%] transition-all duration-300 ${buttonClass}`}
        onClick={handleCLick}
      >
        {children}
      </button>
    </div>
  );
}
