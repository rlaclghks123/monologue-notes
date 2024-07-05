'use client';

import Image from 'next/image';
import Link from 'next/link';

import { BestSeller } from '@/types/book';
import Carousel from './Carousel';

interface Props {
  item: BestSeller[];
  curPage: number;
}

export default function CardList({ item, curPage }: Props) {
  const getAuthor = (data: BestSeller) => data.author.split(',')[0];

  return (
    <div className="relative">
      <div className=" overflow-hidden">
        <div className="flex w-full items-center justify-between ">
          {item?.map((data) => (
            <Link key={data.itemId} href={data.link} className="flex flex-col">
              <Image
                src={data.cover}
                width={130}
                height={190}
                alt="베스트셀러"
                className="h-44 w-36 rounded-xl"
              />
              <p className="w-36  truncate">{data.title}</p>
              <p className="w-36 text-xs text-gray-500">{getAuthor(data)}</p>
            </Link>
          ))}
        </div>
      </div>
      <Carousel size={5} curPage={curPage} />
    </div>
  );
}
