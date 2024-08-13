import AccessFailureUser from '@/components/AccessFailureUser';
import Post from '@/container/Post';
import { getUser } from '@/service/user';

export default async function PostPage() {
  const { data } = await getUser();

  if (!data.user) return <AccessFailureUser message="로그인 후 이용해 주세요." />;

  return <Post type="CREATE" user={data.user} />;
}
