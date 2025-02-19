type SelectGenderProps = {
  isChecked: string;
  onChange: (gender: string) => void;
};

function SelectGender({ isChecked, onChange }: SelectGenderProps) {
  const genderSelectArray = ['남성', '여성', '선택안함'];
  return (
    <div className="mx-auto flex w-[20.4375rem] flex-col items-start gap-4 self-stretch md:w-[45rem]">
      <span className="text-md font-normal text-gray-100">성별</span>
      <div className="flex w-full flex-row gap-2">
        {genderSelectArray.map((gender) => (
          <fieldset key={gender} className="flex-1">
            <input
              name="gender"
              type="radio"
              id={gender}
              checked={isChecked === gender}
              className="peer hidden"
              onChange={() => onChange(gender)}
            ></input>
            <label
              htmlFor={gender}
              className={`relative flex flex-[1_0_0] cursor-pointer items-center justify-center gap-[0.625rem] rounded-xs border-2 border-gray-400 px-0 py-3 text-[1.25rem] font-normal text-gray-200 peer-checked:border-primary peer-checked:text-primary md:text-lg`}
            >
              {gender}
            </label>
          </fieldset>
        ))}
      </div>
    </div>
  );
}

export default SelectGender;
