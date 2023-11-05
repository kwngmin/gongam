'use client';
import { SessionProvider } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
type Props = {
  children: ReactNode;
};
export default function AuthContext({ children }: Props) {
  const pathName = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
  return <SessionProvider>{children}</SessionProvider>;
}
