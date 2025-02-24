type FormData = {
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

export const formatFormData = (form: FormData) => {
  return `
📌 *신규 신청서 접수됨!*
- *프로그램 ID:* ${form.program_id}
- *이름:* ${form.name}
- *생년월일:* ${form.birth?.toISOString().split('T')[0]}
- *전화번호:* ${form.phone_number}
- *이메일:* ${form.email}
- *성별:* ${form.gender}
- *시작일:* ${form.start_date?.toISOString().split('T')[0]}
- *종료일:* ${form.end_date?.toISOString().split('T')[0]}
- *착용 기기:* ${form.wearable_device?.length > 0 && form.wearable_device.join(', ')}
- *운동 목표:* ${form.exercise_goal?.length > 0 && form.exercise_goal.join(', ')}
- *운동 레벨:* ${form.exercise_level}
- *운동 고민:* ${form.exercise_concern}
- *추천 경로:* ${form.referral_source}
  `;
};

export const sendFormToSlack = async (form: FormData) => {
  const message = formatFormData(form);

  try {
    const response = await fetch('/api/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`백엔드 API Error: ${response.statusText}`);
    }
    return true;
  } catch (error) {
    return false;
  }
};
