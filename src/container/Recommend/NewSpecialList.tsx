import useCarousel from '@/hooks/useCarousel';
import { useNewSpeicalList } from '@/service/aladinBooks';
import { RecommendBook } from '@/types/book';
import Carousel from './components/Carousel';
import CarouselItem from './components/CarouselItem';
import RecommendCardItemSkeleton from './components/RecommendCardItemSkeleton';

export default function NewSpecialList() {
  const carousel = useCarousel(5);
  const { data: newSpeicalList, isLoading }: { data: RecommendBook[]; isLoading: boolean } =
    useNewSpeicalList(carousel.currentSlide);

  if (isLoading) return <RecommendCardItemSkeleton />;

  return (
    <Carousel size={5} {...carousel}>
      {newSpeicalList?.map((data) => <CarouselItem key={data.itemId} data={data} />)}
    </Carousel>
  );
}
