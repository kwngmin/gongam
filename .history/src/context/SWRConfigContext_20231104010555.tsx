'use client';

import { SWRConfig } from 'swr';

type Props = {
  children: ReactNode;
};
export default function SWRConfigContext({ children }: Props) {
  return <SWRConfig>{children}</SWRCon>;
}
