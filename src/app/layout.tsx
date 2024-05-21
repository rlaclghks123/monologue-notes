import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'monologue-notes',
  description: 'This site is that helps you read books effectively',
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
