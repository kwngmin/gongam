'use client';
import { ClientSafeProvider, signIn } from 'next-auth/react';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};
export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <div key={name} className='mx-auto bg-slate-50 p-3 rounded w-64'>
          <button onClick={() => signIn(id, { callbackUrl })}>
            Sign in with {name}
          </button>
        </div>
      ))}
    </>
  );
}
