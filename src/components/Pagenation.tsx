'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import FullSquare from '../../public/svgs/fullSquare.svg';
import EmptySquare from '../../public/svgs/emptySquare.svg';

export default function Pagenation({ handleClick }: any) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    if (searchParams.get('page')) redirect('/');
  }, []);

  return (
    <div className="flex justify-center">
      {Array.from({ length: 5 }, (_, idx) => (
        <Link
          key={idx}
          href={`/?page=${idx + 1}`}
          type="button"
          className="border-gray-100 p-2"
          onClick={() => handleClick(idx)}
        >
          {isLoading ? (
            <Image
              src={idx + 1 === 1 ? FullSquare : EmptySquare}
              alt="pagenation box"
              className="h-3 w-3"
            />
          ) : (
            <Image
              src={currentPage === idx + 1 ? FullSquare : EmptySquare}
              alt="pagenation box"
              className="h-3 w-3"
            />
          )}
        </Link>
      ))}
    </div>
  );
}
