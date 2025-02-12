import { ReactNode } from "react";

type ButtonProps = {
  rounded?: string;
  textColor?: string;
  bgColor?: string;
  children: ReactNode;
  onClick?: () => void;
};

export default function Button({
  rounded = "rounded-[3rem]",
  textColor = "text-white",
  bgColor = "bg-primary",
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`text-center ${bgColor} ${textColor} py-6 px-6 ${rounded} font-bold text-lg w-full`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
