'use client';
import Link from 'next/link';
import SearchIcon from './icons/SearchIcon';
import ArrowDropDownIcon from './icons/ArrowDropDownIcon';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Navbar() {
  const pathName = usePathname();
  const { data: session } = useSession();

  // const session = await getServerSession(authOptions);
  // console.log(session);
  if (pathName === '/auth/signin') {
    return true;
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
      {session ? (
        session === undefined ? (
          ''
        ) : (
          <Link href='/search'>
            <div className='flex items-center w-9 h-9 hover:bg-gray-100 justify-center rounded-2xl'>
              <SearchIcon />
            </div>
          </Link>
        )
      ) : (
        <Link href='/auth/signin'>
          <div className='bg-slate-100 hover:bg-slate-200 rounded-full px-4 h-8 flex items-center font-medium text-sm select-none'>
            Sign In
          </div>
        </Link>
      )}
    </div>
  );
}
