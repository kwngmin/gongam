'use client';

import { HashLoader, PulseLoader, SyncLoader } from 'react-spinners';
import useSWR from 'swr';
import NotePost from './NotePost';

export default function NoteList() {
  const { data, isLoading: loading } = useSWR('/api/posts');
  console.log(data);
  return (
    <p>
      {loading !== undefined ? (
        <div className='w-full flex items-center justify-center h-36'>
          <HashLoader size={36} color='gray' />
        </div>
      ) : (
        <NotePost />
      )}
    </p>
  );
}
