import type { Metadata } from 'next';

import '../styles/reset.css';
import '../styles/global.css';

export const metadata: Metadata = {
  title: '독백노트',
  description:
    '독서를 통해 배우고 싶은 부분을 미리 적어보고, 저자가 전달하는 내용은 무엇인지, 내가 원하던 의문점을 저자가 해결해주었는지, 그것이 맞다면 내것으로 만들기 위해 기록해보는 서비스입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
