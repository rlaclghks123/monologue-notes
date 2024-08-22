import Image from 'next/image';
import Link from 'next/link';

import { ReadPost } from '@/types/post';
import NoImg from '../../../public/images/defaultBook.png';

interface Props {
  post: ReadPost;
}
export default function BoardCard({ post }: Props) {
  return (
    <li className="w-full transform cursor-pointer flex-col truncate rounded-xl border border-black bg-white p-2 shadow-md transition duration-300 hover:scale-105 xs:h-24 sm:h-32 xl:h-36">
      <Link href={`/detail/${post.id}`} className="flex h-full items-center" prefetch>
        <Image
          src={post.cover || NoImg}
          width={120}
          height={50}
          alt="커버 이미지"
          priority
          className="h-full rounded-xl bg-gray-200 xs:min-w-16 xs:max-w-16 sm:min-w-20 sm:max-w-20 xl:min-w-24 xl:max-w-24"
        />
        <div className="ml-4 flex h-full w-full flex-col justify-evenly truncate text-xs">
          <p>{`제목 : ${post.title}`}</p>
          <p>{`출판사 : ${post.publisher}`}</p>
          <p>{`독백자 : ${post.nickname ?? '익명'}`}</p>
        </div>
      </Link>
    </li>
  );
}
