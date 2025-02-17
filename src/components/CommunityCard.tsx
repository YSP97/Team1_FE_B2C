"use client";

import { motion } from "motion/react";

function CommunityCard() {
  const REVIEW = [
    { icon: "⚽️", number: "11" },
    { icon: "🏋️‍♂️", number: "52" },
    { icon: "🚴", number: "30" },
    { icon: "🥊", number: "25" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <div>
        <div className="w-[18rem] h-[13.5rem] rounded-[0.8rem] bg-white ml-10 overflow-hidden flex flex-col items-center p-7 border-gary-100 border-solid border-[1px]">
          <div className="flex gap-[0.71rem]">
            {REVIEW.map((data, index) => {
              return (
                <span
                  className="px-2 bg-[#F2F3F6] rounded-sm whitespace-nowrap text-sm font-semibold"
                  key={index}
                >
                  {data.icon} {data.number}
                </span>
              );
            })}
          </div>
          <div className="w-[3.13444rem] h-[0.22rem] bg-black relative right-[5.5rem] top-[1.5rem]"></div>
          <div className="relative top-[2.5rem]">
            <span className="font-bold text-lg">운동으로 연결되고</span>
            <br />
            <span>
              다른 멤버들은 어떻게 운동하는지,
              <br />
            </span>
            <span>자유롭게 정보를 공유해요.</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CommunityCard;
