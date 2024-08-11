'use client';

import Button from '@/components/Button';
import usePagenation from '@/hooks/usePagenation';

interface Props {
  totalCount: number;
  limit: number;
  curPage: number;
  setCurPage?: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagenation({ totalCount, limit, curPage, setCurPage }: Props) {
  const { handlePrev, handleClickPage, handleNext, pagenationArr, curPageGroup, numberOfPages } =
    usePagenation({ totalCount, limit, curPage, setCurPage });

  const isCurPage = (idx: number) => ((curPage - 1) % limit) + 1 === idx + 1;

  return (
    <div className="mt-2 w-full">
      <div className="flex items-center justify-center gap-2">
        <Button
          text="<"
          onClick={handlePrev}
          disabled={curPage === 1}
          className="w-6 rounded-md hover:bg-gray-200 hover:text-white"
        />

        {pagenationArr[curPageGroup]?.map((number, idx) => (
          <Button
            key={number}
            text={String(number)}
            onClick={() => handleClickPage(number)}
            className={`w-6 rounded-md hover:bg-gray-200 hover:text-white ${isCurPage(idx) && 'bg-gray-200 text-white'} `}
          />
        ))}

        <Button
          text=">"
          onClick={handleNext}
          disabled={curPage === numberOfPages - 1}
          className="w-6 rounded-md hover:bg-gray-200 hover:text-white"
        />
      </div>
    </div>
  );
}
