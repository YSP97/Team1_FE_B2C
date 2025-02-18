import { memo, useState } from "react";
import SVGIcon from "./SVGIcon";

type DropBoxProps = {
  list: string[];
};

function DropBox({ list }: DropBoxProps) {
  const [isSelected, setIsSelected] = useState("옵션을 선택해 주세요.");
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setIsSelected(e.currentTarget.textContent || "");
    setIsOpened(!isOpened);
  };

  const handleBtnClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="w-full">
      <button
        onClick={handleBtnClick}
        className="w-full border-b-2 outline-none border-gray-400 rounded-sm flex justify-between py-2 items-center gap-2.5 self-stretch "
      >
        <span className=" text-white text-2xl font-normal">{isSelected}</span>
        <span className="p-2">
          <SVGIcon
            name="checkedBold"
            size={18}
            className={`text-gray-100 transition-transform ${isOpened ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      <ul
        className={`w-full custom-scrollbar mt-1 rounded-sm bg-bg-secondary overflow-hidden ${isOpened ? "h-60" : "hidden"}`}
      >
        {list.map((d, index) => (
          <li
            className=" px-6 py-3 cursor-pointer text-gray-100 text-2xl font-normal flex flex-row justify-between hover:bg-gray-200 hover:text-gray-50 items-center"
            onClick={handleClick}
            key={index}
          >
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(DropBox);
