'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import usePagenation from '@/hooks/usePagenation';
import useSearchBooks from '../service/getSearchBooks';

interface Props {
  setIsOpen: (open: boolean) => void;
  setBookId: (id: string) => void;
}

export default function BookSearch({ setBookId, setIsOpen }: Props) {
  const [query, setQuery] = useState('');
  const [curPage, setCurPage] = useState(1);

  const limit = 9;

  const { data: searchedBooks, refetch: searchedRefetch } = useSearchBooks(query, curPage, limit);

  const { handlePrev, handleClickPage, handleNext, pagenationArr, curPageGroup, numberOfPages } =
    usePagenation({ totalCount: searchedBooks?.totalResults, limit, curPage, setCurPage });

  const handleClick = (isbn: string) => {
    setBookId(isbn);
    setIsOpen(false);
  };

  return (
    <>
      <form className="flex h-[10%] w-full justify-center gap-2">
        <input
          className="w-2/4 rounded-md border border-black p-1"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <Button
          text="검색"
          onClick={() => searchedRefetch()}
          className="rounded-md border border-black p-1 px-2 hover:bg-gray-200"
        />
      </form>

      <div className="h-[85%] w-full p-3">
        <div className="h-full overflow-hidden ">
          {!searchedBooks?.item && <div className="mt-10 text-center">검색 결과 없음</div>}
          {searchedBooks?.item?.map((data) => (
            <div key={`${data?.itemId}`}>
              <Button
                text={`제목 : ${data?.title}`}
                className="my-1 h-7 w-full overflow-hidden truncate whitespace-nowrap text-left hover:bg-gray-200"
                onClick={() => handleClick(data.isbn13)}
              />
            </div>
          ))}
        </div>

        <div className="w-full">
          <div className="flex items-center justify-center gap-2">
            <Button
              text="<"
              onClick={handlePrev}
              disabled={curPage === 1}
              className="w-6 rounded-md hover:bg-gray-200"
            />

            {pagenationArr[curPageGroup]?.map((number, idx) => (
              <Button
                key={number}
                text={String(number)}
                onClick={() => handleClickPage(number)}
                className={`w-6 rounded-md hover:bg-gray-200 ${((curPage - 1) % 9) + 1 === idx + 1 ? 'bg-gray-200' : ''} `}
              />
            ))}

            <Button
              text=">"
              onClick={handleNext}
              disabled={curPage === numberOfPages - 1}
              className="w-6 rounded-md hover:bg-gray-200"
            />
          </div>
        </div>
      </div>
    </>
  );
}
