import { createStore } from 'zustand/vanilla';

export type FormState = {
  form: {
    program_id: string;
    name: string | null;
    birth: Date | null;
    phone_number: string;
    email: string;
    gender: '남성' | '여성' | '선택안함' | null;
    start_date: Date | null;
    end_date: Date | null;
    wearable_device: string;
    exercise_goal: string;
    exercise_level: string;
    exercise_concern: string;
    referral_source: string;
  };
};

export type FormActions = {
  updateForm: (
    key: keyof FormState['form'],
    value: FormState['form'][keyof FormState['form']],
  ) => void;
  resetForm: () => void;
  resetFormStep: (step: number) => void;
  isFormComplete: () => string | null;
};

export const defaultInitState: FormState = {
  form: {
    program_id: '',
    name: '',
    birth: null,
    phone_number: '',
    email: '',
    gender: null,
    start_date: null,
    end_date: null,
    wearable_device: '',
    exercise_goal: '',
    exercise_level: '',
    exercise_concern: '',
    referral_source: '',
  },
};

export const createFormStore = (initState: FormState = defaultInitState) =>
  createStore<FormState & FormActions>((set, get) => ({
    ...initState,

    updateForm: (key, value) =>
      set((state) => ({
        form: {
          ...state.form,
          [key]: value,
        },
      })),

    resetForm: () => set(defaultInitState),

    resetFormStep: (step: number) => {
      set((state) => {
        const updatedForm = { ...state.form };

        if (step === 1) {
          updatedForm.name = '';
          updatedForm.birth = null;
          updatedForm.phone_number = '';
          updatedForm.email = '';
          updatedForm.gender = null;
        } else if (step === 2) {
          updatedForm.start_date = null;
          updatedForm.end_date = null;
          updatedForm.wearable_device = '';
        } else if (step === 3) {
          updatedForm.exercise_goal = '';
          updatedForm.exercise_level = '';
          updatedForm.exercise_concern = '';
          updatedForm.referral_source = '';
        }

        return { form: updatedForm };
      });
    },

    isFormComplete: () => {
      const { form } = get();
      return (
        form.name &&
        form.birth &&
        form.phone_number &&
        form.email &&
        form.gender &&
        form.start_date &&
        form.end_date &&
        form.wearable_device &&
        form.exercise_goal &&
        form.exercise_level &&
        form.exercise_concern &&
        form.referral_source
      );
    },
  }));

export const formStore = createFormStore();
