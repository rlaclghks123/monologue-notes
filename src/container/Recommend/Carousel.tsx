import { ReactNode } from 'react';

import Button from '@/components/Button';

import Left from '../../../public/svgs/angleLeft.svg';
import Right from '../../../public/svgs/angleRight.svg';

import EmptySquare from '../../../public/svgs/emptySquare.svg';
import FullSquare from '../../../public/svgs/fullSquare.svg';

interface Props {
  size: number;
  currentSlide: number;
  handlePrevClick: React.MouseEventHandler<HTMLButtonElement>;
  handleNextClick: React.MouseEventHandler<HTMLButtonElement>;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
}

export default function Carousel({
  size,
  currentSlide,
  handlePrevClick,
  handleNextClick,
  setCurrentSlide,
  children,
}: Props) {
  const isCurPage = (idx: number) => currentSlide === idx + 1;

  return (
    <div className="relative">
      <div className="flex justify-center px-2 pt-7">
        <Button
          text={<Left alt="leftButton" />}
          onClick={handlePrevClick}
          className="absolute left-0 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center xs:h-3 xs:w-3 sm:h-5 sm:w-5"
        />

        <div className="flex w-[95%] items-center justify-evenly xs:gap-2 sm:gap-6 xl:gap-10">
          {children}
        </div>

        <Button
          text={<Right alt="rightButton" />}
          onClick={handleNextClick}
          className="absolute right-0 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center xs:h-3 xs:w-3 sm:h-5 sm:w-5"
        />
      </div>

      <div className="flex justify-center">
        {Array.from({ length: size }, (_, idx) => (
          <Button
            key={idx}
            text={
              isCurPage(idx) ? (
                <FullSquare alt="pagenation box" className="h-3 w-3" />
              ) : (
                <EmptySquare alt="pagenation box" className="h-3 w-3" />
              )
            }
            onClick={() => setCurrentSlide(idx + 1)}
            className="border-gray-100 p-2"
          />
        ))}
      </div>
    </div>
  );
}
