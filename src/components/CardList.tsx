'use client';

import Image from 'next/image';
import Link from 'next/link';
import useCarousel from '@/hooks/useCarousel';
import Carousel from './Carousel';

interface BestSeller {
  itemId: number;
  link: string;
  cover: string;
  title: string;
  author: string;
}

export default function CardList({ item }: { item: BestSeller[] }) {
  const limit = Math.ceil(item.length / 6);
  const { slideRef, handlePrevClick, handleNextClick } = useCarousel(limit);

  return (
    <div className="relative">
      <div className=" overflow-hidden">
        <div className="flex w-full items-center justify-between " ref={slideRef}>
          {item?.map((data) => (
            <Link key={data.itemId} href={data.link} className="flex flex-col">
              <Image
                src={data.cover}
                width={130}
                height={190}
                alt="베스트셀러"
                className="h-44 w-36 rounded-xl"
              />
              <p className="w-44 truncate">{data.title}</p>
              <p className="text-xs text-gray-500">{data.author.split(',')[0]}</p>
            </Link>
          ))}
        </div>
      </div>
      <Carousel handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} />
    </div>
  );
}
