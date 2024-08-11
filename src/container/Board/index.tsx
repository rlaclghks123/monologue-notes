import { User } from '@supabase/supabase-js';
import Link from 'next/link';
import { ReadPost } from '@/types/post';
import { POSTS_LIMIT } from '@/utils/constants';
import BoardList from './BoardList';
import Pagenation from '../../components/Pagenation';

interface Props {
  curPage: number;
  posts: ReadPost[];
  count: number;
  user: User | null;
}

export default function Board({ curPage, posts, count, user }: Props) {
  return (
    <div className="h-screen-without-nav pb-20 pt-5">
      <div className="mb-2 flex h-8 justify-end">
        {user && (
          <Link
            href="/post"
            className=" z-10 rounded-lg border border-solid border-gray-300 p-1 px-2 hover:bg-gray-300 hover:text-white"
          >
            작성하기 ✏️
          </Link>
        )}
      </div>
      <BoardList posts={posts ?? []} />
      <Pagenation totalCount={count} limit={POSTS_LIMIT} curPage={curPage} />
    </div>
  );
}
