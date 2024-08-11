'use client';

import { useState } from 'react';
import useAlertTimer from '@/hooks/useAlertTimer';
import ToastUI from './ToastUI';

export default function NotFountUser() {
  const [isOpen, setIsOpen] = useState(true);

  useAlertTimer(isOpen, () => setIsOpen(false));

  if (!isOpen) window.location.href = '/';

  return <ToastUI message="로그인 후 이용해 주세요." />;
}
