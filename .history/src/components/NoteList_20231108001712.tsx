'use client';

import { PulseLoader } from 'react-spinners';
import useSWR from 'swr';
import { FullNote } from '@/model/note';
import NotePost from './NotePost';

export default function NoteList() {
  const { data: notes, isLoading: loading } = useSWR<FullNote[]>('/api/notes');
  console.log(notes);

  return (
    <i;>
      {loading && (
        <div className='w-full flex items-center justify-center h-36'>
          <PulseLoader size={10} color='gray' />
        </div>
      )}
      {notes &&
        notes.map(note => (
          <li key={note.id}>
            <NotePost note={note} />
          </li>
        ))}
    </i;>
  );
}

// <NotePost />;
