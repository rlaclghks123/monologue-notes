import { Nanum_Gothic } from 'next/font/google';
import Navigation from '@/components/Navigation';
import type { Metadata } from 'next';

import '../styles/reset.css';
import '../styles/global.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: '독백노트',
  description:
    '독서를 통해 배우고 싶은 부분을 미리 적어보고, 저자가 전달하는 내용은 무엇인지, 내가 원하던 의문점을 저자가 해결해주었는지, 그것이 맞다면 내것으로 만들기 위해 기록해보는 독서 기록 서비스입니다.',
  icons: {
    icon: '/bookBoy.png',
  },
};

const nanuGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={nanuGothic.className}>
        <Providers>
          <Navigation />
          <div className="fixed z-[999] flex h-full w-full items-center justify-center bg-deep-green text-light-beige xs:hidden">
            너무 작은 화면입니다.
          </div>
          <main className="pt-16 xs:px-2 sm:px-16 xl:px-44">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
