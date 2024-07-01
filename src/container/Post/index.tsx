'use client';

import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import Button from '@/components/Button';
import useBookDetail from '@/service/getBookDetail';
import { SelectedBook } from '@/types/book';
import { HostFormDataType } from '@/types/host';

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

  const setMultipleValues = (details: SelectedBook) => {
    const fields = {
      cover: details.cover,
      title: details.title,
      publisher: details.publisher,
      itemPage: details.subInfo.itemPage,
    };

    Object.keys(fields).forEach((field) => {
      setValue(field as keyof HostFormDataType, fields[field as keyof typeof fields]);
    });
  };

  useEffect(() => {
    if (bookDetail) setMultipleValues(bookDetail);
  }, [bookDetail]);

  function onSubmit(data: HostFormDataType) {
    console.log(data);
    // supabase 연결 및 처리
  }

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
