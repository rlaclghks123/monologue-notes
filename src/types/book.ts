import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface IBookDetail {
  totalResults: number;
  item: {
    title: string;
    cover: string | StaticImport;
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
  itemId: number;
  link: string;
  cover: string | StaticImport;
  title: string;
  author: string;
  isbn13: string;
}
