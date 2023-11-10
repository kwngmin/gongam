import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getAllNotes } from '@/service/notes';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { Context } from 'react';

export async function GET(request: NextRequest, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }
  return getAllNotes(user.username).then(data => NextResponse.json(data));
}
