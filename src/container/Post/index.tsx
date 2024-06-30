'use client';

import useBookDetail from '@/service/getBookDetail';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { THost } from '@/types/host';
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

  function onSubmit(data: THost) {
    console.log(data);
    // supabase 연결 및 처리
  }

  return (
    <form className="mb-10" onSubmit={handleSubmit(onSubmit)}>
      <BookDetail
        data={bookDetail}
        setBookId={setBookId}
        register={register}
        setValue={setValue}
        errors={errors}
      />

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
  );
}
