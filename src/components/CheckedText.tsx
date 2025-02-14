interface CheckedTextProps {
  text: string;
  subText?: string[];
}

export default function CheckedText({ text, subText }: CheckedTextProps) {
  return (
    <li className='flex flex-col gap-1'>
      <p className='flex gap-2'>
        <svg aria-hidden='true' className='w-6 h-6 text-primary-green'>
          <use href='assets/sprite.svg#checkedThin' />
        </svg>
        <span className='text-white text-md'>{text}</span>
      </p>
      {subText?.length && (
        <ul className='pl-8 flex flex-col gap-1'>
          {subText.map((item, index) => (
            <li key={index} className='text-gray-100 text-base'>
              {item}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
