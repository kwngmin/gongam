'use client';

import { PulseLoader } from 'react-spinners';
import useSWR from 'swr';
import NotePost from './NotePost';
import { FullNote, SimpleNote } from '@/model/note';
import { Any } from '@sanity/client';

export default function NoteList() {
  const { data: notes, isLoading: loading } = useSWR<Any>('/api/notes');
  console.log(notes);
  return (
    <div>
      {loading && (
        <div className='w-full flex items-center justify-center h-36'>
          <PulseLoader size={10} color='gray' />
        </div>
      )}
      {notes &&
        notes.map(note => {
          <div>{note.notetitle}</div>;
          // <NotePost />;
        })}
    </div>
  );
}
