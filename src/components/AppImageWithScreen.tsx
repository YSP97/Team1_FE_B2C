import Image from 'next/image';
import { memo } from 'react';

type AppImageProps = {
  src: string;
  alt: string;
  className?: string;
};

function AppImageWithScreen({ src, alt, className }: AppImageProps) {
  return (
    <div className="relative flex h-[500px] w-[250px] items-center justify-center overflow-hidden lg:h-[700px] lg:w-[350px]">
      <div className="absolute flex h-[490px] w-[230px] overflow-hidden lg:h-[690px] lg:w-[340px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 250px, 350px"
          priority
          className={`absolute top-0 z-10 rounded-xl ${className} lg:h-[690px] lg:w-[340px] lg:px-3`}
        />
      </div>

      <Image
        src="/assets/mobileDevice.png"
        alt="device frame"
        fill
        sizes="(max-width: 1024px) 250px, 350px"
        priority
        className="absolute left-0 top-0 z-20 lg:h-[700px] lg:w-[350px]"
      />
    </div>
  );
}

export default memo(AppImageWithScreen);
