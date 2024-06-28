import ClientSideQueryClientProvider from '@/global/ClientSideQueryClientProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ClientSideQueryClientProvider>{children}</ClientSideQueryClientProvider>;
}
