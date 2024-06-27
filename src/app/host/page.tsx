'use client';

import { useState } from 'react';

import { SelectedBook } from '@/types/book';
import Button from '@/components/Button';
import BookDetailTextArea from '../container/BookDetailTextArea';
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

      <BookDetailTextArea title="책을 통해 얻고 싶은 인사이트" labelId="beforeRead" max={1000} />
      <BookDetailTextArea title="저자가 전달하는 내용" labelId="writerSay" max={1000} />
      <BookDetailTextArea title="독서 후 정리 & 느낀점" labelId="afterRead" max={1000} />

      <div className="flex w-full justify-center">
        <Button text="저장" className=" rounded-md bg-white p-2" />
      </div>
    </form>
  );
}
