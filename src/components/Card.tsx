interface CardProps {
  title: string;
  price: string;
  basis: string;
  desc: string;
  list: {
    text: string;
    sub?: string | string[];
  }[];
}

export default function Card({ title, price, basis, desc, list }: CardProps) {
  return (
    <article className='flex-1 flex flex-col gap-8 p-8 bg-gray-500 border border-gray-200 rounded-lg hover:border-t-8 hover:border-t-primary box-border hover:scale-105 transition-transform duration-300'>
      <dl className='basis-auto flex flex-col gap-1'>
        <dt className='text-white text-3xl font-medium'>{title}</dt>
        <dd className='flex items-end space-x-2'>
          <strong className='text-6xl text-white'>{price}</strong>
          <span className='pb-1 text-2xl text-white'>/ {basis}</span>
        </dd>
        <dd className='text-white text-lg'>{desc}</dd>
      </dl>
      <ul
        role='list'
        className='flex-1 flex flex-col pt-6 border-t border-white gap-4'
      >
        {list.map((item, index) => (
          <li key={index} role='listitem' className='flex flex-col gap-2'>
            <p className='text-2xl text-white font-medium'>
              <span aria-hidden='true' className='pr-2'>
                ✅
              </span>
              {item.text}
            </p>
            {item.sub && (
              <div className='pl-10 text-lg text-gray-100 font-medium'>
                {typeof item.sub === "string" ? (
                  <p>{item.sub}</p>
                ) : Array.isArray(item.sub) ? (
                  <ul>
                    {item.sub.map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}
