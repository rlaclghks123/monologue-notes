'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import ToastUI from '@/components/ToastUI';
import useAlertTimer from '@/hooks/useAlertTimer';

import usePosts from '@/service/getPosts';
import { useUser } from '@/service/user';
import { createPostState, deletePostState, updatePostState } from '@/store/slices/alertSlice';
import { RootAlertState } from '@/types/alertStore';
import { PostAndCountData } from '@/types/post';
import BoardList from './BoardList';
import Pagenation from '../../components/Pagenation';

export default function Board() {
  const { data: userData } = useUser();
  const [curPost, setCurPost] = useState(1);
  const limit = 8;

  const { data: postData }: PostAndCountData = usePosts({
    from: (curPost - 1) * (limit + 1),
    to: (curPost - 1) * (limit + 1) + limit,
  });

  const updateAlert = useSelector((state: RootAlertState) => state.alert.updateState);
  const createAlert = useSelector((state: RootAlertState) => state.alert.createState);
  const deleteAlert = useSelector((state: RootAlertState) => state.alert.deleteState);

  useAlertTimer(updateAlert, null, () => updatePostState(false));
  useAlertTimer(createAlert, null, () => createPostState(false));
  useAlertTimer(deleteAlert, null, () => deletePostState(false));

  return (
    <div className="h-screen-without-nav pb-20 pt-5">
      <div className="mb-2 flex justify-end">
        {userData && (
          <Link
            href="/post"
            className=" z-10 rounded-lg border border-solid border-gray-300 p-1 px-2 hover:bg-gray-300 hover:text-white"
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
      {updateAlert && <ToastUI message="성공적으로 글이 수정되었습니다." />}
      {createAlert && <ToastUI message="성공적으로 글이 추가되었습니다." />}
      {deleteAlert && <ToastUI message="성공적으로 글이 삭제되었습니다." />}
    </div>
  );
}
