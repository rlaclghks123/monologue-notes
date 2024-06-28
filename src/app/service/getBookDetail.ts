import { SelectedBook } from '@/types/book';
import { useQuery } from '@tanstack/react-query';

async function detailBook(isbn: string) {
  const BASE_URL = '/api/ttb/api/ItemLookUp.aspx';
  const endpoint = `${BASE_URL}?ttbkey=${process.env.NEXT_PUBLIC_ALADIN_OPEN_API_KEY}&itemIdType=ISBN&ItemId=${isbn}&output=JS&Version=20131101`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data.item[0];
}

export default function useBookDetail(isbn: string) {
  const { data, isLoading, isError, refetch } = useQuery<SelectedBook>({
    queryKey: ['bookDetail', isbn],
    queryFn: () => detailBook(isbn),
  });

  return { data, isLoading, isError, refetch };
}
