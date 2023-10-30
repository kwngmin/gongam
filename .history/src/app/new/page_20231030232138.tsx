import { useSession, signIn, signOut } from 'next-auth/react';

export default function NewPostPage() {
  const { data: session } = useSession();

  return {session ? (<p>login</p>): (<p>new</p>)};
}
