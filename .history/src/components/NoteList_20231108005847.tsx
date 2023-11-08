'use client';

import { PulseLoader } from 'react-spinners';
import useSWR from 'swr';
import { FullNote } from '@/model/note';
import NotePost from './NotePost';

export default function NoteList() {
  const { data: notes, isLoading: loading } = useSWR<FullNote[]>('/api/notes');
  console.log(notes);

  return (
    <ul>
      {loading && (
        <li className='w-full flex items-center justify-center h-36'>
          <lazySpinner />
        </li>
      )}
      {notes &&
        notes.map(note => (
          <li key={note.id}>
            <NotePost note={note} />
          </li>
        ))}
    </ul>
  );
}

// <NotePost />;
