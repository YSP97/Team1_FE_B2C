type SelectGenderProps = {
  isChecked: string | null;
  onChange?: (gender: string) => void | undefined;
};

function SelectGender({ isChecked, onChange }: SelectGenderProps) {
  const genderSelectArray = ['남성', '여성', '선택안함'];
  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
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
              onChange={() => onChange?.(gender)}
            />
            <label
              htmlFor={gender}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onChange?.(gender);
                }
              }}
              className={`flex flex-[1_0_0] cursor-pointer items-center justify-center rounded-xs border border-gray-100 py-1 text-base text-gray-100 md:text-base ${isChecked === gender ? 'border-primary bg-primary font-bold text-navy-dark hover:text-navy-dark hover:brightness-[80%]' : 'hover:border-primary hover:text-primary'} focus:border-primary focus:outline-none`}
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
