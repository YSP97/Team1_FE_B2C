import Image from 'next/image';
import BundleText from '@/components/BundleText';
import CheckedText from './CheckedText';

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

  return (
    <div className="flex h-[36.25rem] flex-col border border-black px-6 py-8 md:max-w-[80rem] md:flex-row">
      <Image
        src={'/assets/bike.png'}
        alt=""
        width={280}
        height={280}
        className="mx-auto md:mx-0 md:h-[26.25rem] md:w-[26.25rem]"
      />
      <div className="flex flex-col gap-2">
        <BundleText type="blue" text={TEXT} />
        {CheckedTextArray.map((Text) => (
          <CheckedText text={Text} key={Text} />
        ))}
      </div>
    </div>
  );
}
