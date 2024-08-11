import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function useAlertTimer(
  alertState: boolean,
  callback: (() => void) | null = null,
  action: (() => any) | null = null,
) {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (action) {
        dispatch(action());
      } else if (callback) {
        callback();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [alertState]);
}
