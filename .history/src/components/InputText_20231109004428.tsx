import { useRef } from 'react';
import RoundIcon from './ui/icons/RoundIcon';
type Props = {
  openInput: boolean;
};
export default function InputText({ openInput }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(openInput);
  if (openInput && inputRef.current !== null) {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  return (
    <form action='' className='py-2'>
      <div className='flex items-center py-1 px-2 border-0 outline-0 bg-slate-50 rounded-2xl gap-2'>
        <input
          className='grow rounded p-2 focus:border-none focus:outline-none bg-transparent'
          type='text'
          placeholder='send message...'
          ref={inputRef}
        />
        <button className='w-9 h-9 flex justify-center items-center rounded-full text-sm font-medium bg-gray-200'>
          <RoundIcon name='arrow_right_alt' filled style='' />
        </button>
      </div>
    </form>
  );
}
