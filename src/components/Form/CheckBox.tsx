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
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onChange(name, !isChecked);
          }
        }}
        className={`flex flex-[1_0_0] cursor-pointer items-center justify-center rounded-xs border border-gray-100 py-1 text-base text-gray-100 md:text-base ${isChecked ? 'border-primary bg-primary font-bold text-navy-dark hover:text-navy-dark hover:brightness-[80%]' : 'hover:border-primary hover:text-primary'} focus:border-primary focus:outline-none`}
      >
        {name}
      </label>
    </div>
  );
}

export default CheckBox;
