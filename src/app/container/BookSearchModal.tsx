import Modal from '@/components/Modal';

import Button from '@/components/Button';
import BookSearch from './BookSearch';

interface Props {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  setBookId: (id: string) => void;
}

export default function BookSearchModal({ isOpen, setIsOpen, setBookId }: Props) {
  return (
    <Modal open={isOpen}>
      <div className="h-[90%]">
        <BookSearch setBookId={setBookId} setIsOpen={setIsOpen} />
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
