import Link from 'next/link';

const CATEGORY = [
  { id: 1, name: '게시판', link: '/board' },
  { id: 2, name: '나의 기록', link: '/mypage' },
];

export default function Navigation() {
  return (
    <header className="fixed flex h-16 w-screen items-center justify-center bg-white px-52">
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
      <div className="flex w-2/6 justify-center">
        <input />
      </div>
      <div className="flex w-2/6 justify-end">로그인</div>
    </header>
  );
}
