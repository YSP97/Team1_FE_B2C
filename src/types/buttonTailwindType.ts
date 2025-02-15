export const tailwindColors = [
  "text-primary",
  "text-navy-dark",
  "text-gray-100",
  "text-white",
  "bg-primary",
  "bg-bg-primary",
  "bg-navy-dark",
] as const;

export const tailwindRounded = [
  "rounded-none",
  "rounded-sm",
  "rounded-md",
  "rounded-lg",
  "rounded-xl",
  "rounded-2xl",
  "rounded-3xl",
  "rounded-full",
  "rounded-[3rem]",
] as const;

export const tailwindFontSize = [
  "text-xs",
  "text-sm",
  "text-base",
  "text-md",
  "text-lg",
  "text-xl",
];

export type TailwindColor = (typeof tailwindColors)[number];
export type TailwindRounded = (typeof tailwindRounded)[number];
export type TailwindFontSize = (typeof tailwindFontSize)[number];
