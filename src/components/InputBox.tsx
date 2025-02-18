import { memo } from 'react';

type InputTypes = {
  name:
    | 'name'
    | 'email'
    | 'year'
    | 'month'
    | 'day'
    | 'tel-first'
    | 'tel-second';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'number';
  className?: string;
};

function InputBox({
  name,
  placeholder,
  value,
  onChange,
  type = 'text',
  className,
}: InputTypes) {
  const inputId = `input-${name}`; // 고유 아이디 설정

  return (
    <input
      id={inputId}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`appearance-none text-[20px] w-full outline-none border-b-2 border-gray-400 focus:border-primary placeholder-gray-100 text-white bg-bg-primary ${className}`}
    />
  );
}

export default memo(InputBox);
