import BestSellerBanner from './container/BestSellerBanner';
import HomeBanner from './container/HomeBanner';

export default async function Home() {
  return (
    <div className="w-ful h-full">
      <HomeBanner />
      <BestSellerBanner />
    </div>
  );
}
