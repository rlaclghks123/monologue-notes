'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, FormProvider } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import Button from '@/components/Button';
import createPost from '@/service/createPost';
import { useUpdatePost } from '@/service/updatePost';

import { useUser } from '@/service/user';
import { createPostState, updatePostState } from '@/store/slices/alertSlice';
import { PostFormDataType } from '@/types/post';
import { defaultFormData } from '@/utils/constants';

import BookDetail from './BookDetail';
import BookDetailTextArea from './BookDetailTextArea';
import NoImg from '../../../public/images/defaultBook.png';

interface Props {
  defaultData?: PostFormDataType;
  type: 'CREATE' | 'UPDATE';
}

export default function Post({ defaultData = defaultFormData, type }: Props) {
  const methods = useForm({
    defaultValues: defaultData,
  });

  const { handleSubmit } = methods;

  const { mutate: updateMutate } = useUpdatePost();

  const router = useRouter();
  const { data: userData } = useUser();
  const dispatch = useDispatch();

  const onSubmit = useCallback(async (data: PostFormDataType) => {
    const coverSrc = typeof data.cover === 'string' && data.cover;
    const cover = coverSrc === NoImg.src ? '' : data.cover;
    const postResult = {
      ...data,
      cover,
      nickname: userData?.user_metadata.name,
      avatar_url: userData?.user_metadata.avatar_url,
    };

    if (type === 'CREATE') {
      await createPost(postResult);
      dispatch(createPostState(true));
    }

    if (type === 'UPDATE') {
      updateMutate(postResult);
      dispatch(updatePostState(true));
    }

    router.push('/board');
  }, []);

  return (
    <FormProvider {...methods}>
      <form className="mb-10" onSubmit={handleSubmit(onSubmit)}>
        <BookDetail coverImg={defaultData.cover} />

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
