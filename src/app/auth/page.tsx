'use client';

import { loginHandler } from '@/service/user';

function Page() {
  loginHandler();

  return <div>잠시만 기다려주세요...</div>;
}

export default Page;
