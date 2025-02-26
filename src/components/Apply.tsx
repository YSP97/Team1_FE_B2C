import Image from 'next/image';
import BundleText from './BundleText';
import CheckedText from './CheckedText';
import Button from './Button';

export default function Apply() {
  const TEXT = {
    title1: '비대면 운동관리 프로그램',
    title2: '핏큘레이터 신청하기',
    sub1: '모든 요금제에는 아래의 혜택이 포함됩니다.',
  };

  const CheckedTextArray = [
    '운동량 계산 및 분석',
    '피로도 관리',
    '피트니스 특화 챗봇',
    '커뮤니티 활동',
  ];

  const handleOnClick = () => {};

  return (
    <div className="w-full bg-bg-secondary">
      <div className="flex flex-col gap-2 px-4 py-8 md:mx-auto md:max-w-[80rem] md:flex-row md:items-center md:py-16">
        <Image
          src={'/assets/icons/completed_01.png'}
          alt=""
          width={280}
          height={280}
          className="mx-auto aspect-square md:mx-auto md:max-w-[26.25rem]"
        />
        <div className="mx-auto flex flex-col items-center gap-4 md:max-w-[36.25rem] md:items-start md:gap-14">
          <BundleText type="blue" text={TEXT} />
          <ul className="mb-4 flex w-full flex-1 flex-col gap-2 md:mb-0 md:gap-4">
            {CheckedTextArray.map((Text) => (
              <CheckedText
                text={Text}
                key={Text}
                className={'text-md md:text-lg'}
                iconSize={'w-8 h-8 md:w-8 md:h-8'}
              />
            ))}
          </ul>
          <Button
            type="primary"
            fontSize="text-md md:text-[1.25rem]"
            rounded="rounded-xl"
            onClick={handleOnClick}
            isLink={true}
            href="./pricing"
          >
            더 알아보기
          </Button>
        </div>
      </div>
    </div>
  );
}
