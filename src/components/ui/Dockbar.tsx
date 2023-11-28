'use client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { menuArray } from '@/service/menu';
import RoundIcon from './icons/RoundIcon';
import Avatar from '../Avatar';
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

  return (
    <div className='h-12 flex items-center justify-around w-full max-w-screen-md bg-white fixed bottom-0 left-1/2 -translate-x-1/2 sm:hidden dockbar'>
      <MenuButton menu={menuArray.home} size='medium' />
      <MenuButton menu={menuArray.inbox} size='medium' />
      <button
        type='button'
        onClick={() => handleClick()}
        className='flex justify-center items-center w-14'
      >
        <RoundIcon name='add_circle' filled size={'large'} />
      </button>
      <MenuButton menu={menuArray.bookmarks} size={`medium` as const} />
      {user?.image && user.image !== null ? (
        <Link href='/account'>
          <Avatar
            image={user.image}
            fill={pathName === '/account' ? true : false}
            dock
          />
        </Link>
      ) : (
        <MenuButton menu={menuArray.account} size='medium' />
      )}
    </div>
  );
}
