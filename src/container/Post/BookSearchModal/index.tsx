import { useState } from 'react';

import Button from '@/components/Button';
import Modal from '@/components/Modal';

import BookSearch from './BookSearch';
import BookSearchedList from './BookSearchedList';
import Pagenation from '../../../components/Pagenation';
import useSearchBooks from '../../../service/getSearchBooks';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBookId: React.Dispatch<React.SetStateAction<string>>;
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

        <Pagenation
          totalCount={searchedBooks?.totalResults ?? 1}
          limit={limit}
          curPage={curPage}
          setCurPage={setCurPage}
        />
      </div>

      <div className="flex h-[10%] justify-center gap-10">
        <Button
          text="닫기"
          onClick={() => setIsOpen(false)}
          className="rounded-lg bg-gray-200 p-2"
        />
      </div>
    </Modal>
  );
}
