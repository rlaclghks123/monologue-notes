import { SelectedBook } from './book';

export type PostFormDataType = Omit<SelectedBook, 'subInfo'> & {
  itemPage: number;
  beforeRead: string;
  writerSay: string;
  afterRead: string;
  user_id?: string | null;
  id?: number;
};

export type GetPosts = Omit<SelectedBook, 'subInfo'> & {
  id: number;
  created_at: string;
  itemPage: number;
  beforeRead: string;
  writerSay: string;
  afterRead: string;
  user_id?: string | null;
};
