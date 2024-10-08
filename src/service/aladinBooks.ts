import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { SelectedBook, IBookDetail } from '@/types/book';

export async function fetchBookList(
  curPage: number,
  queryType: 'Bestseller' | 'ItemNewSpecial' | 'BlogBest',
) {
  const BASE_URL = '/api/ttb/api';
  const response = await fetch(
    `${BASE_URL}/ItemList.aspx?ttbkey=${process.env.NEXT_PUBLIC_ALADIN_OPEN_API_KEY}&QueryType=${queryType}&MaxResults=5&start=${curPage}&SearchTarget=Book&output=JS&Version=20131101`,
  );

  const json = await response.json();
  return json;
}

export function useBestSellers(curPage: number) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['bestSellers', curPage],
    queryFn: () => fetchBookList(curPage, 'Bestseller'),
    select: (items) => items.item,
    placeholderData: keepPreviousData,
  });

  return { data, isLoading, isError, refetch };
}

export function useNewSpeicalList(curPage: number) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['ItemNewSpecial', curPage],
    queryFn: () => fetchBookList(curPage, 'ItemNewSpecial'),
    select: (items) => items.item,

    placeholderData: keepPreviousData,
  });

  return { data, isLoading, isError, refetch };
}

export function useBlogerBestSellerList(curPage: number) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['BlogBest', curPage],
    queryFn: () => fetchBookList(curPage, 'BlogBest'),
    select: (items) => items.item,
    placeholderData: keepPreviousData,
  });

  return { data, isLoading, isError, refetch };
}

async function fetchDetailBook(isbn: string) {
  const BASE_URL = '/api/ttb/api/ItemLookUp.aspx';
  const endpoint = `${BASE_URL}?ttbkey=${process.env.NEXT_PUBLIC_ALADIN_OPEN_API_KEY}&itemIdType=ISBN&ItemId=${isbn}&output=JS&Version=20131101`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data.item[0];
}

export function useBookDetail(isbn: string) {
  const { data, isLoading, isError, refetch } = useQuery<SelectedBook>({
    queryKey: ['bookDetail', isbn],
    queryFn: () => fetchDetailBook(isbn),
  });

  return { data, isLoading, isError, refetch };
}

async function fetchSearchedBooks(query: string, curPage: number, limit: number) {
  const BASE_URL = '/api/ttb/api/ItemSearch.aspx';
  const endpoint = `${BASE_URL}?ttbkey=${process.env.NEXT_PUBLIC_ALADIN_OPEN_API_KEY}&Query=${query}&QueryType=Title&MaxResults=${limit}&start=${curPage}&SearchTarget=Book&output=JS&Version=20131101`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}

export default function useSearchBooks(query: string, curPage: number, limit: number) {
  const { data, isLoading, isError } = useQuery<IBookDetail>({
    queryKey: ['searchBooks', query, curPage, limit],
    queryFn: () => fetchSearchedBooks(query, curPage, limit),
    placeholderData: keepPreviousData,
  });

  return { data, isLoading, isError };
}
