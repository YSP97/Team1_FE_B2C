'use client';

import { useState, useEffect, useRef, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import BundleText from './BundleText';
import Image from 'next/image';

type Section = {
  title: string;
  title2: string;
  caption1: string;
  caption2: string;
  img: string;
};

const SECTIONS: Section[] = [
  {
    title: `운동량이 포인트로 계산되는`,
    title2: `똑똑한 운동량 계산기`,

    caption1:
      '핏큘레이터의 포인트 시스템은\n세계보건기구(WHO)의 신체활동 가이드라인에\n 근거해 만들어졌어요.',
    caption2: '스마트워치를 가지고 있다면\n누구나 사용할 수 있어요.',
    img: '/assets/icons/calculater.png',
  },
  {
    title: '운동기록을 올리면 실시간으로',
    title2: '운동량이 계산돼요.',
    caption1: '나의 운동이 부족한지, 과한지 한 눈에 확인하고',
    caption2: '피드백을 받을 수 있어요.',
    img: '/assets/icons/graph.png',
  },
  {
    title: '운동량 그래프와 피로도 분석을 통한',
    title2: '자기 관리',
    caption1: '요일별, 주제별 그래프를 통해 나의 운동 패턴을 이해하고 ',
    caption2: '컨디션에 맞게 조절할 수 있어요.',
    img: '/assets/icons/feedback.png',
  },
];

function Detailed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [isSnapping, setIsSnapping] = useState(false);
  const touchStartYRef = useRef<number | null>(null);

  console.log('Detailed');

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
              (ref) => ref === entry.target,
            );
            if (sectionIndex !== -1) {
              setActiveIndex(sectionIndex);
            }
          }
        });
      },
      {
        threshold: 0.5, // 50% 이상 보일 때 감지
        rootMargin: '-10% 0px', // 약간의 오프셋 적용
      },
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

    const snapToPosition = (targetY: number) => {
      setIsSnapping(true);
      window.scrollTo({
        top: targetY,
        behavior: 'smooth',
      });

      setTimeout(() => {
        setIsSnapping(false);
      }, 150); //
    };

    if (
      currentScrollY > sectionHeight &&
      currentScrollY < sectionHeight + 150 &&
      !isSnapping
    ) {
      snapToPosition(sectionHeight);
    }

    if (
      currentScrollY > sectionHeight * 2 &&
      currentScrollY < sectionHeight * 2 + 150 &&
      !isSnapping
    ) {
      snapToPosition(sectionHeight * 2);
    }
    if (
      currentScrollY > sectionHeight * 3 &&
      currentScrollY < sectionHeight * 3 + 150 &&
      !isSnapping
    ) {
      snapToPosition(sectionHeight * 3);
    }
  };

  // 터치 시작 이벤트 핸들러
  const handleTouchStart = (e: TouchEvent) => {
    touchStartYRef.current = e.touches[0].clientY;
  };

  // 터치 이동 이벤트 핸들러 (스크롤과 동일한 방식으로 처리)
  const handleTouchMove = (e: TouchEvent) => {
    const currentScrollY = window.scrollY;
    const sectionHeight =
      sectionRefs.current[0]?.getBoundingClientRect().height;

    if (!sectionHeight || isSnapping) return;

    const touchEndY = e.touches[0].clientY;
    const touchDiff = touchStartYRef.current! - touchEndY;

    if (Math.abs(touchDiff) > 50) {
      // 최소 스와이프 거리 (필요에 따라 조정)
      const currentSection = Math.round(currentScrollY / sectionHeight);
      let targetSection;

      if (touchDiff > 0) {
        // 위로 스와이프 (다음 섹션)
        targetSection = Math.min(currentSection + 1, SECTIONS.length);
      } else {
        // 아래로 스와이프 (이전 섹션)
        targetSection = Math.max(currentSection - 1, 0);
      }

      setIsSnapping(true);
      window.scrollTo({
        top: targetSection * sectionHeight,
        behavior: 'smooth',
      });

      setTimeout(() => {
        setIsSnapping(false);
      }, 200);

      touchStartYRef.current = null;
    }
  };

  // 터치 종료 이벤트 핸들러
  const handleTouchEnd = () => {
    touchStartYRef.current = null;
  };

  return (
    <div
      className="relative w-full"
      onWheel={handleScroll}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 고정 컨텐츠 박스 */}
      <div
        className="sticky top-0 z-10 flex h-lvh items-center justify-center overflow-hidden px-10 md:py-10"
        ref={stickyRef}
      >
        <ul className="absolute right-7 top-16 z-20 flex flex-col gap-1 p-1 md:right-10 md:top-1/2">
          {sectionRefs.current.map((_, index) => {
            return (
              <li
                key={index}
                className={`h-2 w-2 rounded-full ${activeIndex === index ? 'bg-white' : 'bg-gray-100'}`}
              ></li>
            );
          })}
        </ul>

        <div className="w-full rounded-xl px-4 sm:px-6 md:flex md:py-10 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-calc[(lvh-3rem)] mt-20 flex w-full flex-col items-center justify-center rounded-xl bg-bg-secondary p-10 text-center md:mt-0 md:flex-row-reverse md:gap-20 md:py-10"
            >
              <div className="mt-auto flex-1 md:mt-0">
                <Image src={SECTIONS[activeIndex].img} alt="" fill />
              </div>
              <div className="flex-1">
                <BundleText
                  text={{
                    title1: SECTIONS[activeIndex].title,
                    title2: SECTIONS[activeIndex].title2,
                    sub1: SECTIONS[activeIndex].caption1,
                    sub2: SECTIONS[activeIndex].caption2,
                  }}
                />
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
              className="scroll-snap-start relative h-screen"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Detailed;
