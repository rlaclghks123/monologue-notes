import { SelectedBook } from './book';

export type THost = Omit<SelectedBook, 'subInfo'> & {
  itemPage: number;
  beforeRead: string;
  writerSay: string;
  afterRead: string;
};
