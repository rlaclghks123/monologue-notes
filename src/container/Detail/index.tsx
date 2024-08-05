import { GetPosts } from '@/types/post';

import { Review } from '@/types/review';
import BookDescriptions from './BookDescriptions';

import BookReviews from './BookReviews.tsx';
import Introduce from './Introduce';
import UpdateOrDeleteButtons from './UpdateOrDeleteButtons';

interface Props {
  postDatail: GetPosts;
  reviews?: Review[];
}

export default function Detail({ postDatail, reviews }: Props) {
  return (
    <>
      <Introduce postDatail={postDatail} />
      <BookDescriptions postDatail={postDatail} />
      <UpdateOrDeleteButtons postDatail={postDatail} />
      <BookReviews reviews={reviews} />
    </>
  );
}
