import Link from 'next/link';
import React from 'react'
type Categories = {
    categories: string[],
}

export default function Sidebar({ categories}: Categories) {
    return (
        <div>
          <ul>
          { categories.map((category) => {
            return (
        <li
                key={category}
                className={`m-2 px-12 py-1.5 text-center font-raleway font-bold text-lg text-rich-bordeaux border-rich-bordeaux border-2  `} >
                <Link href={`/profile/${category}`}>{category}</Link>
            </li>
    
    );
          })}
          </ul>
        </div>
      );
}
