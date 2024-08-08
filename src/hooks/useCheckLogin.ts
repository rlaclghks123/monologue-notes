import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/service/user';

export default function useCheckLogin(userId?: string) {
  const { data: user, isLoading } = useUser();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isNotLoggedIn = !isLoading && !user;
  const isUserMismatch = userId && user?.id && user?.id !== userId;

  useEffect(() => {
    if (isNotLoggedIn || isUserMismatch) {
      setIsAuthenticated(true);
    }
  }, [user, isLoading, userId, user?.id, isNotLoggedIn, isUserMismatch]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isAuthenticated) {
      timer = setTimeout(() => {
        router.push('/');
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [isAuthenticated, router]);

  return { isLoading, user, isNotLoggedIn, isUserMismatch };
}
