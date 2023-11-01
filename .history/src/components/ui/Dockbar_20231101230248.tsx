'use client';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import RoundIcon from './icons/RoundIcon';
import { usePathname } from 'next/navigation';

export default function Dockbar() {
  const pathName = usePathname();
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className='h-12 flex items-center justify-around w-full max-w-screen-md bg-white fixed bottom-0 left-1/2 -translate-x-1/2'>
      <Link href='/'>
        <div>
          {pathName === '/' ? (
            <RoundIcon name='home' filled style='medium' />
          ) : (
            <RoundIcon name='home' style='medium' />
          )}
        </div>
      </Link>
      <Link href='/inbox'>
        <div>
          {pathName === '/inbox' ? (
            <RoundIcon name='inbox' filled style='medium' />
          ) : (
            <RoundIcon name='inbox' style='medium' />
          )}
        </div>
      </Link>
      <Link href='/new'>
        <div>
          <RoundIcon name='add_circle' filled style='large' />
        </div>
      </Link>
      <Link href='/bookmarks'>
        <div>
          {pathName === '/bookmarks' ? (
            <RoundIcon name='bookmark' filled style='medium' />
          ) : (
            <RoundIcon name='bookmark' style='medium' />
          )}
        </div>
      </Link>
      {session ? (
        <div onClick={() => signIn()}>
          {pathName === '/account' ? (
            <RoundIcon name='account_circle' filled style='medium' />
          ) : (
            <RoundIcon name='account_circle' style='medium' />
          )}
        </div>
      ) : (
        // <Link href='/account'>
        <div onClick={() => signOut()}>
          {pathName === '/account' ? (
            <RoundIcon name='account_circle' filled style='medium' />
          ) : (
            <RoundIcon name='account_circle' style='medium' />
          )}
        </div>
        // </Link>
      )}
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
