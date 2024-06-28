import Button from '@/components/Button';
import usePagenation from '@/hooks/usePagenation';

interface Props {
  totalCount?: number;
  limit: number;
  curPage: number;
  setCurPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function BookSearchPagenation({ totalCount, limit, curPage, setCurPage }: Props) {
  const { handlePrev, handleClickPage, handleNext, pagenationArr, curPageGroup, numberOfPages } =
    usePagenation({ totalCount, limit, curPage, setCurPage });

  return (
    <div className="mt-2 w-full">
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
  );
}
