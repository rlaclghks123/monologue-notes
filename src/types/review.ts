export interface ReviewFormData {
  content: string;
  post_id: number;
  review_like: number;
  avatar_url?: string;
  user_id?: string;
  nickname?: string;
}

export type Review = ReviewFormData & {
  created_at: Date;
  review_id: string;
};

export interface ReviewLike {
  reviewId: string;
  like: number;
}
