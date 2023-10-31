'use client';
import AddIcon from './icons/AddIcon';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Dockbar() {
  return (
    <div className='h-16 flex items-center justify-between'>
      <Link href='/new'>
        <div>
          <AddIcon />
        </div>
      </Link>
    </div>
  );
}
