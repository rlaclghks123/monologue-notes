'use client';

import { useState } from 'react';
import useAlertTimer from '@/hooks/useAlertTimer';
import ToastUI from './ToastUI';

export default function AccessFailureUser({ message }: { message: string }) {
  const [isOpen, setIsOpen] = useState(true);

  useAlertTimer(isOpen, () => setIsOpen(false));

  if (!isOpen) window.location.href = '/';

  return <ToastUI message={message} />;
}
