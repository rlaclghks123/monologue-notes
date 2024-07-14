'use client';

import Post from '@/container/Post';
import usePostDetail from '@/service/getPostDetail';

interface Props {
  params: {
    id: string;
  };
}

export default function PostDetail({ params: { id } }: Props) {
  const { data, isLoading } = usePostDetail(id);

  if (isLoading) return <div>로딩중...</div>;
  return <Post defaultData={data?.data?.[0]} type="UPDATE" />;
}
