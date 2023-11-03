import Link from 'next/link';
import SearchIcon from './icons/SearchIcon';
import ArrowDropDownIcon from './icons/ArrowDropDownIcon';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <div className='h-16 flex items-center justify-between'>
      <Link href='/'>
        <div className='flex items-center'>
          <h1 className='text-lg md:text-xl font-bold'>NoteShaker</h1>
          <ArrowDropDownIcon />
        </div>
      </Link>
      {session ? (
        <Link href='/search'>
          <div className='flex items-center w-9 h-9 hover:bg-gray-100 justify-center rounded-2xl'>
            <SearchIcon />
          </div>
        </Link>
      ) : (
        <div className='bg-slate-200 rounded-full px-2'>signin</div>
      )}
    </div>
  );
}
