'use client';
import { ClientSafeProvider, signIn } from 'next-auth/react';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  // callbackUrl: string;
};
// callbackUrl;
export default function Signin({ providers }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <div key={name}>
          <button onClick={() => signIn(id)}>Sign in with {name}</button>
        </div>
      ))}
    </>
  );
}
