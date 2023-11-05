'use client';
import Link from 'next/link';
import SearchIcon from './icons/SearchIcon';
import ArrowDropDownIcon from './icons/ArrowDropDownIcon';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const pathName = usePathname();
  const { data: session } = useSession();
  const router = useRouter();

  // search, signin 버튼 또는 아무것도 보여줄지 말지 정하는 로직
  const renderRightSide = () => {
    console.log(typeof session === 'object');
    if (session === null) {
      return (
        <Link href='/auth/signin'>
          <div className='bg-slate-100 hover:bg-slate-200 rounded-full px-4 h-8 flex items-center font-medium text-sm select-none'>
            Sign In
          </div>
        </Link>
      );
    }
    if (typeof session === 'object') {
      return (
        <Link href='/search'>
          <div className='flex items-center w-9 h-9 hover:bg-gray-100 justify-center rounded-2xl'>
            <SearchIcon />
          </div>
        </Link>
      );
    }
    return;
  };

  // signin 화면이면 navbar 안보여주기
  if (pathName === '/auth/signin') {
    return true;
  }

  // new 화면이면 취소, 포스트 버튼 보여주기
  if (pathName === '/new') {
    return (
      <div className='h-16 flex items-center justify-between relative'>
        <div
          onClick={() => router.back()}
          className='bg-slate-100 hover:bg-slate-200 rounded-full px-4 h-8 flex items-center font-medium text-sm select-none text-black/70 cursor-pointer'
        >
          Cancel
        </div>
        <Link href='/'>
          <div className='flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-lg md:text-xl font-bold'>NoteShaker</h1>
          </div>
        </Link>
        {/* <span className='font-medium absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2'>
          New Note
        </span> */}
        <div className='bg-slate-900 hover:bg-slate-700 text-white rounded-full px-4 h-8 flex items-center font-medium text-sm select-none cursor-pointer'>
          Post
        </div>
      </div>
    );
  }

  // default 상태의 navbar
  return (
    <div className='h-16 flex items-center justify-between w-full'>
      <Link href='/'>
        <div className='flex items-center'>
          <h1 className='text-lg md:text-xl font-bold'>NoteShaker</h1>
          <ArrowDropDownIcon />
        </div>
      </Link>
      {renderRightSide()}
    </div>
  );
}
