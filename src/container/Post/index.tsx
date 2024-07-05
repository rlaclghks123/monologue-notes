'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, FormProvider } from 'react-hook-form';

import Button from '@/components/Button';
import createPost from '@/service/createPost';
import useBookDetail from '@/service/getBookDetail';
import { SelectedBook } from '@/types/book';
import { PostFormDataType } from '@/types/post';

import BookDetail from './BookDetail';
import BookDetailTextArea from './BookDetailTextArea';
import NoImg from '../../../public/svgs/noImg.svg';

export default function Post() {
  const [bookId, setBookId] = useState('');
  const { data: bookDetail } = useBookDetail(bookId);
  const methods = useForm({
    defaultValues: {
      cover: NoImg ?? '',
      title: '',
      publisher: '',
      itemPage: 0,
      beforeRead: '',
      writerSay: '',
      afterRead: '',
    },
  });

  const { handleSubmit, setValue } = methods;
  const router = useRouter();

  const setMultipleValues = (details: SelectedBook) => {
    const fields = {
      cover: details.cover,
      title: details.title,
      publisher: details.publisher,
      itemPage: details.subInfo.itemPage,
    };

    Object.keys(fields).forEach((field) => {
      setValue(field as keyof PostFormDataType, fields[field as keyof typeof fields]);
    });
  };

  useEffect(() => {
    if (bookDetail) setMultipleValues(bookDetail);
  }, [bookDetail]);

  const onSubmit = useCallback(async (data: PostFormDataType) => {
    const coverSrc = typeof data.cover === 'string' ? data.cover : data.cover.src;
    const cover = coverSrc === NoImg.src ? '' : data.cover;

    const postResult = {
      cover,
      title: data.title,
      publisher: data.publisher,
      itemPage: data.itemPage,
      beforeRead: data.beforeRead,
      writerSay: data.writerSay,
      afterRead: data.afterRead,
    };

    await createPost(postResult);
    alert('성공적으로 글이 추가되었습니다.');
    router.push('/board');
  }, []);

  return (
    <FormProvider {...methods}>
      <form className="mb-10" onSubmit={handleSubmit(onSubmit)}>
        <BookDetail data={bookDetail} setBookId={setBookId} />

        <BookDetailTextArea title="책을 통해 얻고 싶은 인사이트" labelId="beforeRead" />
        <BookDetailTextArea title="저자가 전달하는 내용" labelId="writerSay" />
        <BookDetailTextArea title="독서 후 정리 & 느낀점" labelId="afterRead" />

        <div className="flex w-full justify-center">
          <Button text="저장" type="submit" className=" rounded-md bg-white p-2" />
        </div>
      </form>
    </FormProvider>
  );
}
