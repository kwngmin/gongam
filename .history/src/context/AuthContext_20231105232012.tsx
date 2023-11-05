'use client';
import ScrollToTop from '@/components/ScrollToTop';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
type Props = {
  children: ReactNode;
};
export default function AuthContext({ children }: Props) {
  return (
    <SessionProvider>
      <ScrollToTop />
      {children}
    </SessionProvider>
  );
}
