'use client';

import { RoomProvider, ClientSideSuspense } from '@liveblocks/react/suspense';
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs';
import { Editor } from './editor/Editor';
import Header from './Header';
import Loader from './Loader';
import ActiveCollaborators from './ActiveCollaborators';

export default function CollaborativeRoom({ roomId }: CollaborativeRoomProps) {
  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
        <div className='collaborative-room'>
          <Header>
            <p>Share</p>

            <div className='flex w-full flex-1 justify-end gap-2 sm:gap-3'>
              <ActiveCollaborators />

              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Header>

          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
}
