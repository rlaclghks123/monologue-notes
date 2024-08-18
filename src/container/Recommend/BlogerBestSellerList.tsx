import useCarousel from '@/hooks/useCarousel';
import { useBlogerBestSellerList } from '@/service/aladinBooks';
import { RecommendBook } from '@/types/book';
import Carousel from './components/Carousel';
import CarouselItem from './components/CarouselItem';
import RecommendCardItemSkeleton from './components/RecommendCardItemSkeleton';

export default function BlogerBestSellerList() {
  const carousel = useCarousel(5);
  const { data: blogerBestSellerList, isLoading }: { data: RecommendBook[]; isLoading: boolean } =
    useBlogerBestSellerList(carousel.currentSlide);

  if (isLoading) return <RecommendCardItemSkeleton />;

  return (
    <Carousel size={5} {...carousel}>
      {blogerBestSellerList?.map((data) => <CarouselItem key={data.itemId} data={data} />)}
    </Carousel>
  );
}
