import Link from 'next/link';
import navigation from './navigation';

export default function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <ul className="flex flex-col md:flex-row gap-10 font-medium">
      {navigation.map((item, index) => (
        <li
          key={index}
          className="py-3 md:py-[17px] hover:text-primary transition-all duration-200 md:hover:shadow-[0px_2px_0px_0px] hover:shadow-primary hover:font-bold">
          {item.external ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClick}>
              {item.label}
            </a>
          ) : (
            <Link href={item.href} onClick={onClick} >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
