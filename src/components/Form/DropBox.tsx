import { memo, useState } from 'react';
import SVGIcon from '../SVGIcon';

type DropBoxProps = {
  list: string[];
  isSelected: string;
  onSelect: (value: string) => void;
};

function DropBox({ list, isSelected, onSelect }: DropBoxProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpened((prev) => !prev);
    setHighlightedIndex(null); // 드롭다운 열릴 때 초기화
  };

  const handleSelect = (value: string) => {
    onSelect(value); // 선택한 값 부모에게 전달
    setIsOpened(false); // 선택 후 드롭다운 닫기
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!isOpened) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev === null ? 0 : Math.min(prev + 1, list.length - 1),
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev === null ? list.length - 1 : Math.max(prev - 1, 0),
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex !== null) handleSelect(list[highlightedIndex]);
        break;
      case 'Escape':
        setIsOpened(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative w-full">
      {/* 버튼 */}
      <button
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="flex w-full items-center justify-between gap-2.5 border-b-2 border-gray-400"
        aria-haspopup="listbox"
        aria-expanded={isOpened}
      >
        <span className="text-[20px] font-normal text-white">{isSelected}</span>
        <SVGIcon
          name="icon-arrow-bottom"
          size={20}
          className={`p-1 text-gray-100 transition-transform ${isOpened ? 'rotate-180' : ''}`}
        />
      </button>

      {/* 드롭다운 리스트 */}
      {isOpened && (
        <ul
          className="custom-scrollbar absolute z-30 mt-1 h-44 w-full rounded-sm bg-bg-secondary"
          role="listbox"
        >
          {list.map((item, index) => (
            <li
              key={index}
              className={`flex cursor-pointer flex-col justify-between px-4 py-2.5 text-[1.375rem] font-normal text-white hover:bg-gray-400 max-md:text-base md:text-[18px] ${
                highlightedIndex === index ? 'bg-gray-400' : ''
              }`}
              onClick={() => handleSelect(item)}
              role="option"
              aria-selected={highlightedIndex === index}
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
