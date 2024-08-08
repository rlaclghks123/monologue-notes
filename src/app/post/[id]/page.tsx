'use client';

import Loading from '@/components/Loading';
import ToastUI from '@/components/ToastUI';
import Post from '@/container/Post';
import useCheckLogin from '@/hooks/useCheckLogin';
import usePostDetail from '@/service/getPostDetail';

interface Props {
  params: {
    id: string;
  };
}

export default function PostUpdate({ params: { id } }: Props) {
  const { data: postDetail, isLoading: postDetailLoading } = usePostDetail(id);
  const {
    isLoading: userLoading,
    isNotLoggedIn,
    isUserMismatch,
  } = useCheckLogin(postDetail?.data?.[0].user_id);

  if (postDetailLoading || userLoading) return <Loading />;

  if (isNotLoggedIn) return <ToastUI message="로그인 후 이용해 주세요." />;
  if (isUserMismatch) return <ToastUI message="작성자만 수정 가능합니다." />;

  return <Post defaultData={postDetail?.data?.[0]} type="UPDATE" />;
}
