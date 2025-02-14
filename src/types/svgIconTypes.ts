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
  | "threads"
  | "calendar";

export type SVGIconProp = {
  name: IconName;
  size?: number;
  className?: string;
};