import { SelectedBook } from './book';

export type THost = SelectedBook & {
  beforeRead: string;
  writerSay: string;
  afterRead: string;
};
