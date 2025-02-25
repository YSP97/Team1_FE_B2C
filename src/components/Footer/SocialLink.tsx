import Link from 'next/link';
import { Social } from './socialList';
import { memo } from 'react';
import SVGIcon from '../SVGIcon';

export type SocialLinkProps = {
  social: Social;
};

const SocialLink = ({ social }: SocialLinkProps) => {
  console.log(social.svgId);

  return (
    <li>
      <Link
        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 p-2 hover:bg-gray-300 md:h-10 md:w-10"
        href={social.href}
        aria-label={`핏큘레이터 ${social.label} 바로가기`}
      >
        <SVGIcon name={social.svgId} className="text-gray-100" />
      </Link>
    </li>
  );
};

export default memo(SocialLink);
