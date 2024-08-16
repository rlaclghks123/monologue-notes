'use client';

import Image from 'next/image';
import Link from 'next/link';

import { BestSeller } from '@/types/book';
import Carousel from './Carousel';

interface Props {
  bestSellerList: BestSeller[];
  curPage: number;
}

export default function CardList({ bestSellerList, curPage }: Props) {
  const getAuthor = (data: BestSeller) => data.author.split(',')[0];

  return (
    <Carousel size={5} curPage={curPage}>
      {bestSellerList?.map((data) => (
        <Link key={data.itemId} href={data.link} className="flex w-1/5 flex-col items-center">
          <Image
            src={data.cover}
            width={112}
            height={128}
            alt="베스트셀러"
            className="mb-2 rounded-xl bg-gray-200 xs:h-16 xs:w-10 sm:h-28 sm:w-20 xl:h-32 xl:w-28"
          />
          <p className="w-10 truncate text-center xs:text-[8px] sm:w-20 sm:text-xs xl:w-28">
            {data.title}
          </p>
          <p className="truncate text-center text-xs text-gray-500 xs:w-10 xs:text-[8px] sm:w-20 sm:text-xs xl:w-28">
            {getAuthor(data)}
          </p>
        </Link>
      ))}
    </Carousel>
  );
}
