import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import CollaborativeRoom from '@/components/CollaborativeRoom';
import { getDocument } from '@/lib/actions/room.actions';

export default async function DocumentPage({
  params: { id },
}: SearchParamProps) {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect('/sign-in');

  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  });

  if (!room) redirect('/');

  return (
    <main className='w-full flex flex-col items-center'>
      <CollaborativeRoom roomId={id} roomMetadata={room.metadata} />
    </main>
  );
}
