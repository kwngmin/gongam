import { FullNote, SimpleNote } from '@/model/note';
import { getDate } from '@/util/date';
import translateDate from '@/util/translateDate';
import Dot from './ui/Dot';
import Seperator from './ui/Seperator';
import RoundIcon from './ui/icons/RoundIcon';

type Props = {
  note: SimpleNote;
};
export default function SearchResult({
  note: { notetitle, notebody, createdAt, comments, likes },
}: Props) {
  console.log(createdAt);
  return (
    <section className='w-full h-full z-50 flex flex-col py-4 border-t border-gray-300'>
      <h3 className='text-md font-semibold text-black/80 grow break-keep leading-tight mb-0.5'>
        {notetitle}
      </h3>
      <p className='text-gray-500 break-keep mb-2'>{notebody}</p>
      <div className='flex justify-between items-center py-0.5'>
        <time className='text-black/60 text-sm'>
          {getDate(createdAt)}
          <Dot />
          {translateDate(createdAt)}
        </time>
        <div className='flex gap-2 items-center'>
          <div className='flex items-center gap-2 text-gray-300'>
            <RoundIcon name='favorite' filled style='x-small' />
            <span className='font-medium text-black/50 text-sm'>{likes}</span>
          </div>
          <Seperator />
          <div className='flex items-center gap-2 text-gray-300'>
            <RoundIcon name='comment' filled style='x-small' />
            <span className='font-medium text-black/50 text-sm'>
              {comments}
            </span>
          </div>
          {/* <span className='flex items-center w-fit py-2 pr-2 text-slate-600 select-none font-medium text-sm gap-1'>
            댓글
            <Dot />
            <span className='font-medium text-slate-600 text-sm'>
              {comments}
            </span>
          </span> */}
        </div>
      </div>
    </section>
  );
}
