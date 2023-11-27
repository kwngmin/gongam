'use client';

import { PulseLoader } from 'react-spinners';
import useSWR from 'swr';
import { SimpleNote } from '@/model/note';
import NotePost from './NotePost';
// import LazySpinner from './lazySpinner';

type Props = {
  query: string;
};
export default function NoteList({ query }: Props) {
  const { data: notes, isLoading: loading } = useSWR<SimpleNote[]>(query);
  // console.log(notes);
  return (
    <ul>
      {loading && (
        <li className='w-full flex items-center justify-center absolute left-0 top-1/2'>
          {/* <LazySpinner /> */}
          <PulseLoader size={10} color='gray' />
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
