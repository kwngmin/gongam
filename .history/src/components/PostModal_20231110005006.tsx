import React from 'react';
import RoundIcon from './ui/icons/RoundIcon';

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

export default function PostModal({ onClose, children }: Props) {
  return (
    <section
      className='fixed top-0 left-0 w-full h-full bg-slate-300'
      onClick={event => {
        console.log(`ljdsfjlksdjfsdjkf ${event.target}`);
        console.log(event.currentTarget);
        if (event.target === event.currentTarget) {
          return onClose();
        }
      }}
    >
      <button
        className='fixed flex top-3 right-3 select-none cursor-pointer'
        onClick={() => onClose()}
      >
        <RoundIcon name='close' />
      </button>
      {children}
    </section>
  );
}
