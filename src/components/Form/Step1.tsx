'use client';
import { memo, useState } from 'react';
import InputBox from './InputBox';
import CalendarInput from './CalendarInput';
import SelectGender from './SelectGender';
import DropBox from './DropBox';
import { useStore } from 'zustand';
import { formStore } from '../../stores/useFormStore';

type BirthInputType = {
  year: string;
  month: string;
  day: string;
};

type PhoneInputType = {
  telPrefix: string;
  telFirst: string;
  telSecond: string;
};

type EmailInputType = {
  localPart: string;
  domain: string;
};

type ErrorPropsType = {
  errors: { [key: string]: string };
};

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

  const updatePhoneNumber = (updatedPhoneInput: PhoneInputType) => {
    const { telPrefix, telFirst, telSecond } = updatedPhoneInput;
    if (telPrefix && telFirst.length === 4 && telSecond.length === 4) {
      const phoneNumber = `${telPrefix}${telFirst}${telSecond}`;
      updateForm('phone_number', phoneNumber);
    }
  };

  const updateEmail = (updatedEmailInput: EmailInputType) => {
    const { localPart, domain } = updatedEmailInput;
    if (localPart && domain) {
      const email = `${localPart}@${domain}`;
      updateForm('email', email);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (['year', 'month', 'day'].includes(name)) {
      const newBirthInput = { ...birthInput, [name]: value };
      setBirthInput(newBirthInput);

      if (
        newBirthInput.year.length === 4 &&
        newBirthInput.month.length === 2 &&
        newBirthInput.day.length === 2
      ) {
        const { year, month, day } = newBirthInput;
        const birthDate = new Date(
          Number(year),
          Number(month) - 1,
          Number(day),
        );

        updateForm('birth', birthDate);
      }
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
          <label className="sr-only" htmlFor="input-year">
            연도
          </label>
          <InputBox
            name="year"
            placeholder="YYYY"
            maxLength={4}
            value={birthInput.year}
            onChange={handleInput}
          />
          /
          <label className="sr-only" htmlFor="input-month">
            월
          </label>
          <InputBox
            name="month"
            placeholder="MM"
            maxLength={2}
            value={birthInput.month}
            onChange={handleInput}
          />
          /
          <label className="sr-only" htmlFor="input-day">
            일일
          </label>
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
          <label className="sr-only" htmlFor="input-email">
            이메일 아이디
          </label>
          <InputBox
            name="email"
            placeholder="아이디"
            value={emailInput.localPart}
            onChange={handleInput}
          />
          @
          <DropBox
            list={[
              'gmail.com',
              'naver.com',
              'daum.net',
              'kakao.com',
              'nate.com',
            ]}
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
            list={['010', '011', '016', '017', '019']}
            isSelected={phoneInput.telPrefix}
            onSelect={handlePhonePrefix}
          />
          -
          <label className="sr-only" htmlFor="input-telFirst">
            휴대전화 앞자리 숫자
          </label>
          <InputBox
            name="telFirst"
            placeholder="0000"
            maxLength={4}
            value={phoneInput.telFirst}
            onChange={handleInput}
          />
          -
          <label className="sr-only" htmlFor="input-telSecond">
            휴대전화 뒷자리 숫자
          </label>
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

      <div>
        <SelectGender onChange={handleGender} isChecked={form.gender} />
        <span className="mt-2 text-sm text-primary-red">{errors.gender}</span>
      </div>

      <fieldset>
        <label className="mb-4 block text-md">프로그램 시작일</label>
        <CalendarInput
          setSelectedDate={handleCalendar}
          selectedDate={form.start_date}
        />
        <span className="mt-2 text-sm text-primary-red">
          {errors.start_date}
        </span>
      </fieldset>
    </>
  );
}

export default memo(Step1);
