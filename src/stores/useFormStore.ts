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
    wearable_device: string[];
    exercise_goal: string[];
    exercise_level: number | null;
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
  isFormComplete: () => boolean;
  isStepComplete: (step: number) => boolean;
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
    wearable_device: [],
    exercise_goal: [],
    exercise_level: null,
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
          updatedForm.start_date = null;
          updatedForm.end_date = null;
        } else if (step === 2) {
          updatedForm.wearable_device = [];
          updatedForm.exercise_goal = [];
          updatedForm.exercise_level = null;
          updatedForm.referral_source = '';
        } else if (step === 3) {
          updatedForm.exercise_concern = '';
        }

        return { form: updatedForm };
      });
    },

    isStepComplete: (step: number) => {
      const { form } = get();

      if (step === 1) {
        return !!(
          form.name &&
          form.birth &&
          form.phone_number &&
          form.email &&
          form.gender &&
          form.start_date
        );
      } else if (step === 2) {
        return !!(
          form.wearable_device &&
          form.exercise_goal &&
          form.exercise_level &&
          form.referral_source
        );
      }

      return false;
    },

    isFormComplete: () => {
      const { form } = get();
      return Object.values(form).every((value) => Boolean(value));
    },
  }));

export const formStore = createFormStore();
