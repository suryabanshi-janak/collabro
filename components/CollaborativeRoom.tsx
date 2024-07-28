'use client';

import { RoomProvider, ClientSideSuspense } from '@liveblocks/react/suspense';
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs';
import { Editor } from './editor/Editor';
import Header from './Header';
import Loader from './Loader';

export default function CollaborativeRoom() {
  return (
    <RoomProvider id='my-room'>
      <ClientSideSuspense fallback={<Loader />}>
        <div className='collaborative-room'>
          <Header>
            <p>Share</p>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Header>

          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
}
