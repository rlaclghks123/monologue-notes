'use client';

import { Provider } from 'react-redux';
import ClientSideQueryClientProvider from '@/global/ClientSideQueryClientProvider';

import store from '../store';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientSideQueryClientProvider>
      <Provider store={store}>{children}</Provider>
    </ClientSideQueryClientProvider>
  );
}
