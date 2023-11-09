import React from 'react';
import RoundIcon from './ui/icons/RoundIcon';

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

export default function PostModal({ onClose, children }: Props) {
  return (
    <section
      className='fixed top-0 left-0 w-full h-full bg-white/70 z-50 flex justify-center items-center backdrop-blur-sm'
      onClick={event => {
        console.log(`ljdsfjlksdjfsdjkf ${event.target}`);
        console.log(event.currentTarget);
        if (event.target === event.currentTarget) {
          return onClose();
        }
      }}
    >
      <button
        className='fixed flex top-4 right-6 select-none cursor-pointer'
        onClick={() => onClose()}
      >
        <RoundIcon name='close' />
      </button>
      {children}
    </section>
  );
}
