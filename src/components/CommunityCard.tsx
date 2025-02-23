function CommunityCard() {
  const REVIEW = [
    { icon: '⚽️', number: '11' },
    { icon: '🏋️‍♂️', number: '52' },
    { icon: '🚴', number: '30' },
    { icon: '🥊', number: '25' },
  ];

  return (
    <div>
      <div className="border-gary-100 flex flex-col gap-5 rounded-[0.8rem] border-[1px] border-solid bg-white p-5">
        <div className="flex gap-[0.71rem]">
          {REVIEW.map((data, index) => {
            return (
              <span
                className="whitespace-nowrap rounded-sm bg-[#F2F3F6] px-2 text-[0.6rem] font-semibold"
                key={index}
              >
                {data.icon} {data.number}
              </span>
            );
          })}
        </div>
        <div className="flex flex-col text-sm/6">
          <div className="mb-2 h-[0.22rem] w-[3.13444rem] bg-black"></div>
          <span className="text-lg font-bold">운동으로 연결되고</span>
          <span className="text-[0.6rem]">
            다른 멤버들은 어떻게 운동하는지,
          </span>
          <span className="text-[0.6rem]">자유롭게 정보를 공유해요.</span>
        </div>
      </div>
    </div>
  );
}

export default CommunityCard;

// border styled relative right-[5.5rem] top-[1.5rem]
// relative right-5 top-[2.5rem]
//
