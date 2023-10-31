'use client';
import AddIcon from './icons/AddIcon';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import RoundIcon from './icons/RoundIcon';
import { usePathname } from 'next/navigation';

export default function Dockbar() {
  const pathName = usePathname();
  const { data: session } = useSession();
  console.log(pathName);
  return (
    <div className='h-12 flex items-center justify-around'>
      <Link href='/'>
        <div>
          {pathName === '/' ? (
            <RoundIcon name='home' filled style='large' />
          ) : (
            <RoundIcon name='home' style='large' />
          )}
        </div>
      </Link>
      <Link href='/inbox'>
        <div>
          {pathName === '/inbox' ? (
            <RoundIcon name='inbox' filled style='large' />
          ) : (
            <RoundIcon name='inbox' style='large' />
          )}
        </div>
      </Link>
      <Link href='/new'>
        <div>
          <RoundIcon name='add_circle' filled style='xlarge' />
        </div>
      </Link>
      <Link href='/bookmarks'>
        <div>
          {pathName === '/bookmarks' ? (
            <RoundIcon name='bookmarks' filled style='large' />
          ) : (
            <RoundIcon name='bookmarks' style='large' />
          )}
        </div>
      </Link>
      <Link href='/acount'>
        <div>
          {pathName === '/account' ? (
            <RoundIcon name='account_circle' filled style='large' />
          ) : (
            <RoundIcon name='account_circle' style='large' />
          )}
        </div>
      </Link>
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
