'use client';

import Button from '@/components/Button';
import { IBookDetail } from '@/types/book';

interface Props {
  searchedBooks?: IBookDetail['item'];
  setIsOpen: (open: boolean) => void;
  setBookId: (id: string) => void;
}

export default function BookSearchedList({ searchedBooks, setBookId, setIsOpen }: Props) {
  const handleClick = (isbn: string) => {
    setBookId(isbn);
    setIsOpen(false);
  };

  return (
    <div className="h-[80%] w-full px-3 py-1">
      <div className="h-full overflow-hidden ">
        {!searchedBooks && <div className="mt-10 text-center">검색 결과 없음</div>}
        {searchedBooks?.map((data) => (
          <div key={`${data?.itemId}`}>
            <Button
              text={`제목 : ${data?.title}`}
              className="my-1 h-7 w-full overflow-hidden truncate whitespace-nowrap text-left hover:bg-gray-200"
              onClick={() => handleClick(data.isbn13)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
