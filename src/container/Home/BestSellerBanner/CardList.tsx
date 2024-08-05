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
            className="xs:w-10 xs:h-16 mb-2 rounded-xl bg-gray-200 sm:h-28 sm:w-20 xl:h-32 xl:w-28"
          />
          <p className="xs:text-[8px] w-10 truncate text-center sm:w-20 sm:text-xs xl:w-28">
            {data.title}
          </p>
          <p className="xs:w-10 xs:text-[8px] truncate text-center text-xs text-gray-500 sm:w-20 sm:text-xs xl:w-28">
            {getAuthor(data)}
          </p>
        </Link>
      ))}
    </Carousel>
  );
}
