import Modal from '@/components/Modal';

import { SelectedBook } from '@/types/book';
import BookSearch from './BookSearch';

interface Props {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  setData: React.Dispatch<React.SetStateAction<SelectedBook>>;
}

export default function BookSearchModal({ isOpen, setIsOpen, setData }: Props) {
  return (
    <Modal open={isOpen}>
      <div className="h-[90%]">
        <BookSearch setData={setData} setIsOpen={setIsOpen} />
      </div>

      <div className="flex h-[10%] justify-center gap-10">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="rounded-lg bg-gray-200 p-2"
        >
          저장
        </button>

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="rounded-lg bg-gray-200 p-2"
        >
          닫기
        </button>
      </div>
    </Modal>
  );
}
