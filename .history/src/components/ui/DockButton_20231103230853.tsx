import React, { ReactNode } from 'react';
type Props = {
  children: React.ReactNode;
};
export default function DockButtonWrapper({ children }: Props) {
  return <div>{children}</div>;
}
