'use client';
import { useState } from 'react';
import { format, register } from 'timeago.js';
import { getDate } from '@/util/date';
import { FullNote } from '@/model/note';
import RoundIcon from './ui/icons/RoundIcon';
import ko from 'timeago.js/lib/lang/ko';
import InputText from './InputText';
import Seperator from './ui/Seperator';
import SmallTextIconButton from './SmallTextIconButton';
import ModalPortal from './ui/ModalPortal';
import PostModal from './PostModal';
import NoteDetail from './NoteDetail';
import Dot from './ui/Dot';

type Props = {
  note: FullNote;
};

export default function NotePost({ note }: Props) {
  register('ko', ko);
  const {
    notetitle,
    notebody,
    likes,
    createdAt,
    comments,
    comment,
    commentAt,
  } = note;
  const [openInput, setOpenInput] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  console.log(note);
  return (
    <article className='py-8 border-t border-gray-300'>
      <div className='flex items-start'>
        <h2 className='text-xl font-semibold text-black/80 grow break-keep'>
          {notetitle}
        </h2>
      </div>
      <div className='flex justify-between items-center py-0.5'>
        <time className='text-black/60 text-sm'>
          {getDate(createdAt)}
          <Dot />
          {format(createdAt, 'ko')}
        </time>
      </div>
      <div className='text-black/80 mt-2 break-keep'>
        <p>{notebody}</p>
      </div>
      <div className='flex justify-between items-center my-3'>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <RoundIcon name='favorite' style='' />
            <span className='font-semibold text-black/70'>
              {likes ? likes : '0'}
            </span>
          </div>
          <span className='bg-slate-100 active:bg-slate-200 px-2 h-8 flex items-center font-medium rounded text-slate-600 text-sm select-none cursor-pointer'>
            구독하기
          </span>
        </div>
        <div className='flex items-center gap-6 px-2'>
          <RoundIcon name='bookmark' style='' />
          <RoundIcon name='content_copy' style='' />
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        {comment !== null && (
          <div className='flex gap-2'>
            <span className='text-slate-500 font-medium shrink-0'>
              {format(commentAt, 'ko')}
            </span>
            <span className='text-ellipsis overflow-hidden whitespace-nowrap'>
              {comment.comment}
            </span>
          </div>
        )}
        <div className='flex gap-2 items-center'>
          <span className='flex items-center w-fit py-2 pr-2 text-slate-600 select-none font-medium text-sm'>
            댓글
            <Dot />
            <span className='font-medium text-slate-600 text-sm'>
              {comments !== null ? comments : 0}
            </span>
          </span>
          <Seperator />
          <SmallTextIconButton
            func={() => setOpenModal(true)}
            icon='comment'
            // icon='forum'
            // icon='tooltip'
            text='전체 보기'
          />
          <Seperator />
          {!openInput ? (
            <SmallTextIconButton
              func={() => setOpenInput(true)}
              icon='sentiment_satisfied'
              text='댓글 쓰기'
            />
          ) : (
            <SmallTextIconButton
              func={() => setOpenInput(false)}
              icon='mood_bad'
              text='입력상자 감추기'
            />
          )}
          <span className='flex gap-2'></span>
        </div>
      </div>
      {openInput && <InputText openInput={openInput} />}
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <NoteDetail note={note} />
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
}
