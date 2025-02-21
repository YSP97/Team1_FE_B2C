'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useStore } from 'zustand';
import { formStore } from '@/stores/useFormStore';
import ProgressSection from '@/components/Form/ProgressSection';
import Step1 from '@/components/Form/Step1';
import Button from '@/components/Button';

export default function Register() {
  const { resetFormStep, isFormComplete } = useStore(formStore);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const step = Number(searchParams.get('step')) || 1;

  console.log(isFormComplete);

  const nextStep = () => {
    if (step < 3) {
      router.push(`${pathname}?step=${step + 1}`);
    }
  };

  /* 현재 Step 입력값만 초기화 */
  const resetCurrentStep = () => {
    resetFormStep(step);
  };

  const handleApply = () => {
    // console.log(isFormComplete);
    // if (isFormComplete) {
    //   console.log('신청완');
    // }
  };

  return (
    <div className="mx-auto max-w-[20.4375rem] py-28 text-gray-100 md:max-w-[45rem]">
      <ProgressSection currentStep={step} plan={'Plus'} />
      <form className="my-12 flex flex-col gap-12 text-gray-100">
        {step === 1 && <Step1 />}
        {/* {step === 2 && <Step2 />} */}
        {/* {step === 3 && <Step3 />} */}
      </form>

      <div className="flex flex-grow gap-2">
        {step < 3 && (
          <>
            <Button
              type="secondary"
              className="flex-1"
              onClick={resetCurrentStep}
            >
              다시 작성하기
            </Button>
            <Button type="secondary" className="flex-1" onClick={nextStep}>
              다음
            </Button>
          </>
        )}
        {step === 3 && (
          <Button type="secondary" className="flex-1" onClick={handleApply}>
            신청하기
          </Button>
        )}
      </div>
    </div>
  );
}
