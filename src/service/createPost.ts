import { PostFormDataType } from '@/types/post';

import createClient from '@/utils/supabase/client';

const supabase = createClient();

export default async function createPost(postFormData: PostFormDataType) {
  const { data, error } = await supabase.from('post').insert([postFormData]).select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
}
