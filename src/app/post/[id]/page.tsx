import { getPostDetail } from '@/app/actions/post';
import ToastUI from '@/components/ToastUI';
import Post from '@/container/Post';

import { getUser } from '@/service/user';

interface Props {
  params: {
    id: string;
  };
}

export default async function PostUpdate({ params: { id } }: Props) {
  const { data: postDetail } = await getPostDetail(id);
  const { data } = await getUser();

  if (!data.user) return <ToastUI message="로그인 후 이용해 주세요." />;
  return <Post defaultData={postDetail?.[0]} type="UPDATE" user={data.user} />;
}
