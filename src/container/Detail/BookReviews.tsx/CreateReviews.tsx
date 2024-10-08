'use client';

import { useState } from 'react';
import { User } from '@supabase/supabase-js';
import { useParams } from 'next/navigation';

import Profile from '@/components/Profile';
import ToastUI from '@/components/ToastUI';

import useAlertTimer from '@/hooks/useAlertTimer';
import { useCreateReview } from '@/service/review';

interface Props {
  user: User | null;
}

export default function CreateReviews({ user }: Props) {
  const { id } = useParams();
  const [isFocus, setIsFocus] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [content, setContent] = useState('');
  const { mutate } = useCreateReview();

  useAlertTimer(isEmpty, () => setIsEmpty(false));

  function handleSubmitReview(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    if (!content.trim()) {
      setIsFocus(false);
      setContent('');
      setIsEmpty(true);
      return;
    }

    setContent('');
    setIsFocus(false);

    const formData = {
      content,
      post_id: Number(id),
      review_like: 0,
      avatar_url: user?.user_metadata.avatar_url,
      user_id: user?.id,
      nickname: user?.user_metadata.name,
    };

    mutate(formData);
  }

  return (
    <div className="mb-10 w-full ">
      <div className="mb-5 flex h-full w-full items-center">
        <Profile src={user?.user_metadata.avatar_url} />

        <div className="h-full w-full flex-col">
          <form className="flex h-full w-full">
            <input
              value={content}
              placeholder="댓글 추가..."
              onChange={(e) => setContent(e.target.value)}
              onFocus={() => setIsFocus(true)}
              className={`w-full border-b-[1px] border-solid border-gray-300 bg-inherit pb-1 placeholder:text-xs ${isFocus && 'focus:border-black focus:outline-none'}`}
            />

            {isFocus && (
              <button
                type="submit"
                className="w-10 rounded-lg bg-gray-300 text-white hover:bg-black"
                onClick={handleSubmitReview}
              >
                작성
              </button>
            )}
          </form>
        </div>
      </div>
      {isEmpty && <ToastUI message="댓글을 작성해주세요." />}
    </div>
  );
}
