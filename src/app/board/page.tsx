'use client';

import { useState } from 'react';

import Board from '@/container/Board';
import usePosts from '@/service/getPosts';
import { useUser } from '@/service/user';
import { PostAndCountData } from '@/types/post';

export default function BoardPage() {
  const { data: userData } = useUser();
  const [curPost, setCurPost] = useState(1);
  const limit = 8;

  const { data: postData, isLoading }: PostAndCountData = usePosts({
    from: (curPost - 1) * (limit + 1),
    to: (curPost - 1) * (limit + 1) + limit,
  });

  if (isLoading) return <div>로딩중...</div>;

  return (
    <Board
      userData={userData}
      postData={postData}
      curPost={curPost}
      setCurPost={setCurPost}
      limit={limit + 1}
    />
  );
}
