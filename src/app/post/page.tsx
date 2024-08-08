'use client';

import Loading from '@/components/Loading';
import ToastUI from '@/components/ToastUI';
import Post from '@/container/Post';
import useCheckLogin from '@/hooks/useCheckLogin';

export default function Host() {
  const { isLoading, isNotLoggedIn } = useCheckLogin();

  if (isLoading) return <Loading />;
  if (isNotLoggedIn) return <ToastUI message="로그인 후 이용해 주세요." />;
  return <Post type="CREATE" />;
}
