import { headers } from 'next/headers';

import { getBestSeller } from '@/service/aladinBooks';
import { BestSeller } from '@/types/book';
import CardList from './CardList';

export default async function Recommend() {
  const headersList = headers();
  const curPage = Number(headersList.get('pathname')?.split('page=')[1]) || 1;
  const { item: bestSellerList }: { item: BestSeller[] } = await getBestSeller(curPage);

  return (
    <section className="w-ful mt-20">
      <h2 className="mb-4 text-lg font-bold">알라딘 베스트 셀러</h2>
      <CardList bestSellerList={bestSellerList} curPage={curPage} />
    </section>
  );
}
