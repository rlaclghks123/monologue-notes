'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CATEGORY = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Category', link: '/category' },
];

export default function Navigation() {
  const path = usePathname();
  if (path === '/') return null;

  return (
    <header className="bg-dark-brown w-screen h-16">
      <nav>
        <ul className=" flex items-center justify-center text-light-beige h-16 ">
          {CATEGORY.map((category) => (
            <li key={category.id} className="mx-3 text-2xl cursor-pointer text-light-beige">
              <Link href={category.link}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
