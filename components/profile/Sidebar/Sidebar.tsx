import Link from 'next/link';
import SignOutButton from './SignOutButton';

type Categories = {
  categories: string[],
}

export default function Sidebar({ categories }: Categories) {
  return (
    <div>
      <ul>
        {categories.map((category) => {
          return (
            <li
              key={category}
              className={`m-2 px-12 py-1.5 text-center font-raleway font-bold text-lg text-rich-bordeaux border-rich-bordeaux border-2  `} >
              <Link href={`/profile/${category}`}>{category}</Link>
            </li>
          );
        })}
        <li className={`m-2 px-12 py-1.5 text-center font-raleway font-bold text-lg text-[#FFF] bg-rich-bordeaux `}><SignOutButton/></li>
      </ul>
    </div>
  );
}
