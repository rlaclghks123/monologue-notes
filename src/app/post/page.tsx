'use client';

import Post from '@/container/Post';

export default function Host() {
  const defaultData = {
    cover: '',
    title: '',
    publisher: '',
    itemPage: 0,
    beforeRead: '',
    writerSay: '',
    afterRead: '',
  };

  return <Post defaultData={defaultData} type="CREATE" />;
}
