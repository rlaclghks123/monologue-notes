'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/Button';
import BookDetailTextArea from '../container/BookDetailTextArea';
import BookDetail from '../container/BookDetail';
import useBookDetail from '../service/getBookDetail';
import NoImg from '../../../public/svgs/noImg.svg';

export default function Host() {
  const [bookId, setBookId] = useState('');
  const { data: bookDetail } = useBookDetail(bookId);
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      imageSrc: NoImg,
      title: '',
      publisher: '',
      itemPage: 0,
    },
  });

  function tmp() {}

  return (
    <form className="mb-10" onSubmit={handleSubmit(tmp)}>
      <BookDetail
        data={bookDetail}
        setBookId={setBookId}
        register={register}
        setValue={setValue}
        errors={errors}
      />

      <BookDetailTextArea title="책을 통해 얻고 싶은 인사이트" labelId="beforeRead" max={1000} />
      <BookDetailTextArea title="저자가 전달하는 내용" labelId="writerSay" max={1000} />
      <BookDetailTextArea title="독서 후 정리 & 느낀점" labelId="afterRead" max={1000} />

      <div className="flex w-full justify-center">
        <Button text="저장" type="submit" className=" rounded-md bg-white p-2" />
      </div>
    </form>
  );
}
