'use client';

import { ReactNode } from 'react';
import { SWRConfig } from 'swr';

type Props = {
  children: ReactNode;
};
export default function SWRConfigContext({ children }: Props) {
  return <SWRConfig>{children}</SWRConfig>;
}
