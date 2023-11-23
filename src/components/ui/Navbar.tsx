'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Logotype from '../Logotype';
import SearchIcon from './icons/SearchIcon';
import NoteshakerLogo from '../NoteshakerLogo';
import MenuButton from '../MenuButton';
import { menuArray } from '@/service/menu';
import RoundIcon from './icons/RoundIcon';
import Avatar from '../Avatar';

export default function Navbar() {
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  // search, signin 버튼 또는 아무것도 보여줄지 말지 정하는 로직
  const renderRightSide = () => {
    if (session === null) {
      return (
        <Link href='/auth/signin'>
          <div className='bg-slate-100 active:bg-slate-200 rounded-full px-4 h-8 flex items-center font-medium text-sm select-none'>
            Sign In
          </div>
        </Link>
      );
    }
    if (typeof session === 'object') {
      return (
        <div className='flex gap-2'>
          <button onClick={() => router.push('/search')}>
            <div className='flex items-center w-9 h-9 active:bg-gray-100 justify-center rounded-2xl'>
              <SearchIcon />
            </div>
          </button>
          <div className='hidden sm:flex gap-2 items-center '>
            {/* <MenuButton menu={menuArray.bookmarks} dock={false} size='base' />
            <MenuButton menu={menuArray.inbox} dock={false} size='base' /> */}
            {user?.image && user.image !== null ? (
              <Link href='/account'>
                <Avatar
                  image={user.image}
                  fill={pathName === '/account' ? true : false}
                />
              </Link>
            ) : (
              <MenuButton menu={menuArray.account} size='medium' dock={false} />
            )}
            <button
              type='button'
              onClick={() => {}}
              className='flex justify-center items-center w-9'
            >
              <RoundIcon name='add_circle' filled size='large' />
            </button>
          </div>
        </div>
      );
    }
    return;
  };

  // signin 또는 search 화면이면 navbar 안보여주기
  if (pathName === '/auth/signin' || pathName === '/search') {
    return true;
  }

  // new 화면이면 취소, 포스트 버튼 보여주기
  if (pathName === '/new') {
    return (
      <div className='h-16 flex items-center justify-between relative'>
        <div
          onClick={() => router.back()}
          className='bg-slate-100 active:bg-slate-200 rounded-full px-4 h-8 flex items-center font-medium text-sm select-none text-black/70 cursor-pointer'
        >
          Cancel
        </div>
        <Link href='/'>
          <Logotype />
        </Link>
        <div className='bg-slate-900 active:bg-slate-700 text-white rounded-full px-4 h-8 flex items-center font-medium text-sm select-none cursor-pointer'>
          Post
        </div>
      </div>
    );
  }

  // default 상태의 navbar
  return (
    <div className='h-16 flex items-center justify-between'>
      <Link href='/'>
        <NoteshakerLogo />
      </Link>
      {renderRightSide()}
    </div>
  );
}
