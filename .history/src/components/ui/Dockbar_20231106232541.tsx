'use client';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import RoundIcon from './icons/RoundIcon';
import { usePathname } from 'next/navigation';
import Avatar from '../Avatar';
import DockButtonWrapper from './DockButton';
import { useRouter } from 'next/navigation';

export default function Dockbar() {
  const pathName = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;
  const handleClick = () => {
    router.push('/new');
  };

  if (!session) {
    return;
  }

  if (pathName === '/new') {
    return;
  }

  return (
    <div className='h-12 flex items-center justify-around w-full max-w-screen-md bg-white fixed bottom-0 left-1/2 -translate-x-1/2 dockbar'>
      <Link href='/'>
        {pathName === '/' ? (
          <DockButtonWrapper>
            <RoundIcon name='home' filled style='medium' />
          </DockButtonWrapper>
        ) : (
          <DockButtonWrapper>
            <RoundIcon name='home' style='medium' />
          </DockButtonWrapper>
        )}
      </Link>
      <Link href='/inbox'>
        {pathName === '/inbox' ? (
          <div className='flex items-center justify-center w-16 h-8 rounded-full'>
            <RoundIcon name='inbox' filled style='medium' />
          </div>
        ) : (
          <div className='flex items-center justify-center w-16 h-8 rounded-full '>
            <RoundIcon name='inbox' style='medium' />
          </div>
        )}
      </Link>
      {/* <Link href='/new'> */}
      <button
        type='button'
        onClick={() => handleClick()}
        className='flex justify-center items-center w-14'
      >
        <RoundIcon name='add_circle' filled style='large' />
      </button>
      {/* </Link> */}
      <Link href='/bookmarks'>
        {pathName === '/bookmarks' ? (
          <div className='flex items-center justify-center w-16 h-8 rounded-full'>
            <RoundIcon name='bookmark' filled style='medium' />
          </div>
        ) : (
          <div className='flex items-center justify-center w-16 h-8 rounded-full '>
            <RoundIcon name='bookmark' style='medium' />
          </div>
        )}
      </Link>
      {user?.image && user.image !== null ? (
        pathName === '/account' ? (
          <Link href='/account'>
            <Avatar image={user.image} fill />
          </Link>
        ) : (
          <Link href='/account'>
            <Avatar image={user.image} />
          </Link>
        )
      ) : pathName === '/account' ? (
        <Link href='/account'>
          <div className='flex items-center justify-center w-16 h-8 rounded-full'>
            <RoundIcon name='account_circle' filled style='medium' />
          </div>{' '}
        </Link>
      ) : (
        <Link href='/account'>
          <div className='flex items-center justify-center w-16 h-8 rounded-full'>
            <RoundIcon name='account_circle' style='medium' />
          </div>
        </Link>
      )}
    </div>
  );
}
