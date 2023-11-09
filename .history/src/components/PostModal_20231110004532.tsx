import React from 'react';
import RoundIcon from './ui/icons/RoundIcon';

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

export default function PostModal({ onClose, children }: Props) {
  return (
    <section
      onClick={event => {
        console.log(event.target);
        console.log(event.currentTarget);
        if (event.target === event.currentTarget) {
          onClose();
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
