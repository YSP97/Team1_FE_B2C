import { RefObject, useRef, useState, WheelEvent, TouchEvent } from "react";

export default function Detailed() {
  const sectionRefs: RefObject<HTMLElement | null>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const touchStartY = useRef(0);

  console.log(sectionRefs);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const isScrolling = useRef(false);
  const sections = [
    {
      id: 1,
      image: "이미지url",
      text: ["핏큘레이터 설정", "왜 핏큘레이터를 사용해야하나요?"],
      bg: "bg-primary",
    },
    {
      id: 2,
      image: "이미지url",
      text: ["핏큘레이터 설정", "왜 핏큘레이터를 사용해야하나요?"],
      bg: "bg-bg-primary",
    },
    {
      id: 3,
      image: "이미지url",
      text: ["핏큘레이터 설정", "왜 핏큘레이터를 사용해야하나요?"],
      bg: "bg-red",
    },
  ];

  //데탑용
  const scrollToNextSection = () => {
    scrollToSection(currentSectionIndex + 1);
  };
  const scrollToPrevSection = () => {
    scrollToSection(currentSectionIndex - 1);
  };
  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sectionRefs.length) {
      setCurrentSectionIndex(index);
      sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (isScrolling.current) return;
    isScrolling.current = true;
    setTimeout(() => {
      isScrolling.current = false;
    }, 400);
    if (Math.abs(e.deltaY) > 10) {
      console.log("deltaY", e.deltaY);

      if (e.deltaY > 0) {
        scrollToNextSection();
      } else {
        scrollToPrevSection();
      }
    }
  };

  // ** Touch Event (모바일용) **
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (isScrolling.current) return;
    const touchEndY = e.touches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;

    if (Math.abs(deltaY) > 50) {
      isScrolling.current = true;
      setTimeout(() => {
        isScrolling.current = false;
      }, 400);

      if (deltaY > 0) {
        scrollToNextSection(); // 아래로 스크롤
      } else {
        scrollToPrevSection(); // 위로 스크롤
      }
    }
  };

  return (
    <div
      onWheel={handleWheel}
      className="h-screen overflow-hidden snap-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {sections.map((data, index) => {
        return (
          <section
            ref={sectionRefs[index]}
            id={`section-${index}`}
            className={`h-screen flex flex-col justify-center items-center ${data.bg} snap-start overflow-hidden`}
            key={data.id}
          >
            <div className="flex flex-col gap-6 justify-center items-center">
              <div>
                <img src={data.image} alt={`이미지 ${index + 1}`} />
                <div>이미지가 들어갑니다</div>
              </div>
              <div>
                <span>{data.text[0]}</span>
                <span>{data.text[1]}</span>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
