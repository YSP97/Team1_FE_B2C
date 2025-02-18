interface CheckedTextProps {
  text: string;
  subText?: string | string[];
}

export default function CheckedText({ text, subText }: CheckedTextProps) {
  return (
    <li className='flex flex-col gap-1'>
      <p className='flex gap-2'>
        <svg aria-hidden='true' className='w-6 h-6 text-primary-green'>
          <use href='assets/sprite.svg#icon-check' />
        </svg>
        <span className='text-white text-base'>{text}</span>
      </p>
      {subText && (
        <ul className='pl-8 flex flex-col gap-1'>
          {Array.isArray(subText) ? (
            subText.map((item, index) => (
              <li key={index} className='text-gray-100 text-sm'>
                {item}
              </li>
            ))
          ) : (
            <li className='text-gray-100 text-sm'>{subText}</li>
          )}
        </ul>
      )}
    </li>
  );
}
