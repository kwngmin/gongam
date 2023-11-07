'use client';

import { PulseLoader } from 'react-spinners';
import useSWR from 'swr';
import NotePost from './NotePost';
import { SimpleNote } from '@/model/note';

export default function NoteList() {
  const { data, isLoading: loading } = useSWR<SimpleNote>('/api/notes');
  console.log(data);
  return (
    <div>
      {loading ? (
        <div className='w-full flex items-center justify-center h-36'>
          <PulseLoader size={10} color='gray' />
        </div>
      ) : (
        data?.map((el, idx) => {
          <NotePost data={el} key={idx} />;
        })
      )}
    </div>
  );
}
