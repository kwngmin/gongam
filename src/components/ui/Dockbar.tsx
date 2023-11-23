'use client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import RoundIcon from './icons/RoundIcon';
import { usePathname } from 'next/navigation';
import Avatar from '../Avatar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import MenuButton from '../MenuButton';

export default function Dockbar() {
  const pathName: string | null = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;

  // 100vh 실제 화면 크기로 맞추기
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  const handleClick = () => {
    router.push('/new');
  };

  if (!session) {
    return;
  }

  if (pathName === '/new') {
    return;
  }

  if (pathName?.includes('/notes/')) {
    return;
  }

  const menuArray = {
    home: { path: '/', icon: 'home' },
    inbox: { path: '/inbox', icon: 'inbox' },
    bookmarks: { path: '/bookmarks', icon: 'bookmark' },
    account: { path: '/account', icon: 'account_circle' },
  };

  return (
    <div className='h-12 flex items-center justify-around w-full max-w-screen-md bg-white fixed bottom-0 left-1/2 -translate-x-1/2 dockbar'>
      <MenuButton menu={menuArray.home} size='medium' />
      <MenuButton menu={menuArray.inbox} size='medium' />
      <button
        type='button'
        onClick={() => handleClick()}
        className='flex justify-center items-center w-14'
      >
        <RoundIcon name='add_circle' filled style='large' />
      </button>
      <MenuButton menu={menuArray.bookmarks} size='medium' />
      {user?.image && user.image !== null ? (
        <Link href='/account'>
          <Avatar
            image={user.image}
            fill={pathName === '/account' ? true : false}
          />
        </Link>
      ) : (
        <MenuButton menu={menuArray.account} size='medium' />
      )}
    </div>
  );
}
