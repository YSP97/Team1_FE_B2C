import { mockReviewList } from '@/mockData/mockReviewList';
import BundleText from '../BundleText';
import ReviewCard from './ReviewCard';

function Review() {
  const TEXT = {
    title1: '실제 참가자들의 다양한 후기',
    sub1: '재등록율 높은 핏큘레이터',
  };

  return (
    <section className="w-full bg-bg-primary">
      <div className="md:px-auto mx-auto flex flex-col gap-4 px-6 py-8 md:max-w-[80rem] md:flex-row md:items-center md:gap-[3.75rem] md:pb-28 md:pt-16">
        <BundleText text={TEXT} />
        <div className="custom-scrollbar flex h-[31.25rem] w-full flex-col gap-4 py-4 pr-2 md:max-w-[35.125rem]">
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
    </section>
  );
}

export default Review;
