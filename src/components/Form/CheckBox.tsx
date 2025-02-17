type CheckBoxProps = {
  name: string;
  isChecked: boolean;
  onChange: (name: string, isChecked: boolean) => void;
};

function CheckBox({ name, isChecked, onChange }: CheckBoxProps) {
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
        className="relative flex min-w-[9.96875rem] max-w-[9.96875rem] flex-[1_0_0] cursor-pointer items-center justify-center gap-[0.625rem] rounded-xs border-2 border-gray-400 px-0 py-3 text-gray-200 peer-checked:border-primary peer-checked:text-primary md:min-h-[3.3125rem] md:min-w-[14.666875rem] md:text-lg">
        {name}
      </label>
    </div>
  );
}

export default CheckBox;
