import React from 'react';
type Props = {
  children: React.ReactNode;
  fill: boolean;
};
export default function DockButtonWrapper({ children, fill = false }: Props) {
  const getButtonStyle = () => {
    const defaultStyle =
      'flex items-center justify-center w-16 h-8 rounded-full bg-slate-100';
  };
  return <div className=''>{children}</div>;
}
