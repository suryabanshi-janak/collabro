'use client';

import { PropsWithChildren } from 'react';
import {
  ClientSideSuspense,
  LiveblocksProvider,
} from '@liveblocks/react/suspense';
import Loader from '@/components/Loader';

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <LiveblocksProvider authEndpoint='/api/liveblocks-auth'>
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
