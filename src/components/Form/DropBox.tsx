import { memo, useState } from 'react';
import SVGIcon from '../SVGIcon';

type DropBoxProps = {
  list: string[];
  isSelected: string;
  onSelect: (value: string) => void;
};

function DropBox({ list, isSelected, onSelect }: DropBoxProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpened((prev) => !prev);
  };

  const handleSelect = (value: string) => {
    onSelect(value); // 선택한 값 부모에게 전달
    setIsOpened(false); // 선택 후 드롭다운 닫기
  };

  return (
    <div className="w-full">
      {/* 버튼 */}
      <button
        onClick={handleToggle}
        className="flex w-full items-center justify-between gap-2.5 border-b-2 border-gray-400 outline-none"
      >
        <span className="text-[20px] font-normal text-white">
          {isSelected}
        </span>
        <SVGIcon
          name="icon-arrow-bottom"
          size={18}
          className={`text-gray-100 transition-transform ${isOpened ? 'rotate-180' : ''}`}
        />
      </button>

      {/* 드롭다운 리스트 */}
      {isOpened && (
        <ul className="absolute z-30 w-[200px] custom-scrollbar mt-1 rounded-sm bg-bg-secondary max-md:w-[100px]">
          {list.map((item, index) => (
            <li
              key={index}
              className="flex cursor-pointer max-md:text-base flex-col justify-between px-4 py-2.5 text-[1.375rem] font-normal text-white hover:bg-gray-400 md:text-[18px]"
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default memo(DropBox);
