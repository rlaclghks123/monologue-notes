'use client';

import Image from 'next/image';
import Link from 'next/link';

import { GetPosts } from '@/types/post';
import NoImg from '../../../public/images/defaultBook.png';

interface Props {
  posts: GetPosts[];
}

export default function BoardList({ posts }: Props) {
  return (
    <div className=" h-full rounded-lg bg-white p-2">
      <ol className="grid-rows-3-equal grid h-full grid-cols-3 gap-2 overflow-scroll ">
        {posts.map((post) => (
          <li
            key={post.id}
            className="h-full w-full cursor-pointer flex-col truncate rounded-lg border border-black p-2 hover:border hover:border-solid hover:border-gray-300"
          >
            <Link href={`detail/${post.id}`} className="flex h-full items-center ">
              <Image
                src={post.cover || NoImg}
                width={120}
                height={50}
                alt="커버 이미지"
                className="h-32 min-w-24 max-w-24 rounded-xl"
              />
              <div className="ml-2 flex h-full w-full flex-col gap-4 py-5 text-xs">
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
