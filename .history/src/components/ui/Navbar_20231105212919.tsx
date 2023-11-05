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
  const renderRightSide = () => {
    console.log(session);
    switch (session) {
      case true:
        <Link href='/search'>
          <div className='flex items-center w-9 h-9 hover:bg-gray-100 justify-center rounded-2xl'>
            <SearchIcon />
          </div>
        </Link>;
        break;
      case undefined || null:
        <Link href='/auth/signin'>
          <div className='bg-slate-100 hover:bg-slate-200 rounded-full px-4 h-8 flex items-center font-medium text-sm select-none'>
            Sign In
          </div>
        </Link>;
        break;
      default:
        break;
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  // const session = await getServerSession(authOptions);
  // console.log(session);
  if (pathName === '/auth/signin') {
    return true;
  }
  if (pathName === '/new') {
    return (
      <div className='h-16 flex items-center justify-between relative'>
        <div
          onClick={() => router.back()}
          className='bg-slate-100-hover:bg-slate-200 rounded-full px-4 h-8 flex items-center font-medium text-sm select-none text-black/70'
        >
          Cancel
        </div>
        <span className='font-medium absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2'>
          New Note
        </span>
        <div className='bg-slate-900 hover:bg-slate-700 text-white rounded-full px-4 h-8 flex items-center font-medium text-sm select-none'>
          Post
        </div>
      </div>
    );
  }
  console.log(session);
  return (
    <div className='h-16 flex items-center justify-between'>
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
