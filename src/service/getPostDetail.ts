import { useQuery } from '@tanstack/react-query';
import createClient from '@/utils/supabase/client';

const supabase = createClient();

async function fetchPostDetail(id: string) {
  const res = await supabase.from('post').select('*').eq('id', id);

  return res;
}

export default function usePostDetail(id: string) {
  const { data, isLoading, refetch, error } = useQuery({
    queryKey: ['postDetail', id],
    queryFn: () => fetchPostDetail(id),
    select: (postDetail) => (postDetail && postDetail.data ? postDetail.data[0] : []),
  });

  if (error) {
    throw new Error(error.message);
  }

  return { data, isLoading, refetch };
}
