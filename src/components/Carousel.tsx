import Image from 'next/image';
import Link from 'next/link';

import Left from '../../public/svgs/angleLeft.svg';
import Right from '../../public/svgs/angleRight.svg';

import FullSquare from '../../public/svgs/fullSquare.svg';
import EmptySquare from '../../public/svgs/emptySquare.svg';

interface Props {
  size: number;
  curPage: number;
}

export default function Carousel({ size, curPage }: Props) {
  return (
    <>
      <div className="absolute top-20 flex justify-center ">
        <Link
          href={`/?page=${curPage - 1 === 0 ? 5 : curPage - 1}`}
          className="absolute left-[-24px] z-20 h-5 w-5"
        >
          <Image src={Left} alt="left" />
        </Link>
        <Link
          href={`/?page=${curPage + 1 === 6 ? 1 : curPage + 1}`}
          className="absolute left-[1030px] z-20 h-5 w-5"
        >
          <Image src={Right} alt="right" />
        </Link>
      </div>

      <div className="flex justify-center">
        {Array.from({ length: size }, (_, idx) => (
          <Link key={idx} href={`/?page=${idx + 1}`} type="button" className="border-gray-100 p-2">
            <Image
              src={curPage === idx + 1 ? FullSquare : EmptySquare}
              alt="pagenation box"
              className="h-3 w-3"
            />
          </Link>
        ))}
      </div>
    </>
  );
}
