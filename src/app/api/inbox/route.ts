import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getAllFeeds, getAllNotes, getInboxNotes } from '@/service/notes';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const username = user?.username;

  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }

  if (username) {
    return getInboxNotes(username).then(data => NextResponse.json(data));
  }
  return;
  // return getAllNotes().then(data => NextResponse.json(data));
}
