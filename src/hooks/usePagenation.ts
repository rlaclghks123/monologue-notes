import { useEffect, useState } from 'react';

interface Props {
  totalCount: number | undefined;
  curPage: number;
  limit: number;
  setCurPage: React.Dispatch<React.SetStateAction<number>>;
}

function sliceArrayByLimit(totalCount: number | undefined, limit: number) {
  if (!totalCount) return [[1]];
  const size = Math.ceil(totalCount / limit);
  const totalPageArray = Array.from({ length: size }, (_, i) => i + 1);
  return Array.from({ length: size }, () => totalPageArray.splice(0, limit));
}

function usePagenation({ totalCount, limit, curPage, setCurPage }: Props) {
  const [pagenationArr, setPagenationArr] = useState([[1]]);
  const [curPageGroup, setCurPageGroup] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(1);

  const handlePrev = () => {
    setCurPage((prev) => prev - 1);
    setCurPageGroup(Math.floor((curPage - 2) / limit));
  };

  const handleClickPage = (index: number) => {
    setCurPage(index);
  };

  const handleNext = () => {
    if (!totalCount || curPage * limit > totalCount) return;
    setCurPage((prev) => prev + 1);
    setCurPageGroup(Math.floor(curPage / limit));
  };

  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalCount, limit);
    if (slicedPageArray) setPagenationArr(slicedPageArray);
  }, [totalCount, limit]);

  useEffect(() => {
    if (totalCount) setNumberOfPages(Math.ceil(totalCount / limit) + 1);

    if (!totalCount) {
      setPagenationArr([[1]]);
    }
  }, [totalCount]);

  useEffect(() => {
    if (curPage === 1 && curPageGroup !== 0) {
      setCurPageGroup(0);
    }
  }, [curPage]);

  return { handlePrev, handleClickPage, handleNext, pagenationArr, curPageGroup, numberOfPages };
}
export default usePagenation;
