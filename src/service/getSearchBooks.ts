import { IBookDetail } from '@/types/book';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

async function getSearchBook(query: string, curPage: number, limit: number) {
  const BASE_URL = '/api/ttb/api/ItemSearch.aspx';
  const endpoint = `${BASE_URL}?ttbkey=${process.env.NEXT_PUBLIC_ALADIN_OPEN_API_KEY}&Query=${query}&QueryType=Title&MaxResults=${limit}&start=${curPage}&SearchTarget=Book&output=JS&Version=20131101`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}

export default function useSearchBooks(query: string, curPage: number, limit: number) {
  const { data, isLoading, isError } = useQuery<IBookDetail>({
    queryKey: ['searchBooks', query, curPage, limit],
    queryFn: () => getSearchBook(query, curPage, limit),
    placeholderData: keepPreviousData,
  });

  return { data, isLoading, isError };
}
