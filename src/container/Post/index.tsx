'use client';

import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import { HostFormDataType } from '@/types/host';
import { SelectedBook } from '@/types/book';
import useBookDetail from '@/service/getBookDetail';
import Button from '@/components/Button';
import NoImg from '../../../public/svgs/noImg.svg';

import BookDetail from './BookDetail';
import BookDetailTextArea from './BookDetailTextArea';

export default function Post() {
  const [bookId, setBookId] = useState('');
  const { data: bookDetail } = useBookDetail(bookId);
  const {
    handleSubmit,
    register,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
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
    <FormProvider {...{ reset, register, errors }}>
      <form className="mb-10" onSubmit={handleSubmit(onSubmit)}>
        <BookDetail data={bookDetail} setBookId={setBookId} />

        <BookDetailTextArea
          title="책을 통해 얻고 싶은 인사이트"
          labelId="beforeRead"
          register={register}
          watch={watch}
          errors={errors}
        />

        <BookDetailTextArea
          title="저자가 전달하는 내용"
          labelId="writerSay"
          register={register}
          watch={watch}
          errors={errors}
        />

        <BookDetailTextArea
          title="독서 후 정리 & 느낀점"
          labelId="afterRead"
          register={register}
          watch={watch}
          errors={errors}
        />

        <div className="flex w-full justify-center">
          <Button text="저장" type="submit" className=" rounded-md bg-white p-2" />
        </div>
      </form>
    </FormProvider>
  );
}
