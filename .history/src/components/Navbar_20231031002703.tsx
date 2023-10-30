'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AddIcon from './ui/icons/AddIcon';
import SearchIcon from './ui/icons/SearchIcon';
import ArrowDropDownIcon from './ui/icons/ArrowDropDownIcon';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  const pathName = usePathname();
  const { data: session } = useSession();
  console.log(process.env.GOOGLE_OAUTH_ID);
  return (
    <div className='h-16 flex items-center justify-between'>
      <Link href='/search'>
        <div className='flex items-center w-9 h-9 bg-slate-50 justify-center rounded-2xl'>
          <SearchIcon />
        </div>
      </Link>
      <Link href='/'>
        <div className='flex items-center'>
          <h1 className='text-lg md:text-xl font-bold'>NoteShaker</h1>
          <ArrowDropDownIcon />
        </div>
      </Link>
      {session ? (
        <div
          className='flex items-center'
          role='button'
          onClick={() => signOut()}
        >
          <AddIcon />
        </div>
      ) : (
        <div
          className='flex items-center'
          role='button'
          onClick={() => signIn()}
        >
          <AddIcon />
        </div>
      )}
      {/* <Link href='/new'>
          <div>
            <AddIcon />
          </div>
        </Link> */}
    </div>
  );
}
