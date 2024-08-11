'use client';

import { User } from '@supabase/supabase-js';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import ToastUI from '@/components/ToastUI';
import useAlertTimer from '@/hooks/useAlertTimer';

import { createPostState, deletePostState, updatePostState } from '@/store/slices/alertSlice';
import { RootAlertState } from '@/types/alertStore';

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
  const updateAlert = useSelector((state: RootAlertState) => state.alert.updateState);
  const createAlert = useSelector((state: RootAlertState) => state.alert.createState);
  const deleteAlert = useSelector((state: RootAlertState) => state.alert.deleteState);

  useAlertTimer(updateAlert, null, () => updatePostState(false));
  useAlertTimer(createAlert, null, () => createPostState(false));
  useAlertTimer(deleteAlert, null, () => deletePostState(false));

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
      {updateAlert && <ToastUI message="성공적으로 글이 수정되었습니다." />}
      {createAlert && <ToastUI message="성공적으로 글이 추가되었습니다." />}
      {deleteAlert && <ToastUI message="성공적으로 글이 삭제되었습니다." />}
    </div>
  );
}
