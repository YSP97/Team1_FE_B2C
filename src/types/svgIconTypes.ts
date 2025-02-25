export type IconName =
  | 'icon-arrow-bottom'
  | 'icon-arrow-left'
  | 'icon-arrow-right'
  | 'icon-arrow-top'
  | 'icon-calendar'
  | 'icon-check'
  | 'icon-checkbox-checked'
  | 'icon-checkbox-default'
  | 'icon-close'
  | 'icon-divide'
  | 'icon-favorite'
  | 'icon-instagram'
  | 'icon-mail'
  | 'icon-menu'
  | 'icon-radio-checked'
  | 'icon-radio-default'
  | 'icon-task'
  | 'icon-threads';

export type SVGIconProp = {
  name: IconName;
  size?: number;
  className?: string;
};
