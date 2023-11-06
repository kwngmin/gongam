'use client';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import noteshaker from '../images/noteshaker.svg';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};
export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <div
          key={name}
          className='h-screen flex flex-col justify-center items-center gap-8'
        >
          <Link href='/' className='flex items-center'>
            <Image
              src={noteshaker}
              alt='noteshaker logo'
              className='w-6 h-6 mr-2'
            />
            <h1 className='text-2xl md:text-3xl font-bold tracking-tight'>
              NoteShaker
            </h1>
          </Link>
          <ul>
            <li>
              <button
                className='p-4 rounded text-center bg-slate-100 mx-auto w-80 font-medium'
                onClick={() => signIn(id, { callbackUrl })}
              >
                Sign in with {name}
              </button>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
