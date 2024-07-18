import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ReviewFormData } from '@/types/review';
import createClient from '@/utils/supabase/client';

const supabase = createClient();

export async function fetchReviews(postId: number) {
  const res = await supabase
    .from('review')
    .select(
      `
    *,
    post:post_id (*)
  `,
    )
    .eq('post_id', postId)
    .order('created_at', { ascending: false });

  return res;
}

export function useReviews(postId: number) {
  return useQuery({ queryKey: ['post_reviews'], queryFn: () => fetchReviews(postId) });
}

async function createReview(reviewFormData: ReviewFormData) {
  const { data, error } = await supabase.from('review').insert([reviewFormData]).select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export function useCreateReview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reviewFormData: ReviewFormData) => createReview(reviewFormData),
    onSuccess: ([{ id }]) => {
      queryClient.invalidateQueries({
        queryKey: ['post_reviews', id],
      });
    },

    onError: (err) => {
      alert('리뷰작성을 실패했습니다.');
      console.log(err);
    },
  });
}
