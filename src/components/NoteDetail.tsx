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

type Props = {
  note: SimpleNote;
  onClose: () => void;
};
export default function CommentsDetail({ note, onClose }: Props) {
  const { id, notetitle, createdAt, comments: commentsNumber } = note;
  const { data } = useSWR<FullNote>(`/api/notes/${id}`);
  const comments = data?.comments;
  const [openInput, setOpenInput] = useState(false);

  console.log(comments);
  return (
    <section className='w-full h-full bg-neutral-50 z-50'>
      <div className='px-4 h-16 flex items-center justify-between relative'>
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
      <ul className='h-full px-4 flex flex-col'>
        {comments &&
          comments.map(({ comment, commentAt }, index) => (
            <li key={index} className='py-4 border-t'>
              <div className='break-keep'>{comment}</div>
              <span className='text-sm text-slate-600'>
                {getDate(commentAt)}
                <Dot />
                {translateDate(commentAt)}
              </span>
            </li>
          ))}
      </ul>

      <div className='px-4 py-2 fixed bottom-0 left-0 right-0 flex items-center flex-col'>
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
            <InputText openInput={openInput} />
          </div>
        )}
      </div>
    </section>
  );
}
