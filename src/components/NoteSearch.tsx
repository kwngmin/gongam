'use client';

import { FullNote, SimpleNote } from '@/model/note';
import { FormEvent, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import useSWR from 'swr';
import SearchResult from './SearchResult';
import RoundIcon from './ui/icons/RoundIcon';
import { useRouter } from 'next/navigation';
import useDebounce from '@/hooks/debounce';
// import useDebounce from '@/hooks/Debounce';

export default function NoteSearch() {
  const [keyword, setKeyword] = useState('');
  const debounceKeyword = useDebounce(keyword);
  const router = useRouter();
  const {
    data: notes,
    isLoading,
    error,
  } = useSWR<SimpleNote[]>(`/api/search/${debounceKeyword}`);
  console.log(notes);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <header className='sticky top-0 w-full max-w-screen-md mx-auto px-4 backdrop-blur-lg bg-white/60'>
        <div className='h-16 flex items-center justify-betwee gap-4'>
          <form
            onSubmit={onSubmit}
            className='grow flex items-center gap-2 rounded bg-neutral-100 h-10 px-2'
          >
            <RoundIcon name='search' style='small' />
            <input
              type='text'
              autoFocus
              placeholder='Search for a note'
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
              className='w-full bg-transparent outline-none'
            />
          </form>
          <button onClick={() => router.back()} className='select-none'>
            취소
          </button>
        </div>
      </header>
      <section className='max-w-screen-md mx-auto px-4 h-fit pb-10'>
        {error && <p>무언가가 잘못 되었음</p>}
        {isLoading && (
          <div className='text-center h-full flex flex-col justify-center items-center'>
            <PulseLoader size={10} color='gray' />
          </div>
        )}
        {isLoading && !error && notes?.length === 0 && (
          <div className='text-center h-full flex flex-col justify-center'>
            <p className='text-8xl pb-10 text-neutral-300'>:(</p>
            <p>댓글이 존재하지 않습니다</p>
          </div>
        )}
        <ul>
          {notes &&
            notes.map((note, index) => (
              <li key={index}>
                <SearchResult note={note} />
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
