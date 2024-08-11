import ToastUI from '@/components/ToastUI';
import Post from '@/container/Post';
import { getUser } from '@/service/user';

export default async function Host() {
  const { data } = await getUser();

  if (!data.user) return <ToastUI message="로그인 후 이용해 주세요." />;
  return <Post type="CREATE" user={data.user} />;
}
