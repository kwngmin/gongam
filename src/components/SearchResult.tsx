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
  return (
    <section className='w-full h-full z-50 flex flex-col py-4 border-t border-gray-300'>
      <h3 className='text-lg font-semibold text-black/80 grow break-keep leading-snug mb-0.5'>
        {notetitle}
      </h3>
      <p className='text-gray-500 break-keep mb-2 leading-snug'>{notebody}</p>
      <div className='flex justify-between items-center py-0.5'>
        <time className='text-black/60 text-sm'>
          {translateDate(createdAt)}
          <Dot />
          {getDate(createdAt)}
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
        </div>
      </div>
    </section>
  );
}
