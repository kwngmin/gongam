'use client';
import RoundIcon from '@/components/ui/icons/RoundIcon';
import { useSession, signIn, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';

export default function AccountPage() {
  const { data: session } = useSession();
  if (session) {
    redirect('/');
  }
  return (
    <div>
      <p>account</p>
      <div
        className='flex items-center w-9 h-9 hover:bg-gray-100 justify-center rounded-2xl'
        role='button'
        onClick={() => signOut()}
      >
        <RoundIcon name='close' />
      </div>
    </div>
  );
}
