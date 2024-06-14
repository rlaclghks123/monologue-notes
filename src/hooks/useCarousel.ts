import { useEffect, useRef, useState } from 'react';

const useCarousel = (limit: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const handlePrevClick = () => {
    if (currentSlide === 0) {
      setCurrentSlide(limit - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextClick = () => {
    if (currentSlide >= limit - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentSlide * 1024 + currentSlide * 32}px)`;
    }
  }, [currentSlide]);

  return { slideRef, currentSlide, handlePrevClick, handleNextClick };
};

export default useCarousel;
