'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function BookmarksPage() {
  const { data: session } = useSession();
  if (!session) {
    redirect('/auth/signin');
  }
  return <p>bookmarks</p>;
}
