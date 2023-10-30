'use client';

import { SessionProvider } from 'next-auth/react';

export default function AuthContext({ children: Props }) {
  return <SessionProvider>{children}</SessionProvider>;
}
