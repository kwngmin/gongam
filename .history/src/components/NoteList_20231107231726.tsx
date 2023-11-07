'use client';

import { PulseLoader } from 'react-spinners';
import useSWR from 'swr';
import { FullNote, SimpleNote } from '@/model/note';

export default function NoteList() {
  const { data: notes, isLoading: loading } =
    useSWR<FullNoteNote[]>('/api/notes');
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
        })}
    </div>
  );
}

// <NotePost />;
