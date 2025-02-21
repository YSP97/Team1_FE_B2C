'use client';
import { memo, useState } from 'react';
import InputBox from './InputBox';
import CalendarInput from './CalendarInput';
import SelectGender from './SelectGender';
import DropBox from './DropBox';
import { useStore } from 'zustand';
import { formStore  } from '../../stores/useFormStore';

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

function Step1() {
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
        <label className="block pb-4 text-md">이름</label>
        <InputBox name="name" value={form.name ?? ''} onChange={handleInput} />
      </fieldset>

      <fieldset>
        <label className="mb-4 block text-md">생년월일</label>
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
      </fieldset>

      <fieldset>
        <label className="mb-4 block text-md">이메일</label>
        <div className="flex items-center gap-2">
          <InputBox
            name="email"
            placeholder="example"
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
      </fieldset>

      <fieldset>
        <label className="mb-4 block text-md">휴대폰 번호</label>
        <div className="flex gap-2">
          <DropBox
            list={['010', '011', '016', '017', '019']}
            isSelected={phoneInput.telPrefix}
            onSelect={handlePhonePrefix}
          />
          -
          <InputBox
            name="telFirst"
            maxLength={4}
            value={phoneInput.telFirst}
            onChange={handleInput}
          />
          -
          <InputBox
            name="telSecond"
            maxLength={4}
            value={phoneInput.telSecond}
            onChange={handleInput}
          />
        </div>
      </fieldset>

      <div>
        <SelectGender onChange={handleGender} isChecked={form.gender} />
      </div>

      <fieldset>
        <label className="mb-4 block text-md">프로그램 시작일</label>
        <CalendarInput
          setSelectedDate={handleCalendar}
          selectedDate={form.start_date}
        />
      </fieldset>

      
    </>
  );
}

export default memo(Step1);
