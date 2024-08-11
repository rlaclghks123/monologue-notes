import { Database } from './supabase';

export type ReadPost = Database['public']['Tables']['post']['Row'];
export type CreatePost = Database['public']['Tables']['post']['Insert'];
export type UpdatePost = Database['public']['Tables']['post']['Update'];
