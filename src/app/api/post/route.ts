import { NextResponse } from 'next/server';
import { getPostDetail } from '@/app/actions/post';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const data = await getPostDetail(id ?? '');
  return NextResponse.json(data);
};
