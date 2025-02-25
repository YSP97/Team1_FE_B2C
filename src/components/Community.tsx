import { useEffect, useState } from 'react';
import CommunityCard from './CommunityCard';
import { motion, useScroll, useTransform } from 'motion/react';
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
    setCurrentWindow(window.innerWidth);
  }, [currentWindow]);

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
              <CommunityCard />
              <CommunityCard />
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: -60, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            className="relative h-full w-full"
          >
            <img
              src="/assets/mobileDevice.png"
              className="absolute left-[50%] top-[1%] z-10 h-[90%] translate-x-[-50%]"
            />

            <img
              src="/assets/appImage2.png"
              className="absolute left-[50%] top-[2%] h-[87%] max-w-[350px] translate-x-[-50%] rounded-[5rem]"
            />
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
              <CommunityCard />
            </div>
            <div className="absolute bottom-0 right-[10%]">
              <CommunityCard />
            </div>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: -60, opacity: 1 }}
              viewport={{ amount: 0.3 }}
              className="relative h-full w-full"
            >
              <img
                src="/assets/mobileDevice.png"
                className="absolute left-[50%] top-[1%] z-10 h-[70%] translate-x-[-50%]"
              />

              <img
                src="/assets/appImage2.png"
                className="absolute left-[50%] top-[2%] h-[67%] translate-x-[-50%] rounded-[3rem]"
              />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Community;
