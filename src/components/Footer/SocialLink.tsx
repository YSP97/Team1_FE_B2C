import Link from 'next/link';
import { Social } from './socialList';
import { memo } from 'react';
import SVGIcon from '../SVGIcon';


export type SocialLinkProps = {
  social: Social
}

const SocialLink = ({social}:SocialLinkProps) => {
  return (
    <li>
      <Link className="w-8 h-8 md:w-10 md:h-10 p-2 bg-white/10 hover:bg-white/20 
                      rounded-full flex items-center justify-center
                    "
                    href={social.href}
                    aria-label={`핏큘레이터 ${social.label} 바로가기`}>
      <SVGIcon name={social.svgId} className='text-gray-100'/>
    </Link>
    </li>
  );
}


export default memo(SocialLink)