'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function InboxPage() {
  const { data: session } = useSession();
  if (!session) {
    redirect('/auth/signin');
  }
  return <p>inbox</p>;
}
