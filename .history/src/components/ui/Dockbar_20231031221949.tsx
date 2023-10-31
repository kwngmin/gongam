'use client';
import AddIcon from './icons/AddIcon';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import RoundIcon from './icons/RoundIcon';

export default function Dockbar() {
  const { data: session } = useSession();

  return (
    <div className='h-16 flex items-center justify-between'>
      <div>
        <RoundIcon name='home' />
      </div>
      <div>
        <RoundIcon name='home' />
      </div>
      <Link href='/new'>
        <div>
          <AddIcon />
        </div>
      </Link>
      <div>
        <RoundIcon name='home' />
      </div>
      <div>
        <RoundIcon name='home' />
      </div>
      {/* {session ? (
        <div
          className='flex items-center w-9 h-9 hover:bg-gray-100 justify-center rounded-2xl'
          role='button'
          onClick={() => signOut()}
        >
          <AddIcon />
        </div>
      ) : (
        <div
          className='flex items-center w-9 h-9 hover:bg-gray-100 justify-center rounded-2xl'
          role='button'
          onClick={() => signIn()}
        >
          <AddIcon />
        </div>
      )} */}
    </div>
  );
}
