'use client';

import Image from 'next/image';
import { useState } from 'react';

interface IBook {
  item: {
    title: string;
    cover: string;
    publisher: string;
    subInfo: {
      itemPage: number;
    };
  }[];
}

interface Props {
  data: IBook | null;
}

export default function BookDetail({ data }: Props) {
  const [title, setTitle] = useState(data ? data.item[0].title : '');
  const [publisher, setPublisher] = useState(data ? data.item[0].publisher : '');
  const [itemPage, setItemPage] = useState(data ? data.item[0].subInfo.itemPage : 0);
  const MAX_PAGE = 3000;
  const MIN_PAGE = 0;

  const handleItemPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (Number.isNaN(value) || value < MIN_PAGE) return;

    if (value > MAX_PAGE) setItemPage(MAX_PAGE);
    else setItemPage(value);
  };

  return (
    <section className="flex flex-col items-center pt-14">
      <div className="my-5 flex h-10 w-96 rounded-md border border-solid  border-gray-200">
        <button type="button" className="h-full w-full rounded-md bg-white  pl-3 hover:bg-gray-100">
          <span>🔍 책 찾기</span>
        </button>
      </div>
      <div className="flex w-full justify-center">
        <Image
          src="data:image/png;base64,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"
          alt="책 정보"
          width={150}
          height={50}
          priority
          className="mr-10 rounded-3xl"
          style={{ height: 'auto', width: 'auto' }}
        />
        <div className="flex flex-col justify-evenly gap-8 ">
          <label htmlFor="title" className="flex items-center gap-4">
            <span className="w-14">제목</span>
            <input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={!!data}
              placeholder="제목을 입력해주세요"
              className="w-72 rounded-md bg-white p-1"
            />
          </label>

          <label htmlFor="publisher" className="flex items-center gap-4">
            <span className="w-14">출판사</span>
            <input
              id="publisher"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
              disabled={!!data}
              placeholder="출판사를 입력해주세요"
              className="w-72 rounded-md bg-white p-1"
            />
          </label>

          <label htmlFor="itemPage" className="flex items-center gap-4">
            <span className="w-14">쪽수</span>
            <input
              id="itemPage"
              min={MIN_PAGE}
              max={MAX_PAGE}
              // type="number"
              value={itemPage}
              onChange={handleItemPage}
              disabled={!!data}
              className="w-20 rounded-md bg-white p-1 text-center"
            />
          </label>
        </div>
      </div>
    </section>
  );
}
