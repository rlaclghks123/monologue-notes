import { useMutation, useQueryClient } from '@tanstack/react-query';

import createClient from '@/utils/supabase/client';

const supabase = createClient();

async function fetchDeletePost(id: number) {
  const { data, error } = await supabase.from('post').delete().eq('id', id);

  if (error) {
    throw new Error(error.message);
  }

  return { data };
}

export function useDeletePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => fetchDeletePost(id),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['usePosts'],
      }),
    onError: () => alert('삭제를 실패했습니다.'),
  });
}
