import { headers } from 'next/headers';

import CardList from '@/components/CardList';
import getBestSeller from '../service/getBestSeller';

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
  const { item }: BookApi = await getBestSeller(curPage);

  return (
    <div className="w-ful mt-11">
      <p className="mb-2">베스트 셀러</p>
      <CardList item={item} curPage={curPage} />
    </div>
  );
}
