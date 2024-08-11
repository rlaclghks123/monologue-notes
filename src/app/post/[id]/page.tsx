import { getPostDetail } from '@/app/actions/post';
import NotFountUser from '@/components/NotFoundUser';
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

  if (!data.user) return <NotFountUser />;
  return <Post defaultData={postDetail?.[0]} type="UPDATE" user={data.user} />;
}
