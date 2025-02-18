import Image from "next/image";
import SVGIcon from "../SVGIcon";

type ReviewProps = {
  id: string;
  img: string;
  rating: number;
  content: string;
};

function ReviewCard({ id, img, rating, content }: ReviewProps) {
  return (
    <article className="flex lg:max-w-[35.125rem] p-4 flex-col rounded-xs bg-gray-50 gap-4 self-stretch">
      <div className="flex justify-between gap-1 items-center self-stretch">
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-gray-400 rounded-full relative overflow-hidden">
            <Image src="/" alt={img} fill className="object-cover absolute" />
          </div>
          <span className="overflow-hidden text-white overflow-ellipsis text-base font-normal leading-[140%]">
            {id}
          </span>
        </div>
        <div
          className=" w-[3.64156rem] h-[0.61319rem] flex items-center gap-1"
          aria-label={`5점 만점에 ${rating}점`}>
          {[...Array(5)].map((_, index) => (
            <SVGIcon
              key={index}
              name="icon-favorite"
              size={11}
              className={index < rating ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
      </div>

      <span className="overflow-hidden text-white overflow-ellipsis text-[1.125rem] font-normal leading-[140%]">
        {content}
      </span>
    </article>
  );
}

export default ReviewCard;
