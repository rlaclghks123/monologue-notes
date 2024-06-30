import Link from 'next/link';

export default function Board() {
  return (
    <div>
      board
      <Link href="/post" className="ml-10 bg-red-300">
        글쓰기
      </Link>
    </div>
  );
}
