'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import Button from '@/components/Button';
import ToastUI from '@/components/ToastUI';

import Find from '../../../public/svgs/find.svg';
import Refresh from '../../../public/svgs/refresh.svg';

interface FormData {
  searchBar: string;
}

export default function SearchAndFilter() {
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { searchBar: '' },
  });
  const router = useRouter();

  const onSubmit = (data: FormData) => {
    const query = data.searchBar;
    setValue('searchBar', '');
    router.push(`/board?search=${query}`);
  };

  return (
    <div className="w-full0 mt-10 flex h-8 items-center rounded-md px-10">
      <div className="xs:w-[10%] sm:w-1/4 xl:w-1/3" />
      <form
        className="relative flex h-full items-center justify-center xs:w-[80%] sm:w-1/2 xl:w-1/3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Button
          type="submit"
          text={<Find className="h-4 w-4 hover:fill-gray-300" />}
          className="absolute left-2"
        />
        <input
          className="h-[80%] w-full rounded-lg px-8"
          {...register('searchBar', {
            required: '내용은 필수 입력 항목입니다',
          })}
        />
        {errors?.searchBar && <ToastUI message={errors.searchBar?.message ?? ''} />}

        <Button
          type="button"
          text={<Refresh className="h-4 w-4 hover:fill-gray-300" />}
          className="absolute right-2"
          onClick={() => {
            reset({
              searchBar: '',
            });
            router.push('/board');
          }}
        />
      </form>
      <div className="flex w-1/4 justify-end xl:w-1/3" />
    </div>
  );
}
