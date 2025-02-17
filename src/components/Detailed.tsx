import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

type Section = {
  title: string;
  caption1: string;
  caption2: string;
  bg: string;
  h?: number;
};

const SECTIONS: Section[] = [
  {
    title: `운동량이 포인트로 계산되는 똑똑한\n운동량 계산기`,
    caption1:
      "핏큘레이터의 포인트 시스템은\n세계보건기구(WHO)의 신체활동 가이드라인에\n 근거해 만들어졌어요.",
    caption2: "스마트워치를 가지고 있다면\n누구나 사용할 수 있어요.",
    bg: "bg-primary",
  },
  {
    title: "운동기록을 올리면\n실시간으로\n운동량이 계산돼요.",
    caption1:
      "나의 운동이 부족한지, 과한지 한 눈에 확인하고\n피드백을 받을 수 있어요.",
    caption2: "",
    bg: "bg-white",
  },
  {
    title: "운동량 그래프와 피로도 분석을 통한\n자기 관리",
    caption1:
      "일별, 주제별 그래프를 통해 나의 운동 패턴을 이해하고\n 컨디션에 맞게 조절할 수 있어요.",
    caption2: "",
    bg: "bg-gray-200",
  },
];

function Detailed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [isSnapping, setIsSnapping] = useState(false);

  useEffect(() => {
    console.log(sectionRefs.current);
    // 배열 초기화
    sectionRefs.current = sectionRefs.current.slice(0, SECTIONS.length + 2);
    //sectionRefs 의 배열길이를  SECTIONS.length 와 정확히 일치시키기 위한 작업
    // 재렌더링 되었을때, Ref 를 참조하는 과정에서 초기화되지 않으면, 그전에 값을 참조할수도 있음 안전장치 같은거임

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (sectionIndex !== -1) {
              setActiveIndex(sectionIndex);
            }
          }
        });
      },
      {
        threshold: 0.5, // 50% 이상 보일 때 감지
        rootMargin: "-10% 0px", // 약간의 오프셋 적용
      }
    );

    // IntersectionObserver 생성하면 콜백함수와 options 을받음 options은 선택적이고 3가지 속성이 있음
    // root,rootMargin,threshold
    // 콜백함수의 첫번째 인자는 entries 는 가시성이변경된 모든 요소에대한 IntersectionObserverEntry 객체를 모아서 배열로만듬
    // isIntersecting 객체 속성중 하나로 해당 요소가 뷰포트 안에 들어왔는데 boolean 값으로 나타냄

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    // sectiomRefs 를 반복해 ref 를 찾고 추적

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      //언마운트되면 옵저버 삭제 메모리누수방지
    };
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const sectionHeight =
      sectionRefs.current[0]?.getBoundingClientRect().height;

    if (!sectionHeight) return; // sectionHeight가 정의되지 않으면 함수 종료

    console.log("currentY", currentScrollY, "sectionHeight", sectionHeight * 3);

    const snapToPosition = (targetY: number) => {
      setIsSnapping(true);
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsSnapping(false);
      }, 500); //
    };

    if (
      currentScrollY > sectionHeight &&
      currentScrollY < sectionHeight + 100 &&
      !isSnapping
    ) {
      snapToPosition(sectionHeight);
    }

    if (
      currentScrollY > sectionHeight * 2 &&
      currentScrollY < sectionHeight * 2 + 100 &&
      !isSnapping
    ) {
      snapToPosition(sectionHeight * 2);
    }
  };

  return (
    <div className="relative w-full" onWheel={handleScroll}>
      {/* 고정 컨텐츠 박스 */}
      <div
        className="sticky top-0 z-10 h-screen flex items-center justify-center overflow-hidden bg-bg-primary"
        ref={stickyRef}
      >
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center bg-bg-primary h-screen flex flex-col justify-center gap-6 items-center"
            >
              <img
                src="https://fastly.picsum.photos/id/356/200/200.jpg?hmac=Pd7TXMbO4gSTwhtmub1DcSo1vPpeCVRsuY_BRE_llmU"
                className="object-cotain w-96 h-96 object-center"
              ></img>
              <h2 className="text-2xl font-bold text-white mb-4 whitespace-pre-line">
                {SECTIONS[activeIndex].title}
              </h2>
              <div className="space-y-2">
                <p className="text-base text-gray-200 whitespace-pre-line">
                  {SECTIONS[activeIndex].caption1}
                </p>
                <p className="text-base text-gray-200 whitespace-pre-line">
                  {SECTIONS[activeIndex].caption2}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 스크롤 영역 */}
      <div className="w-full snap-mandatory overflow-auto">
        {SECTIONS.map((_, i) => {
          return (
            <div
              key={i}
              ref={(el: HTMLDivElement | null) => {
                sectionRefs.current[i] = el;
              }}
              className="h-screen relative scroll-snap-start"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Detailed;

// 정확한 스크롤 위치로 이동해야됨
// 정확한 스크롤 위치로 이동하기위해서는 전체높이를 알아야됨.
// 전체높이에서 섹션의 탑으로 이동?
// 섹션의탑? scollinView 로 사용가능할까?
// 음수양수값 확인해서 아래인지 위인지 확인하고 해당 스크롤로 이동.
// 현재 애니메이션은 유지됨.
