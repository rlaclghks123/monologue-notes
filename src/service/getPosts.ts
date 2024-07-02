import { useQuery } from '@tanstack/react-query';
import createClient from '@/utils/supabase/client';

const supabase = createClient();

async function fetchPosts() {
  const res = await supabase.from('post').select('*');
  return res.data;
}

export default function usePosts() {
  return useQuery({
    queryKey: ['usePosts'],
    queryFn: () => fetchPosts(),
  });
}
