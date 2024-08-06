'use client';

import CreateReviews from './CreateReviews';
import ReviewList from './ReviewList';

export default function BookReviews() {
  return (
    <div className="mb-10 w-full ">
      <CreateReviews />
      <ReviewList />
    </div>
  );
}
