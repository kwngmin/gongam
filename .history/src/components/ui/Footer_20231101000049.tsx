'use client';
import Dockbar from './Dockbar';
import { useSession, signIn, signOut } from 'next-auth/react';
import Loginbar from './Loginbar';

export default function Footer() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      {session ? (
        <footer className='sticky bottom-0 w-full max-w-screen-md mx-auto'>
          <Dockbar />
        </footer>
      ) : (
        // <div
        //   role='button'
        //   onClick={() => signOut()}
        //   className='sticky bg-gray-50 hover:bg-gray-100 rounded-full bottom-4 w-56 h-12 mx-auto flex items-center justify-center select-none font-semibold cursor-pointer'
        // >
        //   Sign out
        // </div>
        <div
          role='button'
          onClick={() => signIn()}
          className='sticky bg-gray-50 hover:bg-gray-100 rounded-full bottom-4 w-56 h-12 mx-auto flex items-center justify-center select-none font-semibold cursor-pointer'
        >
          Sign in
        </div>
      )}
    </>
  );
}
