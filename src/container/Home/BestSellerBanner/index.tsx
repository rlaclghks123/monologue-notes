import { headers } from 'next/headers';

import { BestSeller } from '@/types/book';
import CardList from './CardList';
import getBestSeller from '@/service/getBestSeller';

export default async function BestSellerBanner() {
  const headersList = headers();
  const curPage = Number(headersList.get('pathname')?.split('page=')[1]) || 1;
  const { item: bestSellerList }: { item: BestSeller[] } = await getBestSeller(curPage);

  return (
    <div className="w-ful mt-20">
      <p className="mb-4 text-lg font-bold">베스트 셀러</p>
      <CardList bestSellerList={bestSellerList} curPage={curPage} />
    </div>
  );
}
