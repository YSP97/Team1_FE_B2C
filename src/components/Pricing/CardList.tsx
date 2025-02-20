import { useCallback, useState } from 'react';
import { mockDataCardList } from '@/mockData/mockCardList';
import Card from '@/components/Pricing/Card';

function CardList() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = useCallback(
    (id: number) => {
      setSelectedCard(id === selectedCard ? null : id);
    },
    [selectedCard],
  );

  return (
    <div className="flex flex-col gap-6">
      {mockDataCardList.map((card) => (
        <Card
          key={card.id}
          {...card}
          isSelected={selectedCard === card.id}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
}

export default CardList;
