'use client';

import Detail from '@/container/Detail';

interface Props {
  params: {
    id: string;
  };
}

export default function PostDetail({ params: { id } }: Props) {
  return <Detail id={id} />;
}
