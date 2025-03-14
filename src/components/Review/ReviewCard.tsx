import Image from 'next/image';
import SVGIcon from '../SVGIcon';

type ReviewProps = {
  id: string;
  img: string;
  rating: number;
  content: string;
};

function ReviewCard({ id, img, rating, content }: ReviewProps) {
  return (
    <article className="flex flex-col gap-4 self-stretch rounded-xs bg-gray-50 p-4 md:max-w-[35.125rem]">
      <div className="flex items-center justify-between gap-1 self-stretch overflow-hidden">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-400">
            <Image
              src={img}
              alt={`${id}의 프로필이미지`}
              fill
              className="absolute object-cover"
            />
          </div>
          <span className="overflow-hidden overflow-ellipsis text-base text-white">
            {id}
          </span>
        </div>
        <div
          className="flex h-[0.61319rem] w-[3.64156rem] items-center gap-1"
          aria-label={`5점 만점에 ${rating}점`}
        >
          {[...Array(5)].map((_, index) => (
            <SVGIcon
              key={index}
              name="icon-favorite"
              size={11}
              className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
            />
          ))}
        </div>
      </div>

      <span
        className="max-h-[4.5rem] overflow-hidden overflow-ellipsis text-[1.125rem] font-normal leading-[140%] text-white"
        style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 3,
          overflow: 'hidden',
        }}
      >
        {content}
      </span>
    </article>
  );
}

export default ReviewCard;
