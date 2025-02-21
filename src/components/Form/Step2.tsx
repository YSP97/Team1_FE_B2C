import { useEffect, useState } from 'react';
import { formStore } from '@/stores/useFormStore';
import { useStore } from 'zustand';
import WearableDevice from './WearableDevice';
import ExerciseGoal from './ExerciseGoal ';
import ExerciseLevel from './ExerciseLevel';

import ReferralSource from './ReferralSource';

const DeviceArray = [
  '애플워치',
  '갤럭시 워치',
  '가민 워치',
  '샤오미 밴드',
  '핏빗(Fitbit)',
  '기타',
  '없음',
];

const GoalArray = [
  '재미 또는 흥미',
  '운동 수행 능력 향상',
  '다이어트',
  '건강 및 질병 예방',
  '근력/근육량 향상',
  '운동 습관 형성',
];
const ReferralSourceArray = [
  '지인 소개',
  '인스타그램 광고',
  'Fitculator계정',
  '페이스북',
  '블로그',
  '이전 기수 참여자',
];

function Step2() {
  const { form, updateForm } = useStore(formStore);
  const [devices, setDevices] = useState<string[]>(form.wearable_device || []);
  const [goals, setGoals] = useState<string[]>(form.exercise_goal || []);

  // `devices` 상태가 변경될 때만 `updateForm` 실행
  useEffect(() => {
    updateForm('wearable_device', devices);
  }, [devices, updateForm]);

  useEffect(() => {
    updateForm('exercise_goal', goals);
  }, [goals, updateForm]);

  console.log(form);

  const handleCheckboxChange = (name: string, isChecked: boolean) => {
    if (DeviceArray.includes(name)) {
      setDevices((prev) =>
        isChecked ? [...prev, name] : prev.filter((item) => item !== name),
      );
    } else if (GoalArray.includes(name)) {
      setGoals((prev) =>
        isChecked ? [...prev, name] : prev.filter((item) => item !== name),
      );
    }
  };

  const handleExerciseLevel = (selectLevel: number) => {
    updateForm('exercise_level', selectLevel);
  };

  const handleReferralSource = (selectReferralSource: string) => {
    updateForm('referral_source', selectReferralSource);
  };

  return (
    <>
      <WearableDevice
        checkBoxList={DeviceArray}
        selectedDevices={form.wearable_device}
        onChange={handleCheckboxChange}
      />
      <ExerciseGoal
        checkBoxList={GoalArray}
        selectedGoals={form.exercise_goal}
        onChange={handleCheckboxChange}
      />
      <ExerciseLevel
        currentStep={form.exercise_level}
        onClick={handleExerciseLevel}
      />
      <ReferralSource
        DropBoxList={ReferralSourceArray}
        selectedOption={form.referral_source || '옵션을 선택해주세요'}
        onSelect={handleReferralSource}
      />
    </>
  );
}

export default Step2;
