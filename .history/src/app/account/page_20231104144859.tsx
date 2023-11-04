'use client';
// import { authOptions } from '@/pages/api/auth/[...nextauth]';
// import { getServerSession } from 'next-auth';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function AccountPage() {
  // const session = await getServerSession(authOptions);
  const { data: session } = useSession();
  if (!session) {
    redirect('/auth/signin');
  }

  console.log(session);
  return (
    <div>
      <p>account</p>
      {session ? (
        <button
          className='p-4 rounded text-center bg-slate-100 mx-auto w-80 font-medium'
          onClick={() => signOut()}
        >
          로그아웃
        </button>
      ) : (
        ''
      )}

      <button
        className='p-4 rounded text-center bg-slate-100 mx-auto w-80 font-medium'
        onClick={() => signIn(id, { callbackUrl })}
      >
        Sign in with {name}
      </button>
    </div>
  );
}
