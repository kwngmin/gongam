'use client';

import { PulseLoader } from 'react-spinners';
import useSWR from 'swr';
import { FullNote, SimpleNote } from '@/model/note';

export default function NoteList() {
  const { data: notes, isLoading: loading } = useSWR<FullNote[]>('/api/notes');
  console.log(notes);
  return (
    <div>
      {loading && (
        <div className='w-full flex items-center justify-center h-36'>
          <PulseLoader size={10} color='gray' />
        </div>
      )}
      {notes &&
        notes.map((note)FullNote => {
          <div key={note.createdAt}>{note.notetitle}</div>;
        })}
    </div>
  );
}

// <NotePost />;
