'use client';

import { useState } from 'react';
import Link from 'next/link';

import usePosts from '@/service/getPosts';
import { GetPosts } from '@/types/post';
import BoardList from './BoardList';
import Pagenation from '../../components/Pagenation';

interface IPostData {
  data?: {
    data: GetPosts[] | null;
    count: number;
  };
  isLoading: boolean;
}

export default function Board() {
  const [curPost, setCurPost] = useState(1);
  const limit = 8;
  const { data, isLoading }: IPostData = usePosts({
    from: (curPost - 1) * (limit + 1),
    to: (curPost - 1) * (limit + 1) + limit,
  });
  if (isLoading) return <div>로딩중..</div>;

  return (
    <div className="h-screen-without-nav pb-20 pt-10">
      <Link href="/post" className="">
        글쓰기
      </Link>
      <BoardList data={data?.data ?? []} />
      <Pagenation
        totalCount={data?.count ?? 0}
        limit={limit}
        curPage={curPost}
        setCurPage={setCurPost}
      />
    </div>
  );
}
