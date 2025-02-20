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
        className={`flex flex-[1_0_0] cursor-pointer items-center justify-center rounded-xs border-2 border-gray-400 px-0 py-3 text-[1.25rem] font-normal text-gray-200 peer-checked:border-primary peer-checked:text-primary md:text-lg`}
      >
        {name}
      </label>
    </div>
  );
}

export default CheckBox;
