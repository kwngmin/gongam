'use client';
import RoundIcon from '@/components/ui/icons/RoundIcon';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function AccountPage() {
  return (
    <div>
      <p>account</p>
      <div
        className='flex items-center w-9 h-9 hover:bg-gray-100 justify-center rounded-2xl'
        role='button'
        onClick={() => signIn()}
      >
        <RoundIcon name='close' />
      </div>
    </div>
  );
}
