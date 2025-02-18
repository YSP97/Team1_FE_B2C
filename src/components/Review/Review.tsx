import BundleText from "../BundleText";
import ReviewCard from "./ReviewCard";

const mockData = [
  { id: "djl123", img: "img", rating: 4, content: "좋아여" },
  { id: "djl123", img: "img", rating: 1, content: "구매내역 지워주세요" },
  { id: "cljle23", img: "img", rating: 1, content: "구려요" },
  { id: "ood223", img: "img", rating: 5, content: "최고에요" },
  { id: "lqljwlejio", img: "img", rating: 1, content: "그냥 그래요" },
];

function Review() {
  const TEXT = {
    title1: "실제 참가자들의 다양한 후기",
    sub1: "재등록율 높은 핏큘레이터",
  };

  return (
    <div className="h-[592px] my-8 m-4 flex flex-col md:flex-row md:gap-[3.75rem]  md:h-[31.5rem] md:max-w-[80rem] md:mx-auto md:mt-16 md:mb-28 md:items-center">
      <BundleText text={TEXT} />
      <div className="h-[500px] w-full lg:max-w-[35.125rem] custom-scrollbar flex flex-col gap-4 pr-2 py-4">
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
