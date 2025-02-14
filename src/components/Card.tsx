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
}

const cardClassName = [
  "relative overflow-hidden flex-1 flex flex-col gap-8 p-8",
  "bg-bg-primary border border-gray-200 rounded-base box-border",
  "before:content-[''] before:absolute before:top-0 before:left-0",
  "before:w-full before:h-[12px] before:bg-transparent", // 기본 상태에서 transparent
  "transition-transform duration-300 hover:scale-105",
  "hover:before:bg-primary", // hover 시에만 bg-primary 적용
].join(" ");

export default function Card({
  emoji,
  title,
  price,
  basis,
  desc,
  list,
}: CardProps) {
  return (
    <article className={cardClassName}>
      <dl className='basis-auto flex flex-col gap-1'>
        <dt className='text-white text-lg font-medium'>
          <span aria-hidden='true' className='pr-1'>
            {emoji}
          </span>
          {title}
        </dt>
        <dd className='flex items-end space-x-2'>
          <strong className='text-xl text-white'>{price}</strong>
          <span className='pb-1 text-base text-white'>/ {basis}</span>
        </dd>
        <dd className='text-white text-base'>{desc}</dd>
      </dl>
      <ul
        role='list'
        className='flex-1 flex flex-col pt-6 border-t border-gray-300 gap-2'
      >
        {list.map((item, index) => (
          <CheckedText key={index} text={item.text} subText={item.subText} />
        ))}
      </ul>
    </article>
  );
}
