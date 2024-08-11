import NotFountUser from '@/components/NotFoundUser';
import Post from '@/container/Post';
import { getUser } from '@/service/user';

export default async function PostPage() {
  const { data } = await getUser();

  if (!data.user) return <NotFountUser />;

  return <Post type="CREATE" user={data.user} />;
}
