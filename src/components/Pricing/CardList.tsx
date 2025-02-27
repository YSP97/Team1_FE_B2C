import { useCallback } from 'react';
import { mockDataCardList } from '@/mockData/mockCardList';
import Card from '@/components/Pricing/Card';

interface CardListProps {
  selectedCard: number | null;
  setSelectedCard: React.Dispatch<React.SetStateAction<number | null>>;
}

function CardList({ selectedCard, setSelectedCard }: CardListProps) {
  const handleCardClick = useCallback(
    (id: number) => {
      setSelectedCard(id === selectedCard ? null : id);
    },
    [selectedCard, setSelectedCard],
  );

  return (
    <div className="card_list flex flex-col gap-6 md:m-auto md:max-w-[80rem] md:flex-row">
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
