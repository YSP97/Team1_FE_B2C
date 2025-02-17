type CheckBoxProps = {
  name: string;
  isChecked: boolean;
  onChange: (name: string, isChecked: boolean) => void;
  width: string;
};

function CheckBox({ name, isChecked, onChange, width }: CheckBoxProps) {
  return (
    <div>
      <input
        type="checkbox"
        id={name}
        name={name}
        className="peer hidden"
        checked={isChecked}
        onChange={(e) => onChange(name, e.target.checked)}
      />
      <label
        htmlFor={name}
        className={`relative flex flex-[1_0_0] cursor-pointer items-center justify-center gap-[0.625rem] rounded-xs border-2 border-gray-400 px-0 py-3 text-[1.25rem] text-gray-200 font-normal peer-checked:border-primary peer-checked:text-primary md:text-lg ${width}`}>
        {name}
      </label>
    </div>
  );
}

export default CheckBox;
