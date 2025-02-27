'use client';

import { useEffect, useState } from 'react';
import CommunityCard from './CommunityCard';
import { motion, useScroll, useTransform } from 'motion/react';
import AppImageWithScreen from './AppImageWithScreen';

type ReviewIcon = {
  icon: string;
  number: string;
};

type ReviewItem = {
  title: string;
  sub: string;
  sub2: string;
  iconArr: ReviewIcon[];
};

const REVIEW: ReviewItem[] = [
  {
    title: '운동으로 연결되고',
    sub: '다른 맴버들은 어떻게 운동하는지, 자유롭게 정보를 공유해요',
    sub2: '자유롭게 정보를 공유해요',
    iconArr: [
      { icon: '⚽️', number: '11' },
      { icon: '🏋️‍♂️', number: '52' },
      { icon: '🚴', number: '30' },
      { icon: '🥊', number: '25' },
    ],
  },
  {
    title: '서로 동기 부여해요',
    sub: '다른 맴버들이 좋은 자극이 돼요',
    sub2: '서로 응원하면서,열심히 운동해요',
    iconArr: [
      { icon: '⚽️', number: '11' },
      { icon: '🏋️‍♂️', number: '52' },
      { icon: '🚴', number: '30' },
      { icon: '🥊', number: '25' },
    ],
  },
];

function Community() {
  const { scrollYProgress } = useScroll();
  const [currentWindow, setCurrentWindow] = useState(0);

  // 스크롤 진행도에 따라 x 위치값 변환
  const cardX = useTransform(
    scrollYProgress,
    [0.67, 0.7], // 스크롤 진행도 (0~1)
    currentWindow < 726 ? [0, -200] : [0, 0], // 이동할 x 좌표 (0px에서 -200px)
  );

  useEffect(() => {
    // 브라우저 환경일 때만 window 접근
    if (typeof window !== 'undefined') {
      setCurrentWindow(window.innerWidth);

      // 창 크기 변경 이벤트 리스너 추가
      const handleResize = () => setCurrentWindow(window.innerWidth);
      window.addEventListener('resize', handleResize);

      // 정리 함수
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // currentWindow 의존성 제거

  return (
    <div>
      {currentWindow < 726 ? (
        <div className="relative mt-10 h-screen overflow-hidden bg-[#2e2e2e] px-5">
          <div className="flex flex-col gap-1 text-center text-[1.5rem]">
            <h3 className="mt-10 text-[1.5rem] font-bold text-gray-100">
              외로운 운동은 그만.
            </h3>
            <h3 className="font-bold text-primary">즐거운 운동은 같이.</h3>
          </div>
          <div className="relative h-[300px] w-full overflow-hidden">
            <motion.div
              style={{ x: cardX }}
              className="pointer-events-none relative top-10 flex gap-10"
            >
              {REVIEW.map((data, index) => (
                <CommunityCard
                  key={index}
                  title={data.title}
                  sub={data.sub}
                  sub2={data.sub2}
                  iconArr={data.iconArr}
                />
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: -60, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            className="relative h-full w-full"
          >
            <div className="absolute left-1/2 -translate-x-1/2 transform">
              <AppImageWithScreen src="/assets/appImage3.jpg" alt="빈휴대폰" />
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="relative mt-10 h-screen overflow-hidden bg-[#2e2e2e] px-10">
          <div className="mb-20 flex flex-col gap-1 text-center">
            <h3 className="mt-10 text-[2.5rem] font-bold text-gray-100">
              외로운 운동은 그만.
            </h3>
            <h3 className="text-[2.5rem] font-bold text-primary">
              즐거운 운동은 같이.
            </h3>
          </div>
          <div className="mt-10 h-full">
            <div className="absolute left-[10%]">
              <CommunityCard {...REVIEW[0]} />
            </div>
            <div className="absolute bottom-0 right-[10%]">
              <CommunityCard {...REVIEW[1]} />
            </div>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: -60, opacity: 1 }}
              viewport={{ amount: 0.3 }}
              className="relative h-full w-full"
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <AppImageWithScreen
                  src="/assets/appImage3.jpg"
                  alt="빈휴대폰"
                />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Community;
