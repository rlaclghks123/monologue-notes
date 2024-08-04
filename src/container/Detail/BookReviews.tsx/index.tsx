'use client';

import { Review } from '@/types/review';
import CreateReviews from './CreateReviews';
import ReviewList from './ReviewList';

interface Props {
  reviews?: Review[];
}

export default function BookReviews({ reviews }: Props) {
  return (
    <div className="mb-10 w-full ">
      <CreateReviews />
      <ReviewList reviews={reviews} />
    </div>
  );
}
