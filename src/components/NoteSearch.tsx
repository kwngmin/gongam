'use client';

import { FormEvent, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import useSWR from 'swr';

export default function NoteSearch() {
  const [keyword, setKeyword] = useState('');
  const { data: notes, isLoading, error } = useSWR(`/api/search/${keyword}`);
  console.log(notes);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <div className='h-16 flex items-center justify-between'>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            autoFocus
            placeholder='Search for a note'
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
        </form>
      </div>
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
    </>
  );
}
