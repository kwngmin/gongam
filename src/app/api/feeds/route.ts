import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getAllFeeds, getAllNotes } from '@/service/notes';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  // if (!user) {
  //   return new Response('Authentication Error', { status: 401 });
  // }
  return getAllFeeds().then(data => NextResponse.json(data));
  // return getAllNotes(user.username).then(data => NextResponse.json(data));
}
