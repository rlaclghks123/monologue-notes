import { SelectedBook } from './book';
import { Database } from './supabase';

export type PostFormDataType = Omit<SelectedBook, 'subInfo'> & {
  id?: number;
  user_id?: string | null;
  item_page: number;
  nickname?: string;
  avatar_url?: string;
  before_read: string;
  writer_say: string;
  after_read: string;
};

export type GetPosts = PostFormDataType & {
  created_at: string;
};

export interface PostAndCountData {
  data?: {
    data: GetPosts[] | null;
    count: number;
  };
  isLoading: boolean;
}

export type ReadPost = Database['public']['Tables']['post']['Row'];
export type CreatePost = Database['public']['Tables']['post']['Insert'];
export type UpdatePost = Database['public']['Tables']['post']['Update'];
