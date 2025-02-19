import { memo, useState } from 'react';
import SVGIcon from '../SVGIcon';

type DropBoxProps = {
  list: string[];
  isSelected: string;
  onSelect: (value: string) => void;
};

function DropBox({ list, isSelected, onSelect }: DropBoxProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggle = () => {
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
        className="flex w-full items-center justify-between gap-2.5 self-stretch border-b-2 border-gray-400 py-2 outline-none"
      >
        <span className="text-[1.375rem] font-normal text-white">
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
        <ul className="custom-scrollbar mt-1 w-full rounded-sm bg-bg-secondary">
          {list.map((item, index) => (
            <li
              key={index}
              className="flex cursor-pointer flex-col justify-between px-4 py-2.5 text-[1.375rem] font-normal text-white hover:bg-gray-400 md:text-lg"
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
