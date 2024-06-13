import { useEffect, useRef, useState } from 'react';

const useCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const handleClick = (idx: number) => {
    setCurrentSlide(idx * 1024 + idx * 32);
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentSlide}px)`;
    }
  }, [currentSlide]);

  return { slideRef, currentSlide, handleClick };
};

export default useCarousel;
