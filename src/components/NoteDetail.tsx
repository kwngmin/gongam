'use client';
import { FullNote, SimpleNote } from '@/model/note';
import InputText from './InputText';
import useSWR from 'swr';
import SmallTextIconButton from './SmallTextIconButton';
import { getDate } from '@/util/date';
import translateDate from '@/util/translateDate';
import Dot from './ui/Dot';
import RoundIcon from './ui/icons/RoundIcon';
import { useState } from 'react';
import Seperator from './ui/Seperator';
import { PulseLoader } from 'react-spinners';

type Props = {
  note: SimpleNote;
  onClose: () => void;
};
export default function CommentsDetail({ note, onClose }: Props) {
  const { id, notetitle, createdAt, comments: commentsNumber } = note;
  const { data, isLoading: loading } = useSWR<FullNote>(`/api/notes/${id}`);
  const comments = data?.comments;
  const [openInput, setOpenInput] = useState(false);

  console.log(comments);
  return (
    <section className='w-full h-full bg-neutral-50 z-50 flex flex-col'>
      <div className='px-4 h-16 flex items-center justify-between relative shrink-0'>
        <span className='flex items-center w-fit py-2 pr-2 text-slate-600 select-none font-medium text-lg'>
          댓글
          <Dot size='base' />
          <span className='font-medium text-slate-600 text-lg'>
            {commentsNumber !== null ? commentsNumber : 0}
          </span>
        </span>
        <button onClick={() => onClose()} className='flex'>
          <RoundIcon name='close' />
        </button>
      </div>
      <ul className='grow px-4 flex flex-col overflow-auto pb-4'>
        {loading && (
          <li className='w-full flex items-center justify-center h-36'>
            <PulseLoader size={10} color='gray' />
          </li>
        )}
        {comments ? (
          comments.map(({ comment, commentAt }, index) => (
            <li key={index} className='py-4 border-t'>
              <div className='break-keep'>{comment}</div>
              <span className='text-sm text-slate-600'>
                {getDate(commentAt)}
                <Dot />
                {translateDate(commentAt)}
              </span>
            </li>
          ))
        ) : (
          <li className='text-center h-full flex flex-col justify-center'>
            <p className='text-6xl pb-6 text-neutral-300'>:(</p>
            <p>댓글이 존재하지 않습니다</p>
            {/* <p>첫번째 댓글을 남겨보세요</p> */}
          </li>
        )}
      </ul>
      <div
        className={`w-full shrink-0 bg-neutral-50 ${
          openInput ? 'h-24' : 'h-12'
        }`}
      ></div>
      <div className='px-4 py-2 fixed bottom-0 left-0 right-0 flex items-center flex-col bg-neutral-50'>
        <span className='flex gap-2 items-center'>
          <SmallTextIconButton
            func={() => onClose()}
            icon='cancel'
            text='댓글창 닫기'
            filled
          />
          <Seperator />
          {!openInput ? (
            <SmallTextIconButton
              func={() => setOpenInput(true)}
              icon='sentiment_satisfied'
              text='댓글 쓰기'
              filled
            />
          ) : (
            <SmallTextIconButton
              func={() => setOpenInput(false)}
              icon='mood_bad'
              text='입력상자 감추기'
              filled
            />
          )}
        </span>

        {openInput && (
          <div className='w-full'>
            <InputText openInput={openInput} viewPosition='end' />
          </div>
        )}
      </div>
    </section>
  );
}
