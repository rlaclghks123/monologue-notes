import BookDescriptions from './BookDescriptions';

import BookReviews from './BookReviews.tsx';
import Introduce from './Introduce';
import UpdateOrDeleteButtons from './UpdateOrDeleteButtons';
import usePostDetail from '@/service/getPostDetail';

export default function Detail({ id }: { id: string }) {
  const { data: postDetail, isLoading } = usePostDetail(id);

  if (isLoading) return <div>로딩중...</div>;

  return (
    <>
      <Introduce postDetail={postDetail?.data && postDetail.data[0]} />
      <BookDescriptions postDetail={postDetail?.data && postDetail.data[0]} />
      <UpdateOrDeleteButtons postDetail={postDetail?.data && postDetail.data[0]} />
      <BookReviews />
    </>
  );
}
