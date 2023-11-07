'use client';

import { PulseLoader } from 'react-spinners';
import useSWR from 'swr';
import NotePost from './NotePost';
import { FullNote, SimpleNote } from '@/model/note';
import { Any } from '@sanity/client';

export default function NoteList() {
  const { data, isLoading: loading } = useSWR<FullNote>('/api/notes');
  // console.log(data);
  return (
    <div>
      {loading && (
        <div className='w-full flex items-center justify-center h-36'>
          <PulseLoader size={10} color='gray' />
        </div>
      )}
      {data &&
        data.map((note: any) => {
          <NotePost note={note} />;
        })}
    </div>
  );
}
