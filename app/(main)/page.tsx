import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';

import Header from '@/components/Header';
import AddDocumentButton from '@/components/AddDocumentButton';
import { getDocuments } from '@/lib/actions/room.actions';
import { dateConverter } from '@/lib/utils';

export default async function Home() {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect('/sign-in');

  const email = clerkUser.emailAddresses[0].emailAddress;

  const roomDocuments = await getDocuments(email);

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
        <div className='document-list-container'>
          <div className='document-list-title'>
            <h3 className='text-28-semibold'>All documents</h3>
            <AddDocumentButton userId={clerkUser.id} email={email} />
          </div>
          <ul className='document-ul'>
            {roomDocuments.data.map(({ id, metadata, createdAt }: any) => (
              <li key={id} className='document-list-item'>
                <Link
                  href={`/documents/${id}`}
                  className='flex flex-1 items-center gap-4'
                >
                  <div className='hidden rounded-md bg-dark-500 p-2 sm:block'>
                    <Image
                      src='/assets/icons/doc.svg'
                      alt='file'
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className='space-y-1'>
                    <p className='line-clamp-1 text-lg'>{metadata.title}</p>
                    <p className='text-sm font-light text-blue-100'>
                      Created about {dateConverter(createdAt)}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className='document-list-empty'>
          <Image
            src='/assets/icons/doc.svg'
            alt='Document'
            width={40}
            height={40}
            className='mx-auto'
          />

          <AddDocumentButton userId={clerkUser.id} email={email} />
        </div>
      )}
    </main>
  );
}
