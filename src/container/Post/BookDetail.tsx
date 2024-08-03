import { useEffect, useState } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';

import Button from '@/components/Button';
import Input from '@/components/Input';

import useBookDetail from '@/service/getBookDetail';
import { SelectedBook } from '@/types/book';
import { PostFormDataType } from '@/types/post';

import BookSearchModal from './BookSearchModal';
import NoImg from '../../../public/svgs/noImg.svg';

interface Props {
  coverImg: string | StaticImport;
}

export default function BookDetailInfo({ coverImg }: Props) {
  const [cover, setCover] = useState(coverImg ?? '');
  const [isOpen, setIsOpen] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [bookId, setBookId] = useState('');
  const { data: bookDetail } = useBookDetail(bookId);

  const {
    register,
    reset,
    setValue,
    formState: { errors },
  } = useFormContext();

  const setMultipleValues = (details: SelectedBook) => {
    const fields = {
      cover: details.cover,
      title: details.title,
      publisher: details.publisher,
      item_page: details.subInfo.itemPage,
    };

    Object.keys(fields).forEach((field) => {
      setValue(
        field as keyof Omit<PostFormDataType, 'id' | 'user_id'>,
        fields[field as keyof typeof fields],
      );
    });
  };

  useEffect(() => {
    if (bookDetail) setMultipleValues(bookDetail);
  }, [bookDetail]);

  const MAX_PAGE = 3000;
  const MIN_PAGE = 1;

  useEffect(() => {
    if (bookDetail) setCover(bookDetail.cover);
    if (isReset) {
      reset((prev) => ({
        ...prev,
        cover: '',
        title: '',
        publisher: '',
        item_page: 0,
      }));

      setCover('');
      setBookId('');
      setIsReset(false);
    }
  }, [bookDetail, isReset]);

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
          {cover ? (
            <Image
              src={cover}
              alt="책 정보"
              width={150}
              height={160}
              priority
              className="mr-10 max-h-40 max-w-36 rounded-3xl  border border-solid border-gray-200"
            />
          ) : (
            <NoImg className="mr-10 max-h-40 max-w-36 rounded-3xl  border border-solid border-gray-200" />
          )}

          <div className="flex flex-col justify-evenly gap-2 ">
            <Input
              label="제목"
              id="title"
              placeholder="제목을 입력해주세요"
              {...register('title', { required: '제목은 필수 입력 항목입니다' })}
              errorMessage={errors?.title?.message as string}
            />

            <Input
              label="출판사"
              id="publisher"
              placeholder="출판사를 입력해주세요"
              {...register('publisher', { required: '출판사는 필수 입력 항목입니다' })}
              errorMessage={errors?.publisher?.message as string}
            />

            <Input
              label="쪽수"
              type="number"
              id="item_page"
              placeholder="페이지수를 입력해주세요"
              {...register('item_page', {
                required: '페이지는 필수 입력 항목입니다',
                min: { value: MIN_PAGE, message: '1 이상의 숫자만 입력 가능합니다' },
                max: {
                  value: MAX_PAGE,
                  message: '3000 이하의 숫자만 입력 가능합니다',
                },
              })}
              errorMessage={errors?.item_page?.message as string}
            />
          </div>
        </div>
      </section>

      {isOpen && <BookSearchModal isOpen={isOpen} setIsOpen={setIsOpen} setBookId={setBookId} />}
    </>
  );
}
