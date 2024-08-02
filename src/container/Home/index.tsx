import { BestSeller } from '@/types/book';
import Banner from './Banner';
import BestSellerBanner from './BestSellerBanner';

interface Props {
  bestSellerList: BestSeller[];
  curPage: number;
}

export default function Home({ bestSellerList, curPage }: Props) {
  return (
    <div className="w-ful h-full">
      <Banner />
      <BestSellerBanner bestSellerList={bestSellerList} curPage={curPage} />
    </div>
  );
}
