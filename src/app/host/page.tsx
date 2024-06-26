'use client';

import { useState } from 'react';

import { SelectedBook } from '@/types/book';
import BookDetail from '../container/BookDetail';
import NoImg from '../../../public/svgs/noImg.svg';

export default function Host() {
  const [data, setData] = useState<SelectedBook>({
    cover: NoImg,
    title: '',
    publisher: '',
    subInfo: {
      itemPage: 0,
    },
  });

  return (
    <form className="mb-10">
      <BookDetail data={data} setData={setData} />

      <div className="flex w-full justify-center">
        <button type="button" className=" rounded-md bg-white p-2">
          저장
        </button>
      </div>
    </form>
  );
}
