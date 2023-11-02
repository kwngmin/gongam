'use client';

import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function AccountPage() {
  const { data: session } = useSession();
  if (!session) {
    redirect('/auth/signin');
  }
  return (
    <div>
      <p>account</p>
      {session ? <button onClick={() => signOut()}>로그아웃</button> : ''}
    </div>
  );
}
