'use client';

import { BarLoader, HashLoader, PulseLoader, SyncLoader } from 'react-spinners';
import useSWR from 'swr';
import NotePost from './NotePost';

export default function NoteList() {
  const { data, isLoading: loading } = useSWR('/api/posts');
  console.log(data);
  return (
    <div>
      {loading ? (
        <div className='w-full flex items-center justify-center h-36'>
          <PulseLoader size={10} color='gray' />
        </div>
      ) : (
        <NotePost />
      )}
    </div>
  );
}
