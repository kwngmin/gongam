'use client';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import RoundIcon from './icons/RoundIcon';
import { usePathname } from 'next/navigation';
import Avatar from '../Avatar';

export default function Dockbar() {
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = session?.user;
  console.log(session);
  return (
    <div className='h-12 flex items-center justify-around w-full max-w-screen-md bg-white fixed bottom-0 left-1/2 -translate-x-1/2'>
      <Link href='/'>
        {pathName === '/' ? (
          <div className='flex items-center justify-center w-16 h-10 rounded-full bg-slate-100'>
            <RoundIcon name='home' filled style='medium' />
          </div>
        ) : (
          <div className='flex items-center justify-center w-16 h-10 rounded-full'>
            <RoundIcon name='home' style='medium' />
          </div>
        )}
      </Link>
      <Link href='/inbox'>
        {pathName === '/inbox' ? (
          <div className='flex items-center justify-center w-16 h-10 rounded-full bg-slate-100'>
            <RoundIcon name='inbox' filled style='medium' />
          </div>
        ) : (
          <div className='flex items-center justify-center w-16 h-10 rounded-full '>
            <RoundIcon name='inbox' style='medium' />
          </div>
        )}
      </Link>
      <Link href='/new'>
        <div>
          <RoundIcon name='add_circle' filled style='large' />
        </div>
      </Link>
      <Link href='/bookmarks'>
        <div>
          {pathName === '/bookmarks' ? (
                      <div className='flex items-center justify-center w-16 h-10 rounded-full '>

            <RoundIcon name='bookmark' filled style='medium' />
        </div>
          ) : (
                      <div className='flex items-center justify-center w-16 h-10 rounded-full '>

            <RoundIcon name='bookmark' style='medium' />
        </div>
          )}
      </Link>
      {user ? (
        <Link href={`/user/${user.username}`}>
          <Avatar image={user.image} />
        </Link>
      ) : (
        ''
      )}
      {session ? (
        <div role='button' onClick={() => signOut()}>
          {pathName === '/account' ? (
            <RoundIcon name='account_circle' filled style='medium' />
          ) : (
            <RoundIcon name='account_circle' style='medium' />
          )}
        </div>
      ) : (
        // <Link href='/account'>
        <div role='button' onClick={() => signIn()}>
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
