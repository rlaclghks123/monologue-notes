import { BestSeller } from '@/types/book';
import CardList from './CardList';

interface Props {
  bestSellerList: BestSeller[];
  curPage: number;
}

export default async function BestSellerBanner({ bestSellerList, curPage }: Props) {
  return (
    <div className="w-ful mt-20">
      <p className="mb-4 text-lg font-bold">베스트 셀러</p>
      <CardList bestSellerList={bestSellerList} curPage={curPage} />
    </div>
  );
}
