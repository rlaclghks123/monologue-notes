'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { SelectedBook } from '@/types/book';
import Input from '@/components/Input';
import Button from '@/components/Button';
import BookSearchModal from './BookSearchModal';
import NoImg from '../../../public/svgs/noImg.svg';

interface Props {
  data: SelectedBook;
  setData: React.Dispatch<React.SetStateAction<SelectedBook>>;
}

export default function BookDetail({ data, setData }: Props) {
  const [title, setTitle] = useState(data ? data.title : '');
  const [publisher, setPublisher] = useState(data ? data.publisher : '');
  const [itemPage, setItemPage] = useState(data ? data.subInfo.itemPage : 0);
  const [imageSrc, setImageSrc] = useState(NoImg);

  const [isOpen, setIsOpen] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const MAX_PAGE = 3000;
  const MIN_PAGE = 0;

  useEffect(() => {
    if (!isReset && data) {
      setTitle(data?.title);
      setPublisher(data?.publisher);
      setItemPage(data?.subInfo.itemPage);
      setImageSrc(data?.cover);
    }
    if (isReset) {
      const init = {
        cover: NoImg,
        title: '',
        publisher: '',
        subInfo: {
          itemPage: 0,
        },
      };
      setData(init);
      setTitle(init.title);
      setPublisher(init.publisher);
      setItemPage(init.subInfo.itemPage);
      setImageSrc(init.cover);
      setIsReset(false);
    }
  }, [data, isReset]);

  const handleItemPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (Number.isNaN(value) || value < MIN_PAGE) return;

    if (value > MAX_PAGE) setItemPage(MAX_PAGE);
    else setItemPage(value);
  };

  return (
    <>
      <section className="flex flex-col items-center pt-14">
        <div className="my-5 flex h-10 w-96  border border-solid border-gray-200">
          <Button text="🔍 책 찾기" onClick={() => setIsOpen(true)} />
          <Button
            text="초기화"
            className="w-24 border-l-2 border-gray-100 bg-white hover:bg-gray-100"
            onClick={() => setIsReset(true)}
          />
        </div>

        <div className="flex w-full justify-center">
          <Image
            src={imageSrc}
            alt="책 정보"
            width={150}
            height={160}
            priority
            className="mr-10 max-h-40 max-w-36 rounded-3xl  border border-solid border-gray-200"
          />

          <div className="flex flex-col justify-evenly gap-2 ">
            <Input
              label="제목"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
              disabled={data.cover !== NoImg}
              placeholder="제목을 입력해주세요"
              errorMessage="제목을 입력해주세요"
            />

            <Input
              label="출판사"
              id="publisher"
              value={publisher}
              onChange={(e) => setTitle(e.currentTarget.value)}
              disabled={data.cover !== NoImg}
              placeholder="제목을 입력해주세요"
            />

            <Input
              label="출판사"
              id="itemPage"
              value={itemPage}
              min={MIN_PAGE}
              max={MAX_PAGE}
              onChange={handleItemPage}
              disabled={data.cover !== NoImg}
              placeholder="제목을 입력해주세요"
            />
          </div>
        </div>
      </section>

      {isOpen && <BookSearchModal isOpen={isOpen} setIsOpen={setIsOpen} setData={setData} />}
    </>
  );
}
