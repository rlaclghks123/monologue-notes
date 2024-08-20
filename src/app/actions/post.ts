'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { CreatePost, UpdatePost } from '@/types/post';
import { Tables } from '@/types/supabase';

import { POSTS_LIMIT } from '@/utils/constants';
import creatServer from '@/utils/supabase/server';

export async function getPosts(curPage: number, search: string) {
  const supabase = await creatServer();

  const from = (curPage - 1) * (POSTS_LIMIT + 1);
  const to = (curPage - 1) * (POSTS_LIMIT + 1) + POSTS_LIMIT;

  const { data, count, error } = await supabase
    .from('post')
    .select('*', { count: 'exact' })
    .ilike('title', `%${search}%`)
    .range(from, to)
    .returns<Tables<'post'>[]>();

  if (error) {
    redirect('/error');
  }

  revalidateTag('board');

  return { data, count };
}

export async function getPostDetail(id: string) {
  const supabase = await creatServer();
  const { data, error } = await supabase
    .from('post')
    .select('*')
    .eq('id', id)
    .returns<Tables<'post'>[]>();

  if (error) {
    redirect('/error');
  }

  return { data };
}

export async function createPost(postFormData: CreatePost) {
  const supabase = await creatServer();
  const { data, error } = await supabase.from('post').insert([postFormData]).select();

  if (error) {
    redirect('/error');
  }

  revalidateTag('board');
  return data;
}

export async function updatePost(postFormData: UpdatePost) {
  const supabase = await creatServer();
  const { data, error } = await supabase
    .from('post')
    .update(postFormData)
    .eq('id', postFormData.id!)
    .select();

  if (error) {
    redirect('/error');
  }

  revalidateTag('board');
  return data;
}

export async function deletePost(id: number) {
  const supabase = await creatServer();
  const { data, error } = await supabase.from('post').delete().eq('id', id);

  if (error) {
    redirect('/error');
  }

  revalidateTag('board');

  return { data };
}
