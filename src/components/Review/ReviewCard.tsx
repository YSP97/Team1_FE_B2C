import Image from "next/image";

type ReviewProps = {
  id: string;
  img: string;
  rating: number;
  content: string;
};

export default function ReviewCard({ id, img, rating, content }: ReviewProps) {
  return (
    <article className=" bg-gray-500 rounded-[6px] flex p-4 flex-col gap-4 self-stretch ">
      <div className="flex justify-between items-center self-stretch">
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-gray-400 rounded-full relative overflow-hidden">
            <Image src="/" alt={img} fill className="object-cover absolute" />
          </div>
          <span className="text-white self-stretch overflow-hidden overflow-ellipsis text-sm not-italic font-medium leading-8">
            {id}
          </span>
        </div>
        <div className=" w-[3.64156rem] h-[0.61319rem] flex items-center gap-1">
          {/* 별점 아이콘 추후 수정 예정 */}
          {Array.from({ length: rating }).map((_, index) => (
            <div
              key={index}
              className="w-[10px] h-[10px] bg-black rounded-full"></div>
          ))}
        </div>
      </div>
      <span className=" text-white self-stretch h-6 overflow-hidden overflow-ellipsis text-base not-italic font-normal leading-6 text-left">
        {content}
      </span>
    </article>
  );
}
