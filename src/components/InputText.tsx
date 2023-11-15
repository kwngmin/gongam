import { useEffect, useRef } from 'react';
import RoundIcon from './ui/icons/RoundIcon';
type Props = {
  openInput?: boolean;
  viewPosition?: 'center' | 'end';
};
export default function InputText({
  openInput,
  viewPosition = 'center',
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.disabled = false;
      inputRef.current.focus();
      inputRef.current.scrollIntoView({ block: viewPosition });
    }
  }, [openInput, viewPosition]);

  return (
    <form action='' className='py-2'>
      <div className='flex items-center p-1 ring-1 ring-slate-300 bg-slate-50 rounded-lg gap-2 focus-within:ring'>
        <input
          className='grow rounded p-1 focus:border-none focus:outline-none bg-transparent'
          type='text'
          placeholder='send message...'
          ref={inputRef}
        />
        <button className='w-7 h-7 flex justify-center items-center rounded-full text-sm font-medium'>
          <RoundIcon name='arrow_right_alt' filled style='text-slate-700' />
        </button>
      </div>
    </form>
  );
}
