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
        if (event.target === event.target.value) {
          onClose();
        }
      }}
    >
      <div
        className='fixed flex top-3 right-3 select-none cursor-pointer'
        onClick={() => onClose()}
      >
        <RoundIcon name='close' />
      </div>
      {children}
    </section>
  );
}
