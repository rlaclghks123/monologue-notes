'use client';

import { useState } from 'react';
import { User } from '@supabase/supabase-js';
import { useParams, useRouter } from 'next/navigation';

import Button from '@/components/Button';
import Profile from '@/components/Profile';
import { useLikeReview, useReviews } from '@/service/review';
import { changeDate } from '@/utils/changeDate';

import EmptyHeart from '../../../../public/svgs/emptyHeart.svg';
import FulledHeart from '../../../../public/svgs/fulledHeart.svg';

interface Props {
  user: User | null;
}

export default function ReviewList({ user }: Props) {
  const { id } = useParams();
  const { data: reviews } = useReviews(Number(id));
  const [clickedLikeId, setClickedLikeId] = useState<{ [key: string]: boolean }>({});
  const { mutate: likeMutate } = useLikeReview();
  const router = useRouter();

  const handleClickLike = (reviewId: string) => {
    if (!user) {
      router.push('/auth');
      return;
    }
    const clickedReview = reviews?.data?.find((data) => data.review_id === reviewId);
    const prevLike = clickedReview?.review_like;

    let payload;
    if (!clickedLikeId[reviewId]) {
      payload = { reviewId, like: (prevLike ?? 0) + 1 };
    } else {
      payload = { reviewId, like: (prevLike ?? 0) - 1 };
    }

    likeMutate(payload);
    setClickedLikeId((prev) => ({ ...prev, [reviewId]: !prev[reviewId] }));
  };

  return (
    <ul>
      {reviews?.data?.map((review) => (
        <li key={review.review_id} className="my-10 flex" data-post-id={review.post_id}>
          <Profile src={review.avatar_url ?? ''} />

          <div className="w-full flex-col gap-2 ">
            <p className="flex items-center gap-2 ">
              <span className="text-md font-bold">{review.nickname ?? '익명'}</span>
              <span className="text-xs text-gray-400">{changeDate(review.created_at)}</span>
            </p>
            <p>{review.content}</p>
            <div className="flex gap-4 ">
              <div className="flex items-center ">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => handleClickLike(review.review_id)}
                  text={
                    clickedLikeId[review.review_id] ? (
                      <FulledHeart
                        aria-label="like-click-button"
                        className="rounded-full border border-solid border-peach-fuzz fill-peach-fuzz p-1 hover:bg-peach-fuzz hover:fill-white"
                      />
                    ) : (
                      <EmptyHeart
                        aria-label="like-click-button"
                        className="rounded-full border border-solid border-peach-fuzz fill-peach-fuzz p-1 hover:bg-peach-fuzz hover:fill-white"
                      />
                    )
                  }
                />
                <p>{review.review_like ?? 0}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
