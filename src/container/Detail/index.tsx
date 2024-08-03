import { GetPosts } from '@/types/post';

import { Review } from '@/types/review';
import BookDescriptions from './BookDescriptions';

import BookReviews from './BookReviews.tsx';
import Introduce from './Introduce';

interface Props {
  postDatail: GetPosts;
  reviews?: Review[];
}

export default function Detail({ postDatail, reviews }: Props) {
  return (
    <>
      <Introduce postDatail={postDatail} />
      <BookDescriptions postDatail={postDatail} />
      <BookReviews reviews={reviews} />
    </>
  );
}
