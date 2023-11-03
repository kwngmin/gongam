import React from 'react';
type Props = {
  children: React.ReactNode;
};
export default function DockButtonWrapper({ children }: Props) {
  return (
    <div className='flex items-center justify-center w-16 h-8 rounded-full bg-slate-100'>
      {children}
    </div>
  );
}
