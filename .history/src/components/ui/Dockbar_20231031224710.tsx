'use client';
import AddIcon from './icons/AddIcon';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import RoundIcon from './icons/RoundIcon';

export default function Dockbar() {
  const { data: session } = useSession();

  return (
    <div className='h-12 flex items-center justify-around'>
      <div>
        <RoundIcon name='home' style='large' />
      </div>
      <div>
        <RoundIcon name='inbox' style='medium' />
      </div>
      <Link href='/new'>
        <div>
          <RoundIcon name='add_circle' filled style='xlarge' />
        </div>
      </Link>
      <div>
        <RoundIcon name='bookmarks' style='medium' />
      </div>
      <div>
        <RoundIcon name='account_circle' style='medium' />
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
