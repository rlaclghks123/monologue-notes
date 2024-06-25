import CardList from '@/components/CardList';
import { headers } from 'next/headers';

async function getBook(curPage: number) {
  const BASE_URL = 'http://www.aladin.co.kr/ttb/api';
  const response = await fetch(
    `${BASE_URL}/ItemList.aspx?ttbkey=${process.env.NEXT_PUBLIC_ALADIN_OPEN_API_KEY}&QueryType=Bestseller&MaxResults=6&start=${curPage}&SearchTarget=Book&output=JS&Version=20131101`,
  );

  const json = await response.json();
  return json;
}

interface BestSeller {
  itemId: number;
  link: string;
  cover: string;
  title: string;
  author: string;
  isbn13: string;
}

interface BookApi {
  item: BestSeller[];
}
export default async function BestSellerBanner() {
  const headersList = headers();
  const curPage = Number(headersList.get('pathname')?.split('page=')[1]) || 1;
  const { item }: BookApi = await getBook(curPage);
  return (
    <div className="w-ful mt-11">
      <p className="mb-2">베스트 셀러</p>
      <CardList item={item} curPage={curPage} />
    </div>
  );
}
