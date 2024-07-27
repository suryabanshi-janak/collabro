import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs';
import { Editor } from '@/components/editor/Editor';
import Header from '@/components/Header';

export default function DocumentPage() {
  return (
    <div>
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
  );
}
