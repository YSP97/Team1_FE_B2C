import { useCallback, useState } from 'react';
import Card from './../../components/Card';
import { mockDataCardList } from '@/mockData/mockCardList';

export default function Pricing() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = useCallback((id: number) => {
    setSelectedCard((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="h-[calc(100vh-48px)] bg-bg-primary md:h-[calc(100vh-60px)]">
      <h1 className="flex flex-col py-8 text-center text-xl text-white">
        비대면 운동관리 프로그램{' '}
        <strong className="text-primary">핏큘레이터 신청하기</strong>
      </h1>
      <div className="flex flex-col gap-6 p-6 md:m-auto md:max-w-7xl md:flex-row">
        {mockDataCardList.map((card) => (
          <Card
            key={card.id}
            {...card}
            isSelected={selectedCard === card.id}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
}
