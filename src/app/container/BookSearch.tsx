'use client';

import usePagenation from '@/hooks/usePagenation';
import { useEffect, useState } from 'react';

async function searchBook(query: string, curPage: number, limit: number) {
  const BASE_URL = '/api/ttb/api/ItemSearch.aspx';
  const endpoint = `${BASE_URL}?ttbkey=${process.env.NEXT_PUBLIC_ALADIN_OPEN_API_KEY}&Query=${query}&QueryType=Title&MaxResults=${limit}&start=${curPage}&SearchTarget=Book&output=JS&Version=20131101`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}

interface IBook {
  totalResults: number;
  item: {
    title: string;
    cover: string;
    publisher: string;
    isbn13: string;
    itemId: number;
    subInfo: {
      itemPage: number;
    };
  }[];
}

export default function BookSearch() {
  const [bookDetail, setBookDetail] = useState<IBook>();
  const [query, setQuery] = useState('');
  const [curPage, setCurPage] = useState(1);
  const [isSearch, setIsSearch] = useState(false);
  const limit = 9;

  const { handlePrev, handleClickPage, handleNext, pagenationArr, curPageGroup, numberOfPages } =
    usePagenation({ totalCount: bookDetail?.totalResults, limit, curPage, setCurPage });

  useEffect(() => {
    const fetchSearchBook = async () => {
      const books = await searchBook(query, curPage, limit);
      if (books) setBookDetail(books);
    };

    fetchSearchBook();
    setIsSearch(false);
  }, [curPage, isSearch]);

  return (
    <>
      <div className="flex h-[10%] w-full justify-center gap-2">
        <input
          className="w-2/4 rounded-md border border-black p-1"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setIsSearch(true)}
          className="rounded-md border border-black p-1 px-2 hover:bg-gray-200"
        >
          검색
        </button>
      </div>

      <div className="h-[85%] w-full p-3">
        <div className="h-full overflow-hidden ">
          {bookDetail?.item ? (
            bookDetail?.item?.map((data) => (
              <ul key={`${data?.itemId}`}>
                <li className="my-1 h-7 w-full overflow-hidden truncate whitespace-nowrap hover:bg-gray-200">
                  {`제목 : ${data?.title}`}
                </li>
              </ul>
            ))
          ) : (
            <div className="mt-10 text-center">검색 결과 없음</div>
          )}
        </div>

        <div className="w-full">
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={curPage === 1}
              className="w-6 rounded-md hover:bg-gray-200"
            >
              {'<'}
            </button>
            {pagenationArr[curPageGroup]?.map((number, idx) => (
              <button
                key={number}
                type="button"
                onClick={() => handleClickPage(number)}
                className={`w-6 rounded-md hover:bg-gray-200 ${((curPage - 1) % 9) + 1 === idx + 1 ? 'bg-gray-200' : ''} `}
              >
                {number}
              </button>
            ))}
            <button
              type="button"
              onClick={handleNext}
              disabled={curPage === numberOfPages - 1}
              className="w-6 rounded-md hover:bg-gray-200"
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
