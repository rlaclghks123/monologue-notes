import Board from '@/container/Board';
import { getUser } from '@/service/user';
import { ReadPost } from '@/types/post';

interface Props {
  params: {
    page: string;
  };
}

interface Posts {
  data: ReadPost[];
  count: number;
}

const fetchData = async (page: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/board?page=${page}`, {
    next: { tags: ['board'] },
  });

  return response.json();
};

export default async function BoardPage({ params: { page } }: Props) {
  const { data: posts, count }: Posts = await fetchData(page);
  const { data } = await getUser();

  return <Board curPage={Number(page)} posts={posts ?? []} count={count ?? 0} user={data.user} />;
}
