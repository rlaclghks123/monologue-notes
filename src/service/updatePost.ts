import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PostFormDataType } from '@/types/post';

import createClient from '@/utils/supabase/client';

const supabase = createClient();

export default async function updatePost(postFormData: PostFormDataType) {
  const { data, error } = await supabase
    .from('post')
    .update(postFormData)
    .eq('id', postFormData.id)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export function useUpdatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (postFormData: PostFormDataType) => updatePost(postFormData),
    onSuccess: ([{ id }]) => {
      queryClient.invalidateQueries({
        queryKey: ['postDetail', String(id)],
      });
    },
    onError: (err) => {
      alert('수정을 실패했습니다.');
      console.log(err);
    },
  });
}
