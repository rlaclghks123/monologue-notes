import { ReactNode } from 'react';
import Link from 'next/link';

import Left from '../../../../public/svgs/angleLeft.svg';
import Right from '../../../../public/svgs/angleRight.svg';

import EmptySquare from '../../../../public/svgs/emptySquare.svg';
import FullSquare from '../../../../public/svgs/fullSquare.svg';

interface Props {
  size: number;
  curPage: number;
  children: ReactNode;
}

export default function Carousel({ size, curPage, children }: Props) {
  const prevPage = curPage === 1 ? size : curPage - 1;
  const nextPage = curPage === size ? 1 : curPage + 1;
  const isCurPage = (idx: number) => curPage === idx + 1;

  return (
    <div className="relative">
      <div className="flex justify-center px-2">
        <Link
          href={`/?page=${prevPage}`}
          className="absolute left-0 top-1/3 z-20 flex -translate-y-1/2 items-center justify-center xs:h-3 xs:w-3 sm:h-5 sm:w-5"
        >
          <Left alt="leftButton" />
        </Link>

        <div className="flex w-full items-center justify-evenly">{children}</div>

        <Link
          href={`/?page=${nextPage}`}
          className="absolute right-0 top-1/3 z-20 flex -translate-y-1/2 items-center justify-center xs:h-3 xs:w-3  sm:h-5 sm:w-5"
        >
          <Right alt="rightButton" />
        </Link>
      </div>

      <div className="flex justify-center">
        {Array.from({ length: size }, (_, idx) => (
          <Link key={idx} href={`/?page=${idx + 1}`} type="button" className="border-gray-100 p-2">
            {isCurPage(idx) ? (
              <FullSquare alt="pagenation box" className="h-3 w-3" />
            ) : (
              <EmptySquare alt="pagenation box" className="h-3 w-3" />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
