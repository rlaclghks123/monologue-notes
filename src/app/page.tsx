import BestSellerBanner from './(BestSellerBanner)';
import HomeBanner from './(HomeBanner)';

export default async function Home() {
  return (
    <div className="w-ful h-full">
      <HomeBanner />
      <BestSellerBanner />
    </div>
  );
}
