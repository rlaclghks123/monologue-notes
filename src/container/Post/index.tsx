'use client';

import { useCallback } from 'react';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { useForm, FormProvider } from 'react-hook-form';

import { useDispatch } from 'react-redux';

import { createPost, updatePost } from '@/app/actions/post';
import Button from '@/components/Button';

import { createPostState, updatePostState } from '@/store/slices/alertSlice';
import { CreatePost } from '@/types/post';
import { defaultFormData } from '@/utils/constants';

import BookDetail from './BookDetail';
import BookDetailTextArea from './BookDetailTextArea';
import NoImg from '../../../public/images/defaultBook.png';

interface Props {
  defaultData?: CreatePost;
  type: 'CREATE' | 'UPDATE';
  user: User;
}

export default function Post({ defaultData = defaultFormData, type, user }: Props) {
  const methods = useForm({
    defaultValues: defaultData,
  });

  const { handleSubmit } = methods;

  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = useCallback(async (data: CreatePost) => {
    const coverSrc = typeof data.cover === 'string' && data.cover;
    const cover = coverSrc === NoImg.src ? '' : data.cover;

    const postResult = {
      ...data,
      cover,
      user_id: user.id,
      nickname: user.user_metadata.name,
      avatar_url: user.user_metadata.avatar_url,
    };

    if (type === 'CREATE') {
      await createPost(postResult);
      dispatch(createPostState(true));
    }

    if (type === 'UPDATE') {
      await updatePost(postResult);
      dispatch(updatePostState(true));
    }

    router.push('/board/1');
  }, []);

  return (
    <FormProvider {...methods}>
      <form className="mb-10" onSubmit={handleSubmit(onSubmit)}>
        <BookDetail coverImg={defaultData.cover ?? ''} />

        <BookDetailTextArea title="책을 통해 얻고 싶은 인사이트" labelId="before_read" />
        <BookDetailTextArea title="저자가 전달하는 내용" labelId="writer_say" />
        <BookDetailTextArea title="독서 후 정리 & 느낀점" labelId="after_read" />

        <div className="flex w-full justify-center">
          <Button text="저장" type="submit" className=" rounded-md bg-white p-2" />
        </div>
      </form>
    </FormProvider>
  );
}
