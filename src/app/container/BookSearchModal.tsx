import { useState } from 'react';

import Modal from '@/components/Modal';
import Button from '@/components/Button';

import BookSearch from './BookSearch';
import BookSearchedList from './BookSearchedList';
import BookSearchPagenation from './BookSearchPagenation';
import useSearchBooks from '../service/getSearchBooks';

interface Props {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  setBookId: (id: string) => void;
}

export default function BookSearchModal({ isOpen, setIsOpen, setBookId }: Props) {
  const [query, setQuery] = useState('');
  const [curPage, setCurPage] = useState(1);
  const limit = 9;

  const { data: searchedBooks } = useSearchBooks(query, curPage, limit);

  return (
    <Modal open={isOpen}>
      <div className="h-[90%]">
        <BookSearch query={query} setQuery={setQuery} setCurPage={setCurPage} />

        <BookSearchedList
          searchedBooks={searchedBooks?.item}
          setBookId={setBookId}
          setIsOpen={setIsOpen}
        />

        <BookSearchPagenation
          totalCount={searchedBooks?.totalResults}
          limit={limit}
          curPage={curPage}
          setCurPage={setCurPage}
        />
      </div>

      <div className="flex h-[10%] justify-center gap-10">
        <Button
          text="저장"
          onClick={() => setIsOpen(false)}
          className="rounded-lg bg-gray-200 p-2"
        />

        <Button
          text="닫기"
          onClick={() => setIsOpen(false)}
          className="rounded-lg bg-gray-200 p-2"
        />
      </div>
    </Modal>
  );
}
