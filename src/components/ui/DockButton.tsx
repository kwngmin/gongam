import React from 'react';
type Props = {
  children: React.ReactNode;
  fill?: boolean;
  dock?: boolean;
};
export default function DockButtonWrapper({
  children,
  fill = false,
  dock = true,
}: Props) {
  const getButtonStyle = () => {
    const defaultStyle = 'flex items-center justify-center rounded-full';
    const fillStyle = fill ? 'bg-slate-100' : '';
    const place = dock ? 'w-16 h-8' : 'w-9 h-9';
    return `${defaultStyle} + ${fillStyle} + ${place}`;
  };
  return <div className={getButtonStyle()}>{children}</div>;
}
