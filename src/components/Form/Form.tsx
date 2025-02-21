'use client';
import Step1 from '@/components/Form/Step1';
import Button from '@/components/Button';
import { memo, useState } from 'react';
import { useStore } from 'zustand';
import { formStore } from '@/stores/useFormStore';
import { useRouter, usePathname } from 'next/navigation';

interface FormProps {
  currentStep: number;
}

function Form({ currentStep }: FormProps) {
  const { resetFormStep, isStepComplete, form } = useStore(formStore);
  const router = useRouter();
  const pathname = usePathname();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  /* 현재 단계의 모든 입력값만 초기화 */
  const resetCurrentStep = () => {
    resetFormStep(currentStep);
    setErrors({});
  };

  /* 유효성 검사 */
  const validateAllFields = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.name?.trim() || form.name.length < 2) {
      newErrors.name = '이름은 최소 두 글자 이상이어야 합니다.';
    }
    if (!form.birth) {
      newErrors.birth = '올바른 생년월일을 입력해 주세요.';
    }
    if (!form.email) {
      newErrors.email = '이메일을 입력해 주세요.';
    }
    if (!form.phone_number) {
      newErrors.phone_number = '전화번호를 입력해 주세요.';
    }
    if (!form.gender) {
      newErrors.gender = '성별을 선택해 주세요.';
    }
    if (!form.start_date) {
      newErrors.start_date = '프로그램 시작일을 선택해 주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* 다음 단계 이동 */
  const handleApply = () => {
    if (validateAllFields() && isStepComplete(currentStep)) {
      router.push(`${pathname}?step=${currentStep + 1}`);
    }
  };

  return (
    <form className="my-12 flex flex-col gap-12 text-gray-100">
      {currentStep === 1 && <Step1 errors={errors} />}
      {/* {currentStep === 2 && <Step2 errors={errors} />} */}
      {/* {currentStep === 3 && <Step3 errors={errors} />} */}

      <div className="flex flex-grow gap-2">
        {currentStep < 3 && (
          <>
            <Button
              type="secondary"
              className="flex-1"
              onClick={resetCurrentStep}
            >
              다시 작성하기
            </Button>
            <Button type="secondary" className="flex-1" onClick={handleApply}>
              다음
            </Button>
          </>
        )}
        {currentStep === 3 && (
          <Button type="secondary" className="flex-1" onClick={handleApply}>
            신청하기
          </Button>
        )}
      </div>
    </form>
  );
}

export default memo(Form);
