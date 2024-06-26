import { useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
  open: boolean;
}

export default function Modal({ open, children }: Props) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return createPortal(
    <>
      <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-black opacity-90" />
      <div className="absolute left-1/3 top-[15%] z-20 h-[70%] w-1/3 rounded-lg bg-white p-5">
        <div className="h-full w-full">{children}</div>
      </div>
    </>,
    document.body,
  );
}
