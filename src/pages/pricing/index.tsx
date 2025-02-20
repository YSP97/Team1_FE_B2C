import Button from '@/components/Button';
import Modal from '@/components/Modal/Modal';
import CardList from '@/components/Pricing/CardList';
import { useCallback, useState } from 'react';

const questions = [
  {
    id: 1,
    question: '운동 경험이 있으신가요?',
    description: '본인에게 알맞은 선택지를 골라주세요.',
    options: ['처음 운동해요', '다시 시작해요', '운동을 많이 해봤어요'],
  },
  {
    id: 2,
    question: '1:1 코칭이 필요하신가요?',
    description: '본인에게 알맞은 선택지를 골라주세요.',
    options: ['아니요', '네'],
  },
  {
    id: 3,
    question: '', // 선택에 따라 동적으로 변경
    description: '해당 플랜을 신청하시겠습니까?',
    options: ['아니요', '네'],
    planType: {
      Basic: 'Basic 플랜을 추천드립니다.',
      Plus: 'Plus 플랜을 추천드립니다.',
      Pro: 'Pro 플랜을 추천드립니다.',
    },
  },
];

export default function Pricing() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  // '나에게 딱 맞는 플랜을 찾고 싶다면?' 버튼 클릭 시
  const handleToggleModal = useCallback(() => {
    setIsModalOpened((prev) => !prev);
  }, []);

  return (
    <div className="mt-[3rem] flex flex-col gap-6 p-6 md:mt-[3.75rem]">
      <div className="flex flex-col items-center gap-4 bg-bg-primary p-4">
        <h2 className="flex flex-col items-center text-lg text-white">
          비대면 운동관리 프로그램{' '}
          <strong className="font-semibold text-primary">
            핏큘레이터 신청하기
          </strong>
        </h2>
        <Button
          type="secondary"
          rounded="rounded-lg"
          className="font-normal"
          onClick={handleToggleModal}
        >
          나에게 딱 맞는 플랜을 찾고 싶다면?
        </Button>
      </div>
      <CardList />
      <Button
        type="primary"
        className="md:m-auto md:px-20"
        onClick={() => {
          console.log('선택한 플랜으로 신청하기');
        }}
      >
        선택한 플랜으로 신청하기
      </Button>

      <Modal
        title="어떤 플랜을 선택할지 고민되시나요?"
        isOpened={isModalOpened}
        onClose={handleToggleModal}
      >
        <div className="flex flex-col gap-12 overflow-auto px-6 md:gap-[3rem] md:px-10">
          {questions.map(({ id, question, description, options, planType }) => (
            <dl key={id} className="flex flex-col gap-6">
              <dt className="flex flex-1 flex-col text-md">
                {planType ? planType.Basic : question}{' '}
                <span className="text-base text-gray-100">{description}</span>
              </dt>
              <dd className="flex flex-1 flex-col gap-4 md:flex-row">
                {options.map((option) => (
                  <Button key={option} type="secondary" className="md:flex-1">
                    {option}
                  </Button>
                ))}
              </dd>
              {id !== question.length && <hr className="border-gray-400" />}
            </dl>
          ))}
        </div>
      </Modal>
    </div>
  );
}
