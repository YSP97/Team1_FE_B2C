import { memo } from 'react';
import SVGIcon from '../SVGIcon';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

function BackButton() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const step = Number(searchParams.get('step')) || 1;

  const handleBack = () => {
    if (step > 1) {
      router.push(`${pathname}?step=${step - 1}`);
    } else {
      router.back();
    }
  };

  return (
    <button onClick={handleBack} className="absolute left-4">
      <SVGIcon name="icon-arrow-left" size={24} className="text-gray-100" />
    </button>
  );
}

export default memo(BackButton);
