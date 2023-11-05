'use client';
import Title from '@/components/ui/Title';
// import { authOptions } from '@/pages/api/auth/[...nextauth]';
// import { getServerSession } from 'next-auth';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function AccountPage() {
  // const session = await getServerSession(authOptions);
  const { data: session } = useSession();
  const titleData = {
    title: `Account`,
    description: `Record of thought, moments, feelings that I don't want to forget.`,
  };
  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <section className='max-w-screen-md mx-auto px-4 h-fit pb-10'>
      <Title titleData={titleData} />
      <div className='flex justify-center items-center border h-20 rounded'>
        {session ? (
          <button
            className='p-4 rounded text-center bg-slate-100 mx-auto w-80 font-medium h-fit'
            onClick={() => signOut()}
          >
            로그아웃
          </button>
        ) : (
          ''
        )}
      </div>
    </section>
  );
}
