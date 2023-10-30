import { useSession, signIn, signOut } from 'next-auth/react';

export default function NewPostPage() {
  const { data: session } = useSession();

  return <p>new</p>;
}
