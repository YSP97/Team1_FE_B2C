import CheckedText from '@/components/CheckedText';
import SVGIcon from '@/components/SVGIcon';
import TagManager from 'react-gtm-module';

interface CardProps {
  emoji: string;
  title: string;
  price: string;
  basis: string;
  desc: string;
  list: {
    text: string;
    subText?: string | string[];
  }[];
  isSelected?: boolean;
  onClick: () => void;
}

const cardClassName = (isSelected: boolean, title: string) => {
  const baseClasses = [
    'relative overflow-hidden flex-1 flex flex-col gap-4 py-6 px-4 md:p-6 bg-bg-primary border border-gray-200 rounded-base box-border',
    'transition-transform duration-300',
    // before
    "before:content-[''] before:absolute before:top-0 before:left-0",
    'before:w-full before:h-2',
    isSelected ? 'before:bg-primary' : 'before:bg-transparent',
    // hover
    'hover:before:bg-primary hover:scale-105',
  ];

  const titleClass = title.toLowerCase();
  const titleSpecificClass =
    titleClass === 'basic'
      ? 'card_basic'
      : titleClass === 'plus'
        ? 'card_plus'
        : titleClass === 'pro'
          ? 'card_pro'
          : '';

  return [...baseClasses, titleSpecificClass].join(' ');
};

function Card({
  emoji,
  title,
  price,
  basis,
  desc,
  list,
  isSelected = false,
  onClick,
}: CardProps) {
  const handleClick = () => {
    // GTM에 클릭된 카드 정보 전송
    TagManager.dataLayer({
      dataLayer: {
        event: 'plan_card_click',
        card_title: title,
        card_price: price,
        card_basis: basis,
        is_selected: isSelected, // 선택된 카드인지 여부
      },
    });
    console.log(title);

    // 원래의 onClick 핸들러 실행
    onClick();
  };

  return (
    // id 추가
    <article
      className={cardClassName(isSelected, title)}
      onClick={() => {
        onClick();
        handleClick();
      }}
    >
      {isSelected && (
        <SVGIcon
          name="icon-task"
          size={32}
          className="absolute right-4 text-primary"
        />
      )}
      <dl className="flex basis-auto flex-col">
        <dt className="text-lg font-medium text-white">
          <span aria-hidden="true" className="pr-1">
            {emoji}
          </span>
          {title}
        </dt>
        <dd className="flex items-end space-x-2">
          <strong className="text-xl text-white">{price}</strong>
          <span className="pb-1 text-base text-gray-100">/ {basis}</span>
        </dd>
        <dd className="text-base text-white">{desc}</dd>
      </dl>
      <ul
        role="list"
        className="border-white/30 flex flex-1 flex-col gap-2 border-t pt-4"
      >
        {list.map((item, index) => (
          <CheckedText key={index} text={item.text} subText={item.subText} />
        ))}
      </ul>
    </article>
  );
}

export default Card;
