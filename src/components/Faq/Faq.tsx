import Accordion from '@/components/Faq/Accordion';
import { mockFAQ } from '@/mockData/mockFAQ';
import { useState } from 'react';

function Faq() {
  const [accordionOpenIndex, setAccordionOpenIndex] = useState<number | null>(
    null,
  );

  const handleToggleButton = (index: number) => {
    setAccordionOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-18 bg-bg-primary px-4 py-8 md:py-16">
      <div className="m-auto flex w-full flex-col gap-6 md:max-w-screen-lg md:gap-12">
        <div className="flex flex-col gap-2">
          <h3 className="text-center text-lg font-bold text-white">
            <strong className="pr-2 font-bold text-primary">FAQ.</strong>더
            궁금한 점이 있으신가요?
          </h3>
          <p className="text-center text-gray-100">
            자주 물어보신 질문들만 모아둔 FAQ를 참고해 주세요.
          </p>
        </div>
        <div>
          {mockFAQ.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              content={item.content}
              isOpened={accordionOpenIndex === index}
              handleToggle={() => handleToggleButton(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
