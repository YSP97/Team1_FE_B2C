import DropBox from './DropBox';

type ReferralSourceProps = {
  DropBoxList: string[];
  selectedOption: string;
  onSelect: (value: string) => void;
};

function ReferralSource({
  DropBoxList,
  selectedOption,
  onSelect,
}: ReferralSourceProps) {
  return (
    <div className="mx-auto flex w-full flex-col items-start gap-4">
      <div className="text-md font-normal text-gray-100">
        Fitculator를 알게된 경로
      </div>
      <DropBox
        list={DropBoxList}
        isSelected={selectedOption}
        onSelect={onSelect}
      />
    </div>
  );
}

export default ReferralSource;
