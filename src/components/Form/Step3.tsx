import { useStore } from 'zustand';
import ExerciseConcern from './ExerciseConcern';
import { formStore } from '@/stores/useFormStore';
import { useState, useCallback } from 'react';
import { debounce } from 'lodash-es';

type ErrorPropsType = { errors: { [key: string]: string } };

function Step3({ errors }: ErrorPropsType) {
  const { form, updateForm } = useStore(formStore);
  const [concern, setConcern] = useState<string>(form.exercise_concern || '');

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

  console.log(form.exercise_concern);
  return (
    <div>
      <ExerciseConcern onChange={handleExerciseConcern} value={concern} />
      <div className="mt-4 text-sm text-primary-red">
        {errors.exercise_concern}
      </div>
    </div>
  );
}

export default Step3;
