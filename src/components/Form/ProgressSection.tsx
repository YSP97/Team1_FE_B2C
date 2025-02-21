import { memo } from 'react';
import ProgressBar from '../ProgresBar';

function ProgressSection({ currentStep, plan }: { currentStep: number, plan:string }) {


  return (
    <>
      <div className="mb-6">
        <h1 className="mb-1 text-4xl font-bold text-white max-md:text-lg">
          FITCULATOR <span className="text-primary">{plan}</span> 신청하기
        </h1>
        <p className="max-md:text-sm">WHO 표준 운동량에 맞게 운동해보세요.</p>
      </div>
      <div className="flex flex-col gap-2 rounded-sm bg-bg-secondary px-6 py-4 max-md:p-4 max-md:text-sm">
        <h2>총 3단계로 이루어져 있습니다.</h2>
        <div className="mb-2 flex items-center gap-4 max-md:flex-col max-md:items-start max-md:gap-1">
          <span className="text-xl font-bold text-primary max-md:text-lg">
            {`${currentStep}/3`}
          </span>
          <span className="text-lg text-white max-md:text-base">
            운동 정보를 작성해주세요.
          </span>
        </div>
        <div className="mb-4">
          <ProgressBar page={currentStep} totalPages={3} />
        </div>
      </div>
    </>
  );
}

export default memo(ProgressSection);
