type ReviewIcon = {
  icon: string;
  number: string;
};

type ReviewItem = {
  title: string;
  sub: string;
  sub2: string;
  iconArr: ReviewIcon[];
};

function CommunityCard(review: ReviewItem) {
  return (
    <div>
      <div className="border-gary-100 flex flex-col gap-5 rounded-[0.8rem] border-[1px] border-solid bg-white p-5 text-black">
        <div className="flex gap-[0.71rem]">
          {review.iconArr.map((data, index) => {
            return (
              <span
                className="bg-secondary whitespace-nowrap rounded-sm px-2 text-[0.6rem] font-semibold"
                key={index}
              >
                {data.icon} {data.number}
              </span>
            );
          })}
        </div>
        <div className="flex flex-col text-sm/6">
          <div className="mb-2 h-[0.22rem] w-[3.13444rem] bg-black"></div>
          <span className="text-lg font-bold">{review.title}</span>
          <span className="text-[0.6rem]">{review.sub}</span>
          <span className="text-[0.6rem]">{review.sub2}</span>
        </div>
      </div>
    </div>
  );
}

export default CommunityCard;

// border styled relative right-[5.5rem] top-[1.5rem]
// relative right-5 top-[2.5rem]
//
