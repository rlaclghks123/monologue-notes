'use client';

import { loginHandler } from '@/service/user';
import Spinner from '../../../public/svgs/spinner.svg';

function Page() {
  loginHandler();

  return (
    <div className="flex h-40 w-full items-center justify-center gap-6">
      <p className="font-semibold text-peach-fuzz">잠시만 기다려주세요</p>
      <div className="h-8 w-8 animate-spin">
        <Spinner alt="Loading icon" className="fill-peach-fuzz" />
      </div>
    </div>
  );
}

export default Page;
