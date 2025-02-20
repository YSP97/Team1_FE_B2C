type ExerciseLevelProps = {
  currentStep: number;
  onClick: (step: number) => void;
};

function ExerciseLevel({ currentStep, onClick }: ExerciseLevelProps) {
  const totalSteps = 7;
  return (
    <div className="mx-auto box-content flex max-w-[20.4375rem] flex-col items-start gap-4 self-stretch px-6 md:max-w-[45rem]">
      {/* 네임택 */}
      <div className="flex flex-col items-start gap-2 self-stretch">
        <span className="text-md font-normal text-gray-100">
          운동 수행 능력 (1-7)
        </span>
        <span className="text-sm font-normal text-gray-200 md:text-md">
          본인이 생각하는 운동 수행력을 선택해주세요.
        </span>
      </div>

      {/* 라디오 박스 */}
      <div className="flex w-full flex-col gap-[0.25rem]">
        <div className="flex w-full items-center">
          {Array.from({ length: totalSteps }, (_, i) => {
            const isActive = i + 1 <= currentStep;
            return (
              <div key={i} className="flex w-full items-center last:w-auto">
                {/* 원 */}
                <button
                  type="button"
                  onClick={() => onClick(i + 1)}
                  className={`flex h-5 w-5 items-center justify-center rounded-full md:h-6 md:w-6 ${isActive ? 'bg-primary' : 'bg-gray-200'}`}
                ></button>
                {/* 막대기 */}
                {i < totalSteps - 1 && (
                  <div
                    className={`h-0.5 flex-1 ${i + 1 < currentStep ? 'bg-primary' : 'bg-gray-200'}`}
                  />
                )}
              </div>
            );
          })}
        </div>
        {/* 숫자 영역 */}
        <div className="flex w-full flex-row justify-between">
          {Array.from({ length: totalSteps }, (_, i) => {
            return (
              <div
                key={i}
                className={`w-5 text-center text-md ${i + 1 === currentStep ? 'text-primary' : 'text-gray-100'}`}
              >
                {i + 1}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-full flex-row justify-between text-xs font-normal leading-[140%] text-gray-100 md:text-base">
        <span>많은 노력이 필요해요.</span>
        <span>매우 수월해요!</span>
      </div>
    </div>
  );
}

export default ExerciseLevel;
