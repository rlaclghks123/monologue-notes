export interface IBookDetail {
  totalResults: number;
  item: {
    title: string;
    cover: string;
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

export interface RecommendBook {
  itemId: number;
  link: string;
  cover: string;
  title: string;
  author: string;
  isbn13: string;
}
