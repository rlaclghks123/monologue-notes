'use client';

import Link from 'next/link';
import { useState } from 'react';

import { PostAndCountData } from '@/types/post';
import BoardList from './BoardList';
import Pagenation from '../../components/Pagenation';
import { useUser } from '@/service/user';
import usePosts from '@/service/getPosts';

export default function Board() {
  const { data: userData } = useUser();
  const [curPost, setCurPost] = useState(1);
  const limit = 8;

  const { data: postData }: PostAndCountData = usePosts({
    from: (curPost - 1) * (limit + 1),
    to: (curPost - 1) * (limit + 1) + limit,
  });

  return (
    <div className="h-screen-without-nav pb-20 pt-5">
      <div className="mb-2 flex justify-end">
        {userData && (
          <Link
            href="/post"
            className=" rounded-lg border border-solid border-gray-300 p-1 px-2 hover:bg-gray-300 hover:text-white"
          >
            작성하기 ✏️
          </Link>
        )}
      </div>

      <BoardList posts={postData?.data ?? []} />
      <Pagenation
        totalCount={postData?.count ?? 0}
        limit={limit}
        curPage={curPost}
        setCurPage={setCurPost}
      />
    </div>
  );
}
