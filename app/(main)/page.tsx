import { redirect } from 'next/navigation';
import Image from 'next/image';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';

import Header from '@/components/Header';
import AddDocumentButton from '@/components/AddDocumentButton';

export default async function Home() {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect('/sign-in');

  const roomDocuments: any = [];

  return (
    <main className='home-container'>
      <Header className='sticky left-0 top-0'>
        <div className='flex items-center gap-2 lg:gap-4'>
          Notifications
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>

      {roomDocuments.data?.length > 0 ? (
        <div className='document-list-container'></div>
      ) : (
        <div className='document-list-empty'>
          <Image
            src='/assets/icons/doc.svg'
            alt='Document'
            width={40}
            height={40}
            className='mx-auto'
          />

          <AddDocumentButton
            userId={clerkUser.id}
            email={clerkUser.emailAddresses[0].emailAddress}
          />
        </div>
      )}
    </main>
  );
}
