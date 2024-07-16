'use client';

import Post from '@/container/Post';

export default function Host() {
  const defaultData = {
    cover: '',
    title: '',
    publisher: '',
    item_page: 0,
    before_read: '',
    writer_say: '',
    after_read: '',
  };

  return <Post defaultData={defaultData} type="CREATE" />;
}
