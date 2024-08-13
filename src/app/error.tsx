'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ToastUI from '@/components/ToastUI';
import useAlertTimer from '@/hooks/useAlertTimer';

export default function Error() {
  const [isError, setIsError] = useState(true);
  const router = useRouter();
  useAlertTimer(isError, () => setIsError(false));

  if (!isError) {
    router.push('/');
  }

  return <ToastUI message="알 수 없는 에러가 발생했습니다." />;
}
