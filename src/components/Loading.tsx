import { useState, useEffect } from 'react';
import Spinner from '../../public/svgs/spinner.svg';

export default function Loading() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) {
    return null;
  }

  return (
    <div className="flex h-36 w-full items-center justify-center">
      <div className="h-10 w-10 animate-spin">
        <Spinner alt="Loading icon" className="fill-peach-fuzz" />
      </div>
    </div>
  );
}
