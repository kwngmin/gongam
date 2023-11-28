'use client';

import { SimpleNote } from '@/model/note';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import useSWR from 'swr';
import SearchResult from './SearchResult';
import RoundIcon from './ui/icons/RoundIcon';
import { useRouter } from 'next/navigation';
import useDebounce from '@/hooks/debounce';

export default function NoteSearch() {
  const [keyword, setKeyword] = useState('');
  const debounceKeyword = useDebounce(keyword);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    data: notes,
    isLoading,
    error,
  } = useSWR<SimpleNote[]>(`/api/search/${debounceKeyword}`);

  // 새로고침 방지
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleClick = () => {
    // 가상 키보드가 나타나는 딜레이를 고려하여 setTimeout 사용
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });
      }
    }, 300); // 300ms 딜레이 (가상 키보드가 나타날 때까지 대략적으로 설정)
  };

  useEffect(() => {
    // 페이지 이동 시 input 창에 focus
    const handleRouteChange = () => {
      if (inputRef.current) {
        inputRef.current.focus();
        handleClick(); // click 이벤트에 대한 핸들러도 실행
      }
    };

    // 페이지가 로드될 때 가상 키보드 나타나도록
    if ('ontouchstart' in document.documentElement && inputRef.current) {
      // 터치 디바이스인 경우에만 실행
      inputRef.current.addEventListener('click', handleClick);
    }

    // 페이지 이동 이벤트 리스너 등록
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [isLoading]);

  // input focus
  // useEffect(() => {
  //   if (inputRef.current !== null) {
  //     inputRef.current.focus();
  //     inputRef.current!.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //       inline: 'nearest',
  //     });
  //   }
  // }, []);

  return (
    <>
      <header className='sticky top-0 w-full max-w-screen-md mx-auto px-4 backdrop-blur-lg bg-white/60'>
        <div className='h-16 flex items-center justify-betwee gap-4'>
          <form
            onSubmit={onSubmit}
            className='grow flex items-center gap-2 rounded bg-white border border-neutral-300 h-10 px-2'
          >
            <RoundIcon name='search' size='small' />
            <input
              ref={inputRef}
              onClick={() => handleClick()}
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
        {isLoading && (
          <div className='fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>
            <PulseLoader size={10} color='gray' />
          </div>
        )}
        {!isLoading && error && (
          <div className='fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>
            무언가가 잘못 되었음
          </div>
        )}
        {!isLoading && !error && notes?.length === 0 && (
          <div className='fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center justify-center'>
            <p className='text-7xl pb-10 text-neutral-300'>:(</p>
            <p className='text-neutral-500 font-medium'>
              검색 결과가 존재하지 않습니다
            </p>
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
