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
