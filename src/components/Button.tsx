import {
  TailwindColor,
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
  hoverBgColor?: TailwindColor;
  hoverTextColor?: TailwindColor;
  children: ReactNode;
  onClick?: () => void;
};

export default function Button({
  textColor = "text-navy-dark",
  bgColor = "bg-primary",
  type = "primary",
  fontSize = "text-[1.125rem]",
  hoverBgColor = "bg-navy-dark",
  hoverTextColor = "text-white",
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
      buttonClass = `text-center ${bgColor} ${textColor} px-6 py-[0.72rem] rounded-[3rem] active:opacity-80 hover:${hoverBgColor} hover:${hoverTextColor}`;
      break;
    case "secondary":
      buttonClass = isClick
        ? `text-center bg-primary text-navy-dark p-4 rounded-lg border-[1px] border-solid border-gray-100`
        : `text-center ${bgColor} ${textColor} p-4 rounded-lg border-[1px] border-solid border-gray-100`;
  }

  return (
    <div>
      <button
        type="button"
        className={`font-bold ${fontSize} w-full  transition-all duration-300 ${buttonClass}`}
        onClick={handleCLick}
      >
        {children}
      </button>
    </div>
  );
}
