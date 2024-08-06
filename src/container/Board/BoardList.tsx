import Image from 'next/image';
import Link from 'next/link';

import { GetPosts } from '@/types/post';
import NoImg from '../../../public/images/defaultBook.png';

interface Props {
  posts: GetPosts[];
}

export default function BoardList({ posts }: Props) {
  return (
    <div className=" h-full overflow-scroll rounded-lg bg-white">
      <ol className="grid gap-2 xs:grid-cols-1 xs:gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:grid-rows-3-equal">
        {posts.map((post) => (
          <li
            key={post.id}
            className="h-full w-full cursor-pointer flex-col truncate rounded-lg border border-black p-2 hover:border hover:border-solid hover:border-gray-300"
          >
            <Link href={`detail/${post.id}`} className="flex h-full items-center">
              <Image
                src={post.cover || NoImg}
                width={120}
                height={50}
                alt="커버 이미지"
                priority
                className="h-full rounded-xl xs:min-w-16 xs:max-w-16 sm:min-w-20 sm:max-w-20 xl:min-w-24 xl:max-w-24"
              />
              <div className="ml-2 flex h-full w-full flex-col justify-evenly truncate text-xs">
                <p>{`제목 : ${post.title}`}</p>
                <p>{`출판사 : ${post.publisher}`}</p>
                <p>{`독백자 : ${post.nickname ?? '익명'}`}</p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
