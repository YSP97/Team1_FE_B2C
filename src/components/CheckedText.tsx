import SVGIcon from '@/components/SVGIcon';

interface CheckedTextProps {
  text: string;
  subText?: string | string[];
}

export default function CheckedText({ text, subText }: CheckedTextProps) {
  return (
    <li className="flex flex-col gap-1">
      <p className="flex gap-2">
        <SVGIcon
          name="icon-check"
          size={24}
          className="text-primary-green"
          aria-hidden="true"
        />
        <span className="text-base text-white">{text}</span>
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
