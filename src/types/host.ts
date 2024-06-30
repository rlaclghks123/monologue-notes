import { SelectedBook } from './book';

export type HostFormDataType = Omit<SelectedBook, 'subInfo'> & {
  itemPage: number;
  beforeRead: string;
  writerSay: string;
  afterRead: string;
};
