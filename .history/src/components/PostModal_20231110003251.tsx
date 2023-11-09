import React from 'react';

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

export default function PostModal({ onClose, children }: Props) {
  return (
    <section
      onClick={event => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className='fixed flex top-3 right-3 select-none cursor-pointer'
        onClick={onClose()}
      />
    </section>
  );
}
