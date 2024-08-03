'use client';

import Detail from '@/container/Detail';
import usePostDetail from '@/service/getPostDetail';
import { useReviews } from '@/service/review';

interface Props {
  params: {
    id: string;
  };
}

export default function PostDetail({ params: { id } }: Props) {
  const { data: postDatail, isLoading } = usePostDetail(id);
  const { data: reviews } = useReviews(Number(id));

  if (isLoading) return <div>로딩중...</div>;

  return (
    <Detail postDatail={postDatail?.data && postDatail.data[0]} reviews={reviews?.data || []} />
  );
}
