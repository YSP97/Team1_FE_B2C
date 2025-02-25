import Button from '@/components/Button';
import Modal from '@/components/Modal/Modal';
import CardList from '@/components/Pricing/CardList';
import Refund from '@/components/Pricing/Refund';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

type Question = {
  id: number;
  question: string;
  description: string;
  options: string[];
};

type Answers = {
  [key: number]: string | null;
};

const questions: Question[] = [
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
  },
];

export default function Pricing() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [answers, setAnswers] = useState<Answers>({ 1: null, 2: null });
  const [finalQuestions, setFinalQuestions] = useState<Question[]>(questions); // 추천 플랜
  const [selectedCard, setSelectedCard] = useState<number | null>(null); // 선택된 카드 상태
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const router = useRouter();

  // '나에게 딱 맞는 플랜을 찾고 싶다면?' 버튼 클릭 시
  const handleToggleModal = useCallback(() => {
    setIsModalOpened((prev) => !prev);
  }, []);

  useEffect(() => {
    if (selectedCard === 1) {
      setSelectedPlan('BASIC');
    }
    if (selectedCard === 2) {
      setSelectedPlan('PLUS');
    }
    if (selectedCard === 3) {
      setSelectedPlan('PRO');
    }
  }, [selectedCard, selectedPlan]);
  const handlePushQuery = () => {
    const plan = selectedPlan;
    if (!plan) alert('플랜을 선택해주세요');
    if (plan) {
      setSelectedPlan(plan); // 상태 업데이트
      router.push(`pricing/register?q=${selectedPlan}`);
    }
  };
  // 선택 시 state 업데이트
  const handleAnswerSelect = (questionId: number, option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const resetModal = () => {
    setAnswers({ 1: null, 2: null });
    setIsModalOpened(false);
  };

  const handleYesClick = () => {
    console.log('플랜 신청 진행');
    // 추천된 플랜에 맞는 카드 선택
    let recommendedCardId = null;

    const recommendedPlan = getRecommendedPlan(answers);

    // 추천 플랜에 맞는 카드 결정
    if (recommendedPlan === 'Basic 플랜을 추천드립니다.') {
      recommendedCardId = 1; // Basic 카드
    } else if (recommendedPlan === 'Plus 플랜을 추천드립니다.') {
      recommendedCardId = 2; // Plus 카드
    } else if (recommendedPlan === 'Pro 플랜을 추천드립니다.') {
      recommendedCardId = 3; // Pro 카드
    }

    setSelectedCard(recommendedCardId);
    resetModal();
    setIsModalOpened(false);
  };

  const handleNoClick = () => {
    console.log('플랜 신청 취소');
    setSelectedCard(null);
    resetModal();
    setIsModalOpened(false);
  };

  // 추천 플랜 결정 로직
  const getRecommendedPlan = (answers: Answers): string => {
    const experience = answers[1];
    const coaching = answers[2];

    if (!experience || !coaching) {
      return '추천 플랜을 선택해주세요.';
    }

    if (coaching === '네') return 'Pro 플랜을 추천드립니다.';
    if (experience === '처음 운동해요' || experience === '다시 시작해요') {
      return 'Plus 플랜을 추천드립니다.';
    }
    if (experience === '운동을 많이 해봤어요') {
      return 'Basic 플랜을 추천드립니다.';
    }

    return '추천 플랜을 선택해주세요.';
  };

  // answers 상태가 변경될 때 추천 플랜 업데이트
  useEffect(() => {
    const updatedQuestions = questions.map((q) =>
      q.id === 3 ? { ...q, question: getRecommendedPlan(answers) } : q,
    );
    setFinalQuestions(updatedQuestions);
  }, [answers]);

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
          onClick={() => {
            console.log('클릭');
          }}
        >
          나에게 딱 맞는 플랜을 찾고 싶다면?
        </Button>
      </div>
      <CardList selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
      <Button
        type="primary"
        className="mb-6 md:m-auto md:mb-8 md:mt-4 md:px-20"
        onClick={handlePushQuery}
        disabled={selectedCard ? false : true}
      >
        선택한 플랜으로 신청하기
      </Button>

      <Refund />

      <Modal
        title="어떤 플랜을 선택할지 고민되시나요?"
        isOpened={isModalOpened}
        onClose={() => {
          setAnswers({ 1: null, 2: null });
          handleToggleModal();
        }}
      >
        <div className="flex flex-col gap-12 overflow-auto px-6 md:gap-[3rem] md:px-10">
          {finalQuestions.map(({ id, question, description, options }) => (
            <React.Fragment key={id}>
              <dl
                className={
                  id === 1
                    ? 'flex flex-col gap-6'
                    : 'flex flex-col gap-6 md:flex-row'
                }
              >
                <dt className="flex flex-1 flex-col gap-1 text-md font-semibold">
                  {question}
                  <span className="text-base text-gray-100">{description}</span>
                </dt>
                <dd className="flex flex-1 flex-col gap-4 md:flex-row">
                  {options.map((option) => (
                    <Button
                      key={option}
                      type={answers[id] === option ? 'primary' : 'secondary'}
                      className="md:flex-1"
                      onClick={() => {
                        handleAnswerSelect(id, option);
                        if (id === 3) {
                          if (option === '네') {
                            handleYesClick();
                          } else {
                            handleNoClick();
                          }
                        }
                      }}
                    >
                      {option}
                    </Button>
                  ))}
                </dd>
              </dl>
              {id !== finalQuestions.length && (
                <hr className="border-gray-400" />
              )}
            </React.Fragment>
          ))}
        </div>
      </Modal>
    </div>
  );
}
