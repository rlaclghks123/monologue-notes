import Detail from '@/container/Detail';
import { getUser } from '@/service/user';

interface Props {
  params: {
    id: string;
  };
}

const fetchData = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/?id=${id}`);

  return response.json();
};

export default async function PostDetail({ params: { id } }: Props) {
  const { data: postDetail } = await fetchData(id);
  const { data } = await getUser();

  return <Detail postDetail={postDetail ?? []} user={data.user} />;
}
