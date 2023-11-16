import { searchNotes } from '@/service/notes';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return await new Response('Authentication Error', { status: 401 });
}
