'use client';
import Button from '@/components/Button';
import Step1 from '@/components/Form/Step1';
import Step2 from '@/components/Form/Step2';
import Step3 from '@/components/Form/Step3';
import { formStore } from '@/stores/useFormStore';
import { sendFormToSlack } from '@/utils/sendSlack';
import { createClient } from '@/utils/supabase/client';
import { usePathname, useRouter } from 'next/navigation';
import { memo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useStore } from 'zustand';
import Confirm from '../Modal/Confirm';

interface FormProps {
  currentStep: number;
  plan: string;
}

function Form({ currentStep, plan }: FormProps) {
  const supabase = createClient();
  const { resetFormStep, isStepComplete, form, resetForm } =
    useStore(formStore);
  const router = useRouter();
  const pathname = usePathname();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  /* 현재 단계의 모든 입력값만 초기화 */
  const resetCurrentStep = () => {
    resetFormStep(currentStep);
    setErrors({});
  };

  const postToDb = async () => {
    const userId = uuidv4();
    const exerciseId = uuidv4();
    const subscriptionId = uuidv4();
    const genderMap: { [key: string]: string } = {
      남성: 'male',
      여성: 'female',
      선택안함: 'other',
    };

    const gender = form.gender ? (genderMap[form.gender] ?? 'other') : 'other';

    try {
      /* 가입된 회원인지 확인 */
      const { data: existingUser, error: findError } = await supabase
        .from('users')
        .select('id')
        .or(`email.eq.${form.email},phone_number.eq.${form.phone_number}`);

      if (findError) throw findError;
      if (existingUser && existingUser.length > 0) {
        alert('이미 가입된 회원입니다.');
        return false;
      }

      /* 기존 program_id 가져오기 */
      const { data: program, error: fetchError } = await supabase
        .from('programs')
        .select('id, name');

      if (fetchError) throw fetchError;

      let programId = '';
      if (program?.length > 0) {
        const matchedProgram = program.find((sub) => sub.name === plan);
        if (matchedProgram) {
          programId = matchedProgram.id;
        }
      }

      const userData = {
        id: userId,
        name: form.name,
        email: form.email,
        birth: form.birth,
        phone_number: form.phone_number,
        gender: gender,
      };

      const exerciseData = {
        id: exerciseId,
        user_id: userId,
        wearable_device: form.wearable_device.join(','),
        exercise_goal: form.exercise_goal.join(','),
        exercise_level: form.exercise_level,
        referral_source: form.referral_source,
        exercise_concern: form.exercise_concern || null,
      };

      const subscriptionData = {
        id: subscriptionId,
        program_id: programId,
        user_id: userId,
        start_date: form.start_date,
        end_date: form.end_date,
      };

      /* 데이터 삽입 */
      const { error: userError } = await supabase
        .from('users')
        .insert([userData]);
      if (userError) throw userError;

      const { error: exerciseError } = await supabase
        .from('exercise_preferences')
        .insert([exerciseData]);
      if (exerciseError) throw exerciseError;

      const { error: subscriptionError } = await supabase
        .from('user_subscriptions')
        .insert([subscriptionData]);
      if (subscriptionError) throw subscriptionError;

      return true;
    } catch (error) {
      console.error('데이터 저장 실패', error);
      return false;
    }
  };

  /* 유효성 검사 */
  const validateAllFields = (currentStep: number) => {
    const newErrors: { [key: string]: string } = {};

    if (currentStep === 1) {
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
    }
    if (currentStep === 2) {
      if (form.wearable_device.length === 0) {
        newErrors.wearable_device =
          '사용중인 웨어러블 디바이스를 한개 이상 선택해주세요.';
      }
      if (form.exercise_goal.length === 0) {
        newErrors.exercise_goal = '운동목표를 한개 이상 선택해주세요.';
      }
      if (!form.exercise_level) {
        newErrors.exercise_level = '운동 레벨을 선택해주세요.';
      }
      if (!form.referral_source) {
        newErrors.referral_source = '추천경로를 선택해주세요.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* 다음 단계 이동 */
  const handleApply = async () => {
    if (currentStep < 3) {
      if (validateAllFields(currentStep) && isStepComplete(currentStep)) {
        router.push(`${pathname}?step=${currentStep + 1}&q=${plan}`);
      }
    } else {
      // 3단계는 confirm 모달창 띄움
      setShowConfirm(true);
    }
  };

  /* confirm === true일 때 데이터 전송 */
  const handlePost = async () => {
    setShowConfirm(false);
    const dbSuccess = await postToDb();
    const slackSuccess = dbSuccess ? await sendFormToSlack(form, plan) : false;

    const success = dbSuccess && slackSuccess;

    if (success) {
      router.push('/pricing/done');
      resetForm();
    }
  };

  /* 모달창 닫음 */
  const handleConfirmClose = () => {
    setShowConfirm(false);
  };

  return (
    <form className="my-12 flex flex-col gap-12 text-gray-100">
      {currentStep === 1 && <Step1 errors={errors} />}
      {currentStep === 2 && <Step2 errors={errors} />}
      {currentStep === 3 && <Step3 />}
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

        <Confirm
          title="이대로 신청하시겠어요?"
          isOpened={showConfirm}
          onClose={handleConfirmClose}
          onConfirm={handlePost}
        />
      </div>
    </form>
  );
}

export default memo(Form);
