import { useEffect, useRef, useState } from 'react';

const useCarousel = (limit: number) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef<HTMLDivElement>(null);

  const handlePrevClick = () => {
    if (currentSlide === 1) {
      setCurrentSlide(limit);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextClick = () => {
    if (currentSlide >= limit) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-100vw)`;
    }
  }, [currentSlide]);

  return { slideRef, currentSlide, handlePrevClick, handleNextClick, setCurrentSlide };
};

export default useCarousel;
