'use client';

import { User } from '@supabase/supabase-js';
import Link from 'next/link';

import { PostAndCountData } from '@/types/post';
import BoardList from './BoardList';
import Pagenation from '../../components/Pagenation';

interface Props {
  userData?: User | null;
  postData: PostAndCountData['data'];
  curPost: number;
  setCurPost: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
}

export default function Board({ userData, postData, curPost, setCurPost, limit }: Props) {
  return (
    <div className="h-screen-without-nav pb-20 pt-10">
      {userData && (
        <Link href="/post" className="">
          글쓰기
        </Link>
      )}
      <BoardList posts={postData?.data ?? []} userData={userData} />
      <Pagenation
        totalCount={postData?.count ?? 0}
        limit={limit}
        curPage={curPost}
        setCurPage={setCurPost}
      />
    </div>
  );
}
