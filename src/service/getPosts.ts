import { keepPreviousData, useQuery, UseQueryResult } from '@tanstack/react-query';
import { GetPosts } from '@/types/post';
import createClient from '@/utils/supabase/client';

interface PostData {
  data: GetPosts[] | null;
  count: number;
}

const supabase = createClient();

async function fetchPosts({ from, to }: { from: number; to: number }) {
  const res = await supabase.from('post').select('*', { count: 'exact' }).range(from, to);
  return res;
}

export default function usePosts({
  from,
  to,
}: {
  from: number;
  to: number;
}): UseQueryResult<PostData, Error> {
  return useQuery({
    queryKey: ['usePosts', from, to],
    queryFn: () => fetchPosts({ from, to }),
    placeholderData: keepPreviousData,
  });
}
