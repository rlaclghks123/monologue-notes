'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { SelectedBook } from '@/types/book';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { THost } from '@/types/host';
import BookSearchModal from './BookSearchModal';
import NoImg from '../../../public/svgs/noImg.svg';

interface Props {
  data?: SelectedBook;
  register: UseFormRegister<THost>;
  setValue: UseFormSetValue<THost>;
  setBookId: React.Dispatch<React.SetStateAction<string>>;
  errors: FieldErrors<Omit<THost, 'cover'>>;
}
export default function BookDetail({ data, setBookId, register, setValue, errors }: Props) {
  const [cover, setCover] = useState(NoImg);
  const [isOpen, setIsOpen] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const MAX_PAGE = 3000;
  const MIN_PAGE = 1;

  useEffect(() => {
    if (!isReset && data) {
      setValue('cover', data.cover ?? NoImg);
      setValue('title', data.title ?? '');
      setValue('publisher', data.publisher ?? '');
      setValue('itemPage', data.subInfo.itemPage ?? 0);
      setCover(data?.cover);
    }

    if (isReset) {
      setValue('cover', NoImg);
      setValue('title', '');
      setValue('publisher', '');
      setValue('itemPage', 0);
      setCover(NoImg);
      setBookId('');
      setIsReset(false);
    }
  }, [data, isReset]);

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
            src={cover}
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
              placeholder="제목을 입력해주세요"
              {...register('title', { required: '제목은 필수 입력 항목입니다' })}
              errorMessage={errors?.title?.message}
            />

            <Input
              label="출판사"
              id="publisher"
              placeholder="출판사를 입력해주세요"
              {...register('publisher', { required: '출판사는 필수 입력 항목입니다' })}
              errorMessage={errors?.publisher?.message}
            />

            <Input
              label="쪽수"
              type="number"
              id="itemPage"
              placeholder="페이지수를 입력해주세요"
              {...register('itemPage', {
                required: '페이지는 필수 입력 항목입니다',
                min: { value: MIN_PAGE, message: '1 이상의 숫자만 입력 가능합니다' },
                max: {
                  value: MAX_PAGE,
                  message: '3000 이하의 숫자만 입력 가능합니다',
                },
              })}
              errorMessage={errors?.itemPage?.message}
            />
          </div>
        </div>
      </section>

      {isOpen && <BookSearchModal isOpen={isOpen} setIsOpen={setIsOpen} setBookId={setBookId} />}
    </>
  );
}
