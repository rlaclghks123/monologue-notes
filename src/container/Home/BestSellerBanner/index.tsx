import { headers } from 'next/headers';

import getBestSeller from '@/service/getBestSeller';
import { BestSeller } from '@/types/book';
import CardList from './CardList';

export default async function BestSellerBanner() {
  const headersList = headers();
  const curPage = Number(headersList.get('pathname')?.split('page=')[1]) || 1;
  const { item }: { item: BestSeller[] } = await getBestSeller(curPage);

  return (
    <div className="w-ful mt-11">
      <p className="mb-2">베스트 셀러</p>
      <CardList item={item} curPage={curPage} />
    </div>
  );
}
