'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// const menu=[{
//   href:'/', icon:, clickedIcon
// }]
export default function Navbar() {
  const pathName = usePathname();
  return (
    <div>
      <Link href='/'>
        <h1>NoteShaker</h1>
      </Link>
    </div>
  );
}
