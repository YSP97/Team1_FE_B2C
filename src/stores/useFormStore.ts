import { createStore } from 'zustand/vanilla';

export type FormState = {
  form: {
    program_id: string;
    name: string;
    birth: Date;
    phone_number: string;
    email: string;
    gender: '남성' | '여성' | '선택안함';
    start_date: string;
    end_date: string;
    wearable_device: string;
    exercise_goal: string;
    exercise_level: string;
    exercise_concern: string;
  };
};

export type FormActions = {
  updateForm: (
    key: keyof FormState['form'],
    value: FormState['form'][keyof FormState['form']],
  ) => void;
  resetForm: () => void;
};

export const defaultInitState: FormState = {
  form: {
    program_id: '',
    name: '',
    birth: null,
    phone_number: '',
    email: '',
    gender: '선택안함',
    start_date: '',
    end_date: '',
    wearable_device: '',
    exercise_goal: '',
    exercise_level: '',
    exercise_concern: '',
  },
};

export const createFormStore = (initState: FormState = defaultInitState) =>
  createStore<FormState & FormActions>((set) => ({
    ...initState,

    updateForm: (key, value) =>
      set((state) => ({
        form: {
          ...state.form,
          [key]: value,
        },
      })),

    resetForm: () => set(defaultInitState),
  }));

export const formStore = createFormStore();
