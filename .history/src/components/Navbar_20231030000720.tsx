'use client';

import Link from 'next/link';
// const menu=[{
//   href:'/', icon:, clickedIcon
// }]
export default function Navbar() {
  return (
    <div>
      <Link href='/'>
        <h1>gongam note</h1>
      </Link>
    </div>
  );
}
