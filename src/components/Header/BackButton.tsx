import { memo } from 'react';
import SVGIcon from '../SVGIcon';
import { useRouter } from 'next/router';

function BackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="absolute left-4">
      <SVGIcon name="icon-arrow-left" size={24} className="text-gray-100" />
    </button>
  );
}

export default memo(BackButton);
