import { SelectedBook } from './book';

export type PostFormDataType = Omit<SelectedBook, 'subInfo'> & {
  itemPage: number;
  beforeRead: string;
  writerSay: string;
  afterRead: string;
};
