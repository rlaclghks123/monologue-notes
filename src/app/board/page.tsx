import Board from '@/container/Board';
import { ReadPost } from '@/types/post';

interface Props {
  searchParams: {
    page: string;
    search: string;
  };
}

interface Posts {
  data: ReadPost[];
  count: number;
}

const fetchData = async (page: string, search?: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?page=${page}&search=${search}`,
    {
      next: { tags: ['board'] },
    },
  );

  return response.json();
};

export default async function BoardPage({ searchParams }: Props) {
  const { page, search } = searchParams;

  const { data: posts, count }: Posts = await fetchData(page || '1', search || '');

  return <Board curPage={Number(page) || 1} posts={posts ?? []} count={count ?? 0} />;
}
