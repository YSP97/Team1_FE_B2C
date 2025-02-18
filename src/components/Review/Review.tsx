import { mockReviewList } from '@/mockData/mockReviewList';
import BundleText from '../BundleText';
import ReviewCard from './ReviewCard';

function Review() {
  const TEXT = {
    title1: '실제 참가자들의 다양한 후기',
    sub1: '재등록율 높은 핏큘레이터',
  };

  return (
    <div className="m-4 my-8 flex h-[592px] flex-col md:mx-auto md:mb-28 md:mt-16 md:h-[31.5rem] md:max-w-[80rem] md:flex-row md:items-center md:gap-[3.75rem]">
      <BundleText text={TEXT} />
      <div className="custom-scrollbar flex h-[500px] w-full flex-col gap-4 py-4 pr-2 lg:max-w-[35.125rem]">
        {mockReviewList.map((d) => (
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
