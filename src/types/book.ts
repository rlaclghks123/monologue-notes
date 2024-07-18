import { ImageProps } from 'next/image';

export interface IBookDetail {
  totalResults: number;
  item: {
    title: string;
    cover: string | ImageProps;
    publisher: string;
    isbn13: string;
    itemId: number;
    subInfo: {
      itemPage: number;
    };
  }[];
}

export type SelectedBook = Pick<
  IBookDetail['item'][number],
  'title' | 'cover' | 'publisher' | 'subInfo'
>;

export interface BestSeller {
  item_id: number;
  link: string;
  cover: string | ImageProps;
  title: string;
  author: string;
  isbn13: string;
}
