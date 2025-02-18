type AbilityProps = {
  totalSteps: number;
  currentStep: number;
};

export default function Ability({ totalSteps, currentStep }: AbilityProps) {
  return (
    <div className="mx-auto mt-4 flex h-80 w-[20.4375rem] flex-col items-start gap-4 self-stretch md:w-[45rem]">
      {/* 네임택 */}
      <div className="flex flex-col items-start gap-2 self-stretch">
        <span className="text-md font-normal text-gray-100">
          사용중인 디바이스
        </span>
        <span className="text-sm font-normal text-gray-200 md:text-md">
          복수 선택 가능
        </span>
      </div>

      {/* 라디오 박스 */}
      <div className="flex w-full items-center">
        {Array.from({ length: totalSteps }, (_, i) => {
          const isActive = i + 1 <= currentStep;
          return (
            <div key={i} className="flex w-full items-center last:w-auto">
              {/* Step Circle */}
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full md:h-6 md:w-6 ${isActive ? 'bg-primary' : 'bg-gray-200'}`}
              ></div>

              {/* Step Connector (줄)*/}
              {i < totalSteps - 1 && (
                <div
                  className={`h-0.5 flex-1 ${i + 1 < currentStep ? 'bg-primary' : 'bg-gray-200'}`}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="flex w-full flex-row justify-between text-xs font-normal leading-[140%] text-gray-100 md:text-base">
        <span>많은 노력이 필요해요.</span>
        <span>매우 수월해요!</span>
      </div>
    </div>
  );
}
