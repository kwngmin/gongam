'use client';

import { SyncLoader } from 'react-spinners';
import useSWR from 'swr';
import NotePost from './NotePost';

export default function NoteList() {
  const { data, isLoading: loading } = useSWR('/api/posts');
  console.log(data);
  return (
    <p>
      {loading !== undefined ? (
        <div className='w-full flex items-center justify-center h-36'>
          <SyncLoader size={8} color='gray' />
        </div>
      ) : (
        <NotePost />
      )}
    </p>
  );
}
