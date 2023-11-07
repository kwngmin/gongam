'use client';
import RoundIcon from './ui/icons/RoundIcon';
import { FullNote } from '@/model/note';
import { format, register } from 'timeago.js';
import ko from 'timeago.js/lib/lang/ko';

type Props = {
  note: FullNote;
};
export default function NotePost({ note }: Props) {
  format;
  register('ko', ko);
  console.log(note);
  const { notetitle, notebody, likes, createdAt } = note;
  // console.log(note);
  // console.log(data);
  // const { data, isLoading, error } = useSWR('/api/me');
  // console.log(data);
  return (
    <div className='py-8 border-t border-gray-300'>
      <div className='flex items-center'>
        <h2 className='text-xl font-semibold text-black/80 grow'>
          {notetitle}
        </h2>
        {/* <RoundIcon name='more_vert' style='' /> */}
        <RoundIcon name='more_horiz' style='' />
      </div>
      <time className='text-black/60 text-sm'>
        {/* 2023년 4월 11일 (6개월 전) */}
        {createdAt}
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
          <span className='border-l border-gray-400 flex h-4' />
          <span className='h-6 flex items-center font-medium rounded-full  text-slate-600 text-sm'>
            구독하기
          </span>
        </div>
        <div className='flex items-center gap-4'>
          <RoundIcon name='content_copy' style='' />
          <span className='border-l border-gray-400 flex h-4' />
          <RoundIcon name='bookmark' style='' />
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <div className='flex gap-2'>
          <span className='text-slate-500 font-medium shrink-0'>
            6시간 전 댓글
          </span>
          <span className='text-ellipsis overflow-hidden whitespace-nowrap'>
            사이드 프로젝트로 하고 있는 reflow 반응이 점점 좋아지고 있다.
          </span>
          {/* <RoundIcon filled name='chat' style='' /> */}
        </div>
        <span className='w-fit cursor-pointer py-1 px-2 bg-slate-100 rounded text-slate-500 select-none font-medium'>
          {/* 댓글 달기 */}
          댓글 <span className='font-medium text-slate-700'>{}</span>개 모두
          보기
        </span>
      </div>
    </div>
  );
}
