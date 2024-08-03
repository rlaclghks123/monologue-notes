import { GetPosts } from '@/types/post';

import BookDescriptions from './BookDescriptions';

import BookReviews from './BookReviews.tsx';
import Introduce from './Introduce';

interface Props {
  postDatail: GetPosts;
  reviews: any;
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
