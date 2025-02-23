import { memo } from 'react';

type InputTypes = {
  name: 'name' | 'email' | 'year' | 'month' | 'day' | 'telFirst' | 'telSecond';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'number';
  className?: string;
  maxLength?: number;
};

function InputBox({
  name,
  placeholder,
  value,
  onChange,
  type = 'text',
  className,
  maxLength,
}: InputTypes) {
  const inputId = `input-${name}`;

  const inputNum = ['day', 'year', 'month', 'tel-first', 'tel-second'].includes(
    name,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (inputNum && !/^\d*$/.test(value)) return;
    onChange(e);
  };

  return (
    <input
      id={inputId}
      type={inputNum ? 'text' : type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      maxLength={maxLength}
      inputMode={inputNum ? 'numeric' : undefined}
      pattern={inputNum ? '\\d*' : undefined}
      className={`w-full appearance-none border-b-2 border-gray-400 bg-bg-primary text-[20px] text-white placeholder-gray-100 outline-none focus:border-primary ${className}`}
    />
  );
}

export default memo(InputBox);
