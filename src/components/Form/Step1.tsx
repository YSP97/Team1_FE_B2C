'use client';
import { memo, useState, useCallback } from 'react';
import InputBox from './InputBox';
import CalendarInput from './CalendarInput';
import SelectGender from './SelectGender';
import DropBox from './DropBox';
import { useStore } from 'zustand';
import { formStore } from '../../stores/useFormStore';
import { debounce } from 'lodash-es';

type BirthInputType = { year: string; month: string; day: string };
type PhoneInputType = {
  telPrefix: string;
  telFirst: string;
  telSecond: string;
};
type EmailInputType = { localPart: string; domain: string };
type ErrorPropsType = { errors: { [key: string]: string } };

function Step1({ errors }: ErrorPropsType) {
  const { form, updateForm } = useStore(formStore);

  const [birthInput, setBirthInput] = useState<BirthInputType>({
    year: '',
    month: '',
    day: '',
  });
  const [phoneInput, setPhoneInput] = useState<PhoneInputType>({
    telPrefix: '010',
    telFirst: '',
    telSecond: '',
  });
  const [emailInput, setEmailInput] = useState<EmailInputType>({
    localPart: '',
    domain: 'domain.com',
  });

  // ✅ `useCallback`을 사용하여 debounce된 함수 생성
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updatePhoneNumber = useCallback(
    debounce((updatedPhoneInput: PhoneInputType) => {
      const { telPrefix, telFirst, telSecond } = updatedPhoneInput;
      if (telPrefix && telFirst.length === 4 && telSecond.length === 4) {
        updateForm('phone_number', `${telPrefix}${telFirst}${telSecond}`);
      }
    }, 1000),
    [updateForm],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateEmail = useCallback(
    debounce((updatedEmailInput: EmailInputType) => {
      const { localPart, domain } = updatedEmailInput;
      if (localPart && domain) {
        updateForm('email', `${localPart}@${domain}`);
      }
    }, 1000),
    [updateForm],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateBirth = useCallback(
    debounce((updatedBirthInput: BirthInputType) => {
      const { year, month, day } = updatedBirthInput;
      if (year.length === 4 && month.length === 2 && day.length === 2) {
        const birthDate = new Date(
          Number(year),
          Number(month) - 1,
          Number(day),
        );
        updateForm('birth', birthDate);
      }
    }, 1000),
    [updateForm],
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (['year', 'month', 'day'].includes(name)) {
      const newBirthInput = { ...birthInput, [name]: value };
      setBirthInput(newBirthInput);
      updateBirth(newBirthInput);
    } else if (['telFirst', 'telSecond'].includes(name)) {
      const newPhoneInput = { ...phoneInput, [name]: value };
      setPhoneInput(newPhoneInput);
      updatePhoneNumber(newPhoneInput);
    } else if (name === 'email') {
      const newEmailInput = { ...emailInput, localPart: value };
      setEmailInput(newEmailInput);
      updateEmail(newEmailInput);
    } else {
      updateForm(name as keyof typeof form, value);
    }
  };

  const handlePhonePrefix = (selectedNum: string) => {
    const newPhoneInput = { ...phoneInput, telPrefix: selectedNum };
    setPhoneInput(newPhoneInput);
    updatePhoneNumber(newPhoneInput);
  };

  const handleMailDomain = (selectedDomain: string) => {
    const newEmailInput = { ...emailInput, domain: selectedDomain };
    setEmailInput(newEmailInput);
    updateEmail(newEmailInput);
  };

  const handleGender = (selectedGender: string) => {
    updateForm('gender', selectedGender);
  };

  const handleCalendar = (selectedDate: Date) => {
    const endDate = new Date(selectedDate);
    endDate.setMonth(endDate.getMonth() + 1);
    updateForm('start_date', selectedDate);
    updateForm('end_date', endDate);
  };

  return (
    <>
      <fieldset>
        <label className="block pb-4 text-md" htmlFor="input-name">
          이름
        </label>
        <InputBox
          name="name"
          value={form.name ?? ''}
          onChange={handleInput}
          placeholder="예) 홍길동"
        />
        <span className="mt-2 text-sm text-primary-red">{errors.name}</span>
      </fieldset>

      <fieldset>
        <legend className="mb-4 block text-md">생년월일</legend>
        <div className="flex items-center gap-2 text-gray-400">
          <InputBox
            name="year"
            placeholder="YYYY"
            maxLength={4}
            value={birthInput.year}
            onChange={handleInput}
          />
          /
          <InputBox
            name="month"
            placeholder="MM"
            maxLength={2}
            value={birthInput.month}
            onChange={handleInput}
          />
          /
          <InputBox
            name="day"
            placeholder="DD"
            maxLength={2}
            value={birthInput.day}
            onChange={handleInput}
          />
        </div>
        <span className="mt-2 text-sm text-primary-red">{errors.birth}</span>
      </fieldset>

      <fieldset>
        <legend className="mb-4 block text-md">이메일</legend>
        <div className="flex items-center gap-2">
          <InputBox
            name="email"
            placeholder="아이디"
            value={emailInput.localPart}
            onChange={handleInput}
          />
          @
          <DropBox
            list={['gmail.com', 'naver.com', 'daum.net', 'kakao.com']}
            isSelected={emailInput.domain}
            onSelect={handleMailDomain}
          />
        </div>
        <span className="mt-2 text-sm text-primary-red">{errors.email}</span>
      </fieldset>

      <fieldset>
        <legend className="mb-4 block text-md">휴대폰 번호</legend>
        <div className="flex gap-2">
          <DropBox
            list={['010', '011', '016']}
            isSelected={phoneInput.telPrefix}
            onSelect={handlePhonePrefix}
          />
          -
          <InputBox
            name="telFirst"
            placeholder="0000"
            maxLength={4}
            value={phoneInput.telFirst}
            onChange={handleInput}
          />
          -
          <InputBox
            name="telSecond"
            maxLength={4}
            placeholder="0000"
            value={phoneInput.telSecond}
            onChange={handleInput}
          />
        </div>
        <span className="mt-2 text-sm text-primary-red">
          {errors.phone_number}
        </span>
      </fieldset>

      <SelectGender onChange={handleGender} isChecked={form.gender} />
      <CalendarInput
        setSelectedDate={handleCalendar}
        selectedDate={form.start_date}
      />
    </>
  );
}

export default memo(Step1);
