'use client';

import Detail from '@/container/Detail';
import usePostDetail from '@/service/getPostDetail';

interface Props {
  params: {
    id: string;
  };
}

export default function PostDetail({ params: { id } }: Props) {
  const { data, isLoading } = usePostDetail(id);

  if (isLoading) return <div>로딩중...</div>;

  return <Detail data={data?.data && data.data[0]} />;
}
