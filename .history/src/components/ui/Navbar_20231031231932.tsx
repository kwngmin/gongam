'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchIcon from './icons/SearchIcon';
import ArrowDropDownIcon from './icons/ArrowDropDownIcon';

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className='h-16 flex items-center justify-between'>
      <Link href='/'>
        <div className='flex items-center'>
          <h1 className='text-lg md:text-xl font-bold'>NoteShaker</h1>
          <ArrowDropDownIcon />
        </div>
      </Link>
      <Link href='/search'>
        <div className='flex items-center w-9 h-9 hover:bg-gray-100 justify-center rounded-2xl'>
          <SearchIcon />
        </div>
      </Link>
    </div>
  );
}
