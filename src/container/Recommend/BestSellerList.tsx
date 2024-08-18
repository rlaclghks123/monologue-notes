import useCarousel from '@/hooks/useCarousel';
import { useBestSellers } from '@/service/aladinBooks';
import { RecommendBook } from '@/types/book';
import Carousel from './components/Carousel';
import CarouselItem from './components/CarouselItem';
import RecommendCardItemSkeleton from './components/RecommendCardItemSkeleton';

export default function BestSellerList() {
  const carousel = useCarousel(5);
  const { data: bestSellerList, isLoading }: { data: RecommendBook[]; isLoading: boolean } =
    useBestSellers(carousel.currentSlide);

  if (isLoading) return <RecommendCardItemSkeleton />;

  return (
    <Carousel size={5} {...carousel}>
      {bestSellerList?.map((data) => <CarouselItem key={data.itemId} data={data} />)}
    </Carousel>
  );
}
