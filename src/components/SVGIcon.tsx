import { memo } from "react";

export type IconName =
  | "cancel"
  | "checkedBold"
  | "checked"
  | "checkedBox"
  | "checkedThin"
  | "email"
  | "emptyStar"
  | "hamburger"
  | "hr"
  | "instagram"
  | "radio-checked"
  | "radio-unchecked"
  | "unchecked"
  | "atSign"
  | "calendar";

type SVGIconProp = {
  name: IconName;
  size?: number;
  className?: string;
};

function SVGIcon({ name, size = 32, className }: SVGIconProp) {
  return (
    <svg className={className} fill="none" width={size} height={size}>
      <use href={`/assets/sprite.svg#${name}`} />
    </svg>
  );
}

export default memo(SVGIcon);
