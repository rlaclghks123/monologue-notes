import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  totalCount: number;
  limit: number;
  curPage: number;
  setCurPage?: React.Dispatch<React.SetStateAction<number>>;
}

function sliceArrayByLimit(totalCount: number, limit: number) {
  if (!totalCount) return [[1]];
  const size = Math.ceil(totalCount / (limit + 1));
  const totalPageArray = Array.from({ length: size }, (_, i) => i + 1);

  return Array.from({ length: size }, () => totalPageArray.splice(0, limit));
}

function usePagenation({ totalCount, limit, curPage, setCurPage }: Props) {
  const router = useRouter();
  const [pagenationArr, setPagenationArr] = useState(sliceArrayByLimit(totalCount, limit));
  const [curPageGroup, setCurPageGroup] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(1);

  const handlePrev = () => {
    if (setCurPage) setCurPage((prev) => prev - 1);
    if (!setCurPage) router.push(`${curPage - 1}`);
    setCurPageGroup(Math.floor((curPage - 2) / limit));
  };

  const handleClickPage = (index: number) => {
    if (!setCurPage) router.push(`${index}`);
    if (setCurPage) setCurPage(index);
  };

  const handleNext = () => {
    if (!totalCount || curPage * (limit + 1) >= totalCount) return;
    if (setCurPage) setCurPage((prev) => prev + 1);
    if (!setCurPage) router.push(`${curPage + 1}`);
    setCurPageGroup(Math.floor(curPage / limit));
  };

  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalCount, limit);

    if (slicedPageArray) setPagenationArr(slicedPageArray);
  }, [totalCount, limit]);

  useEffect(() => {
    setNumberOfPages(Math.ceil(totalCount / limit) + 1);
  }, [totalCount, limit]);

  useEffect(() => {
    if (curPage === 1 && curPageGroup !== 0) {
      setCurPageGroup(0);
    }
  }, [curPage, curPageGroup]);

  return { handlePrev, handleClickPage, handleNext, pagenationArr, curPageGroup, numberOfPages };
}
export default usePagenation;
