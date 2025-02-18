import CheckedText from "./CheckedText";

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

const cardClassName = (isSelected: boolean) =>
  [
    "relative overflow-hidden flex-1 flex flex-col gap-4 py-6 px-4 md:p-6 bg-bg-primary border border-gray-200 rounded-base box-border",
    "transition-transform duration-300",
    // before
    "before:content-[''] before:absolute before:top-0 before:left-0",
    "before:w-full before:h-2",
    isSelected ? "before:bg-primary" : "before:bg-transparent",
    // hover
    "hover:before:bg-primary hover:scale-105",
  ].join(" ");

export default function Card({
  emoji,
  title,
  price,
  basis,
  desc,
  list,
  isSelected = false,
  onClick,
}: CardProps) {
  return (
    <article className={cardClassName(isSelected)} onClick={onClick}>
      {isSelected && (
        <svg
          aria-hidden='true'
          className='absolute right-4 w-6 md:w-8 h-6 md:h-8 text-primary'
        >
          <use href='assets/sprite.svg#icon-task' />
        </svg>
      )}
      <dl className='basis-auto flex flex-col'>
        <dt className='text-white text-lg font-medium'>
          <span aria-hidden='true' className='pr-1'>
            {emoji}
          </span>
          {title}
        </dt>
        <dd className='flex items-end space-x-2'>
          <strong className='text-xl text-white'>{price}</strong>
          <span className='pb-1 text-base text-gray-100'>/ {basis}</span>
        </dd>
        <dd className='text-white text-base'>{desc}</dd>
      </dl>
      <ul
        role='list'
        className='flex-1 flex flex-col pt-4 border-t border-white/30 gap-2'
      >
        {list.map((item, index) => (
          <CheckedText key={index} text={item.text} subText={item.subText} />
        ))}
      </ul>
    </article>
  );
}
