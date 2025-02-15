import ReviewCard from "./ReviewCard";

const mockData = [
  { id: "djl123", img: "img", rating: 4, content: "좋아여" },
  { id: "djl123", img: "img", rating: 1, content: "구매내역 지워주세요" },
  { id: "cljle23", img: "img", rating: 1, content: "구려요" },
  { id: "ood223", img: "img", rating: 5, content: "최고에요" },
  { id: "lqljwlejio", img: "img", rating: 1, content: "그냥 그래요" },
];

function Review() {
  return (
    <div className="h-[592px] mx-4 my-8 flex flex-col lg:flex-row lg:gap-[3.75rem]  lg:h-[31.5rem] lg:w-[80rem] lg:mx-[auto] lg:mt-16 lg:mb-28 lg:items-center">
      <div className="flex flex-col gap-4 mb-4 lg:gap-6 lg:items-start lg:w-[610px]">
        <span className="text-white text-center text-2xl lg:text-[2.5rem] font-bold leading-[140%]">
          실제 참가자들의 다양한 후기
        </span>
        <span className="text-gray-100 text-center lg:text-[1.5rem] text-base font-normal leading-[140%]">
          재등록율 높은 핏큘레이터
        </span>
      </div>
      <div className="h-[500px] lg:w-[618px] custom-scrollbar flex flex-col gap-4 pr-2 py-4">
        {mockData.map((d) => (
          <ReviewCard
            key={d.id}
            id={d.id}
            img={d.img}
            rating={d.rating}
            content={d.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Review;
