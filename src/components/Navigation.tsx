import { headers } from 'next/headers';
import Link from 'next/link';

const CATEGORY = [
  { id: 1, name: '독백 리스트', link: '/board' },
  { id: 3, name: '추천 도서', link: '/recommend' },
  { id: 2, name: '나의 기록', link: '/mypage' },
];

export default async function Navigation() {
  const isUser = headers().get('isUser') === 'true';
  const loginText = isUser ? '로그아웃' : '로그인';

  return (
    <header className="fixed z-[90] flex h-16 items-center justify-between bg-white xs:w-full xs:px-2 sm:px-16 xl:px-44">
      <div className="flex h-16 w-2/6 items-center justify-between whitespace-nowrap ">
        <Link href="/" className=" font-bold xs:text-base sm:text-2xl" prefetch>
          독백노트 📚
        </Link>
        <nav>
          <ul className="flex items-center justify-center gap-4 xs:ml-2 sm:ml-10">
            {CATEGORY.map((category) => (
              <li
                key={category.id}
                className="cursor-pointer hover:text-gray-300 xs:text-xs sm:text-base"
              >
                <Link href={category.link}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex w-2/6 justify-end ">
        <Link href="/auth" className=" hover:text-gray-300 xs:text-xs sm:text-base">
          {loginText}
        </Link>
      </div>
    </header>
  );
}
