import SVGIcon from '@/components/SVGIcon';
import { useState, useRef, useEffect } from 'react';

interface AccordionProps {
  title: string;
  content: string[];
  isOpened: boolean;
  handleToggle: () => void;
}

function Accordion({ title, content, isOpened, handleToggle }: AccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpened && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpened]);

  return (
    <div>
      <button
        onClick={handleToggle}
        aria-expanded={isOpened}
        aria-controls={`accordion-content-${title}`}
        id={`accordion-button-${title}`}
        className="flex w-full items-center justify-between gap-2 border-b border-gray-200 px-2 py-4 text-left text-sm font-bold text-white md:px-4 md:py-6 md:text-md"
      >
        {title}
        <SVGIcon
          name="icon-arrow-bottom"
          size={20}
          className={`transition-transform duration-300 ease-in-out ${
            isOpened ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        ref={contentRef}
        id={`accordion-content-${title}`}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ height: `${height}px` }}
      >
        <div className="px-2 py-4 md:p-4">
          {content.map((item, index) => (
            <p key={index} className="text-sm text-gray-100 md:text-md">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
