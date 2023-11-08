import { RefObject } from 'react';
import RoundIcon from './ui/icons/RoundIcon';
type Props = {
  useRef: RefObject<T>;
};
export default function InputText({ useRef }: Props) {
  return (
    <form action='' className='py-2'>
      <div className='flex items-center py-1 px-2 border-0 outline-0 bg-slate-50 rounded-2xl gap-2'>
        <input
          className='grow rounded p-2 focus:border-none focus:outline-none bg-transparent'
          type='text'
          placeholder='send message...'
        />
        <button className='w-9 h-9 flex justify-center items-center rounded-full text-sm font-medium bg-gray-200'>
          <RoundIcon name='arrow_right_alt' filled style='' />
        </button>
      </div>
    </form>
  );
}
