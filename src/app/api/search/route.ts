import { searchNotes } from '@/service/notes';
import { NextResponse } from 'next/server';

export async function GET() {
  // return;
  return searchNotes().then(data => NextResponse.json(data));
}
