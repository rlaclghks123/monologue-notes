import Link from 'next/link';
import { RecommendBook } from '@/types/book';
import BookUI from './BookUI';

interface Props {
  data: RecommendBook;
}

export default function CarouselItem({ data }: Props) {
  const getAuthor = (book: RecommendBook) => book.author.split(',')[0];

  return (
    <Link key={data.itemId} href={data.link} className="flex w-1/5 flex-col items-center">
      <BookUI src={data.cover} />
      <p className=" w-10 truncate text-center xs:text-[8px] sm:w-20 sm:text-xs xl:w-28">
        {data.title}
      </p>
      <p className="truncate text-center text-xs text-gray-500 xs:w-10 xs:text-[8px] sm:w-20 sm:text-xs xl:w-28">
        {getAuthor(data)}
      </p>
    </Link>
  );
}
