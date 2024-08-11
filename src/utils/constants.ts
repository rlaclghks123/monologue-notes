import { CreatePost } from '@/types/post';

export const defaultFormData: CreatePost = {
  cover: '',
  title: '',
  publisher: '',
  item_page: 0,
  before_read: '',
  writer_say: '',
  after_read: '',
};

export const POSTS_LIMIT = 8;
