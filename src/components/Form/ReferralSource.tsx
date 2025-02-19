import DropBox from './DropBox';

type ReferralSourceProps = {
  selectedOption: string;
  onSelect: (value: string) => void;
};

function ReferralSource({ selectedOption, onSelect }: ReferralSourceProps) {
  const ReferralSourceArray = [
    '지인 소개',
    '인스타그램 광고',
    'Fitculator계정',
    '페이스북',
    '블로그',
    '이전 기수 참여자',
  ];
  return (
    <div className="mx-auto flex w-[20.4375rem] flex-col gap-4 md:w-[45rem]">
      <div className="text-md font-normal text-gray-100">
        Fitculator를 알게된 경로
      </div>
      <DropBox
        list={ReferralSourceArray}
        isSelected={selectedOption}
        onSelect={onSelect}
      />
    </div>
  );
}

export default ReferralSource;
