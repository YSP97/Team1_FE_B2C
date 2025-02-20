import SVGIcon from '@/components/SVGIcon';

interface CheckedTextProps {
  text: string;
  subText?: string | string[];
  className?: string;
  iconSize?: string;
}

export default function CheckedText({
  text,
  subText,
  className,
  iconSize,
}: CheckedTextProps) {
  return (
    <li className="flex flex-col gap-1">
      <p className="flex items-start gap-2">
        <SVGIcon
          name="icon-check"
          size={24}
          className={`w-sm h-sm md:w-lg md:h-lg text-primary-green ${iconSize || ''}`}
          aria-hidden="true"
        />
        <span className={`flex-1 text-base text-white ${className || ''}`}>
          {text}
        </span>
      </p>
      {subText && (
        <ul className="flex flex-col gap-1 pl-8">
          {Array.isArray(subText) ? (
            subText.map((item, index) => (
              <li key={index} className="text-sm text-gray-100">
                {item}
              </li>
            ))
          ) : (
            <li className="text-sm text-gray-100">{subText}</li>
          )}
        </ul>
      )}
    </li>
  );
}
