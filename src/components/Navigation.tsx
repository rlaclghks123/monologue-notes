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
    <header className="fixed flex h-16 w-screen items-center justify-between bg-white px-52">
      <div className="flex h-16 w-2/6 items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          독백노트 📚
        </Link>
        <nav>
          <ul className=" flex  items-center justify-center ">
            {CATEGORY.map((category) => (
              <li key={category.id} className="mx-3 cursor-pointer">
                <Link href={category.link}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Link href="/auth" className="flex w-2/6 justify-end">
        {loginText}
      </Link>
    </header>
  );
}
