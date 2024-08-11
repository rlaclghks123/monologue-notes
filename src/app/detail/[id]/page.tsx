import { getPostDetail } from '@/app/actions/post';
import Detail from '@/container/Detail';
import { getUser } from '@/service/user';

interface Props {
  params: {
    id: string;
  };
}

export default async function PostDetail({ params: { id } }: Props) {
  const { data: postDetail } = await getPostDetail(id);
  const { data } = await getUser();

  return <Detail postDetail={postDetail ?? []} user={data.user} />;
}
