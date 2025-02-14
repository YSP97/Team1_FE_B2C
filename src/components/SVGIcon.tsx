import { SVGIconProp } from '@/types/svgIconTypes';
import { memo } from "react";

function SVGIcon({ name, size = 32, className }: SVGIconProp) {
  return (
    <svg className={className} fill="none" width={size} height={size}>
      <use href={`/assets/sprite.svg#${name}`} />
    </svg>
  );
}

export default memo(SVGIcon);
