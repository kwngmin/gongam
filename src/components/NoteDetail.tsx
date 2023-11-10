'use client';
import { FullNote, SimpleNote } from '@/model/note';
import InputText from './InputText';
import useSWR from 'swr';
import SmallTextIconButton from './SmallTextIconButton';
import { getDate } from '@/util/date';
import translateDate from '@/util/translateDate';
import Dot from './ui/Dot';

type Props = {
  note: SimpleNote;
  onClose: () => void;
};
export default function CommentsDetail({ note, onClose }: Props) {
  const { id, notetitle, createdAt, comments: commentsNumber } = note;
  const { data } = useSWR<FullNote>(`/api/notes/${id}`);
  const comments = data?.comments;
  console.log(comments);
  return (
    <section className='w-full h-full bg-neutral-50 z-50'>
      <ul className='h-full p-4 flex flex-col gap-4'>
        {comments &&
          comments.map((comment, index) => (
            <li key={index}>
              <div className='break-keep'>{comment.comment}</div>
              <span className='text-sm'>
                {getDate(comment.commentAt)}
                <Dot />
                {translateDate(comment.commentAt)}
              </span>
            </li>
          ))}
      </ul>

      <div className='px-4 py-2 fixed bottom-0 left-0 right-0 flex items-center flex-col'>
        <SmallTextIconButton
          func={() => onClose()}
          icon='cancel'
          text='댓글창 닫기'
          filled
        />
        <div className='w-full'>
          <InputText />
        </div>
      </div>
    </section>
  );
}
