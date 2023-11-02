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
        <div key={name} className='flex items-center h-full'>
          <button
            className='p-4 text-center bg-slate-100 mx-auto w-80'
            onClick={() => signIn(id, { callbackUrl })}
          >
            Sign in with {name}
          </button>
        </div>
      ))}
    </>
  );
}
