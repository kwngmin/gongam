import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default async function AccountPage() {
  // const session = await getServerSession(authOptions);
  const { data: session } = useSession();
  if (!session) {
    redirect('/auth/signin');
  }

  console.log(session);
  return (
    <div>
      <p>account</p>
      {session ? <button onClick={() => signOut()}>로그아웃</button> : ''}
    </div>
  );
}
