import { headers } from 'next/headers';

import Home from '@/container/Home';
import getBestSeller from '@/service/getBestSeller';
import { BestSeller } from '@/types/book';

export default async function HomePage() {
  const headersList = headers();
  const curPage = Number(headersList.get('pathname')?.split('page=')[1]) || 1;
  const { item: bestSellerList }: { item: BestSeller[] } = await getBestSeller(curPage);

  return <Home bestSellerList={bestSellerList} curPage={curPage} />;
}
