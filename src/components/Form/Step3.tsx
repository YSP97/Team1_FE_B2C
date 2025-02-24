import { formStore } from '@/stores/useFormStore';
import { debounce } from 'lodash-es';
import { useCallback, useState } from 'react';
import { useStore } from 'zustand';
import ExerciseConcern from './ExerciseConcern';

function Step3() {
  const { form, updateForm } = useStore(formStore);
  const [concern, setConcern] = useState<string>(form.exercise_concern || '');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateStore = useCallback(
    debounce((value: string) => {
      updateForm('exercise_concern', value);
    }, 500),
    [updateForm],
  );

  const handleExerciseConcern = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setConcern(newValue); // 즉시 UI 업데이트
    updateStore(newValue); // debounce된 store 업데이트
  };

  return (
    <div>
      <ExerciseConcern onChange={handleExerciseConcern} value={concern} />
    </div>
  );
}

export default Step3;
