'use client';
import { memo, useRef, useEffect, useState } from 'react';
import { animate } from 'motion';
import AppImageWithScreen from './AppImageWithScreen';

function AppIntroduce() {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (window.innerWidth > 640) {
              const elements =
                sectionRef.current?.querySelectorAll('.animate-item');

              if (!elements) return;

              elements.forEach((el, index) => {
                animate(
                  el,
                  { opacity: [0, 1], y: [30, 0] },
                  { duration: 0.6, delay: index * 0.5 },
                );
              });
            }

            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(sectionRef.current);

    const handleScroll = () => {
      if (!imageContainerRef.current || !sectionRef.current) return;
      if (window.innerWidth >= 640) {
        setScrollProgress(0); // 데스크탑에서는 움직이지 않도록 설정
        return;
      }

      // 섹션이 문서의 최상단에서 얼마나 떨어져 있는지
      const sectionTop = sectionRef.current.offsetTop;

      // 섹션의 높이
      const sectionHeight = sectionRef.current.offsetHeight;

      // 현재 스크롤 높이
      const scrollY = window.scrollY;

      // 사용자가 이 섹션을 완전히 지나칠 수 있는 최대 스크롤 값
      const maxScroll = sectionTop + sectionHeight - window.innerHeight;

      // 현재 섹션이 얼마나 스크롤되었는지 비율(0~1)
      // 0: 섹션이 화면에 처음 등장
      // 1: 섹션이 화면에서 지나감
      const progress = (scrollY - sectionTop) / (maxScroll - sectionTop);

      setScrollProgress(Math.min(Math.max(progress, 0), 0.7));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mx-auto flex flex-col gap-10 px-[55px] py-24 text-white max-md:overflow-hidden lg:max-w-[70%]"
    >
      <h1 className="animate-item text-lg font-semibold sm:opacity-0 lg:text-xl/snug xl:text-2xl/snug">
        크로스핏부터
        <br /> 필라테스까지 <br />
        모든 <span className="text-primary">그룹 피트니스</span>를<br />
        한곳에서
      </h1>

      <div
        className="no-scrollbar flex gap-10 max-sm:max-w-[400px] sm:flex-col"
        ref={imageContainerRef}
        style={{
          transform: `translateX(${-scrollProgress * 100}%)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="animate-item flex sm:mt-[-200px] sm:justify-end sm:opacity-0 lg:mt-[-250px]">
          <AppImageWithScreen src="/assets/appImage1.jpg" alt="화면1" />
        </div>

        <div className="animate-item sm:mt-[-230px] sm:opacity-0">
          <AppImageWithScreen src="/assets/appImage2.jpg" alt="화면2" />
        </div>
      </div>

      <p className="animate-item flex text-[20px] sm:mt-[-200px] sm:justify-end sm:opacity-0 lg:text-xl/snug">
        운동 경험별 맞춤 가이드로 <br /> 안전하고 효과적인 운동을 <br />
        돕습니다.
      </p>
    </div>
  );
}

export default memo(AppIntroduce);
