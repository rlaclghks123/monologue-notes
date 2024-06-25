'use client';

import { useState } from 'react';
import BookDetail from '../container/BookDetail';

export default function Host() {
  const [data, setData] = useState(null);

  return (
    <form className="mb-10">
      <BookDetail data={data} />

      <div className="flex w-full justify-center">
        <button type="button" className=" rounded-md bg-white p-2">
          저장
        </button>
      </div>
    </form>
  );
}
