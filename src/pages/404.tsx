import Button from '@/components/Button';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-6 bg-bg-primary">
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: [0, -3, 3, -3, 3, -3, 3, 0], // 진동 애니메이션
        }}
        transition={{
          duration: 0.6, // 애니메이션 지속 시간
          ease: 'easeInOut',
          repeat: Infinity, // 무한 반복
          repeatType: 'loop',
          repeatDelay: 2,
        }}
      >
        <svg
          width="150"
          height="150"
          viewBox="0 0 12 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.713753 31.52V24.16L4.19375 23.88L1.03375 22.32V1.12L7.07375 0.559998L11.0738 2.56V23.76L8.27375 24.04L11.3938 25.6V33L4.71375 33.52L0.713753 31.52ZM1.43375 1.48V21.88L6.67375 21.4V0.999997L1.43375 1.48ZM1.11375 24.52V31.08L6.99375 30.64V24.04L1.11375 24.52Z"
            fill="white"
          />
        </svg>
      </motion.div>
      <h2 className="whitespace-nowrap text-lg font-bold text-white">
        페이지를 찾을 수 없습니다.
      </h2>
      <div className="text-center">
        <span className="text-sm text-gray-100">
          페이지가 존재하지않거나 사용하지 않는 페이지입니다.
        </span>
        <br />
        <span className="text-gray-100">
          입력하신주소가 정확한지 다시한번 확인해주세요
        </span>
      </div>
      <Button type="primary" isLink={true} href="/">
        이전 페이지로 돌아가기
      </Button>
    </div>
  );
}
