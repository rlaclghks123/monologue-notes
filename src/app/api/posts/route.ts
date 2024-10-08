import { NextResponse } from 'next/server';
import { getPosts } from '@/app/actions/post';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const curPage = parseInt(searchParams.get('page') || '1', 10);
  const search = searchParams.get('search') || '';

  const { data, count } = await getPosts(curPage, search);

  return NextResponse.json({ data, count });
};
