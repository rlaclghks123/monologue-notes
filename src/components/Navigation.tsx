import { headers } from 'next/headers';
import Link from 'next/link';

const CATEGORY = [
  { id: 1, name: '게시판', link: '/board' },
  { id: 2, name: '나의 기록', link: '/mypage' },
];

export default async function Navigation() {
  const isUser = headers().get('isUser') === 'true';
  const loginText = isUser ? '로그아웃' : '로그인';

  return (
    <header className="xs:w-full xs:px-2 fixed flex h-16 items-center justify-between bg-white sm:px-16 xl:px-44">
      <div className="flex h-16 w-2/6 items-center justify-between whitespace-nowrap ">
        <Link href="/" className=" xs:text-base font-bold sm:text-2xl">
          독백노트 📚
        </Link>
        <nav>
          <ul className=" flex items-center justify-center">
            {CATEGORY.map((category) => (
              <li
                key={category.id}
                className="xs:text-xs mx-3 cursor-pointer hover:text-gray-300 sm:text-base"
              >
                <Link href={category.link}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Link
        href="/auth"
        className="xs:text-xs flex w-2/6 justify-end hover:text-gray-300 sm:text-base"
      >
        {loginText}
      </Link>
    </header>
  );
}
