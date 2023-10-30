'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AddIcon from './ui/icons/AddIcon';
import SearchIcon from './ui/icons/SearchIcon';
import ArrowDropDownIcon from './ui/icons/ArrowDropDownIcon';
// const menu=[{
//   href:'/', icon:, clickedIcon
// }]
export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className='flex'>
      <Link href='/search'>
        <div>
          <SearchIcon />
        </div>
      </Link>
      <div className='flex'>
        <Link href='/'>
          <h1>NoteShaker</h1>
          <ArrowDropDownIcon />
        </Link>
      </div>
      <Link href='/new'>
        <div>
          <AddIcon />
        </div>
      </Link>
    </div>
  );
}
