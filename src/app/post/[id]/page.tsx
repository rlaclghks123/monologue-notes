import { getPostDetail } from '@/app/actions/post';
import AccessFailureUser from '@/components/AccessFailureUser';

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

  if (!data.user) return <AccessFailureUser message="로그인 후 이용해 주세요." />;
  if (data.user?.id !== postDetail[0]?.user_id)
    return <AccessFailureUser message="작성자만 수정 가능합니다." />;

  return <Post defaultData={postDetail?.[0]} type="UPDATE" user={data.user} />;
}
