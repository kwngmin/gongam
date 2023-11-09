'use client';
import { useState } from 'react';
import { format, register } from 'timeago.js';
import { getDate } from '@/util/date';
import { FullNote } from '@/model/note';
import RoundIcon from './ui/icons/RoundIcon';
import ko from 'timeago.js/lib/lang/ko';
import InputText from './InputText';
import SmallButton from './SmallButton';
import Seperator from './ui/Seperator';

type Props = {
  note: FullNote;
};

export default function NotePost({ note }: Props) {
  register('ko', ko);
  console.log(note);
  const { notetitle, notebody, likes, createdAt } = note;
  const [openInput, setOpenInput] = useState(false);
  const focusInput = () => {
    setOpenInput(true);
  };
  // console.log(note);
  return (
    <article className='py-8 border-t border-gray-300'>
      <div className='flex items-center'>
        <h2 className='text-xl font-semibold text-black/80 grow'>
          {notetitle}
        </h2>
        <RoundIcon name='more_horiz' style='' />
      </div>
      <time className='text-black/60 text-sm'>
        {getDate(createdAt)} ({format(createdAt, 'ko')})
      </time>
      <div className='text-black/80 mt-2 break-keep'>
        <p>{notebody}</p>
      </div>
      <div className='flex justify-between items-center my-3'>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-2'>
            <RoundIcon name='favorite' style='' />
            <span className='font-semibold text-black/70'>
              {likes ? likes : '0'}
            </span>
          </div>
          <Seperator />
          <span className='h-6 flex items-center font-medium rounded-full  text-slate-600 text-sm'>
            구독하기
          </span>
        </div>
        <div className='flex items-center gap-4'>
          <RoundIcon name='bookmark' style='' />
          <Seperator />
          <RoundIcon name='content_copy' style='' />
          {/* <RoundIcon name='ios_share' style='' /> */}
          {/* <RoundIcon name='share' style='' /> */}
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <div className='flex gap-2'>
          <span className='text-slate-500 font-medium shrink-0'>6시간 전</span>
          <span className='text-ellipsis overflow-hidden whitespace-nowrap'>
            사이드 프로젝트로 하고 있는 reflow 반응이 점점 좋아지고 있다.
          </span>
        </div>
        <div className='flex gap-2 my-2 items-center'>
          <span className='flex items-center w-fit text-slate-600 select-none font-medium text-sm'>
            댓글
            <span className='mx-1 text-xs text-slate-400'>•</span>
            <span className='font-medium text-slate-600 text-sm'>{23}</span>
          </span>
          <Seperator />
          <SmallButton func={() => {}} icon='forum' text='전체 보기' />
          <Seperator />

          {!openInput && (
            <SmallButton
              func={focusInput}
              icon='sentiment_satisfied'
              text='댓글 쓰기'
            />
          )}
          <span className='flex gap-2'></span>
        </div>
      </div>
      {openInput && <InputText openInput={openInput} />}
    </article>
  );
}
