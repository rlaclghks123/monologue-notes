import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Review, ReviewFormData, ReviewLike } from '@/types/review';
import createClient from '@/utils/supabase/client';

const supabase = createClient();

async function fetchReviews(postId: number) {
  const res = await supabase
    .from('review')
    .select('*')
    .eq('post_id', postId)
    .order('created_at', { ascending: false });

  return res;
}

export function useReviews(postId: number) {
  return useQuery({
    queryKey: ['post_reviews'],
    queryFn: () => fetchReviews(postId),
    select: (reviews) => reviews.data,
  });
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
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['post_reviews'],
      });
    },

    onError: (error) => {
      if (error) {
        throw new Error(error.message);
      }
    },
  });
}

async function addLikeFetcher(payload: ReviewLike) {
  const { reviewId, like } = payload;

  const { data, error } = await supabase
    .from('review')
    .update({ review_like: like })
    .eq('review_id', reviewId)
    .select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export function useLikeReview() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: ReviewLike) => addLikeFetcher(payload),

    onMutate: async (newReview) => {
      await queryClient.cancelQueries({ queryKey: ['post_reviews'] });
      const previousReviews: { data: Review[] } | undefined = queryClient.getQueryData([
        'post_reviews',
      ]);

      const updatedReviews = previousReviews?.data.map((review) => {
        if (review.review_id === newReview.reviewId) {
          return { ...review, review_like: newReview.like };
        }
        return review;
      });

      queryClient.setQueryData(['post_reviews'], {
        ...previousReviews,
        data: updatedReviews,
      });

      return { previousReviews, updatedReviews };
    },

    onError: (error, newTodo, context) => {
      if (error) {
        throw new Error(error.message);
      }

      queryClient.setQueryData(['post_reviews'], context?.previousReviews);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['post_reviews'] });
    },
  });
}
