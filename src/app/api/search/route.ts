import { searchNotes } from '@/service/notes';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return searchNotes().then(data => NextResponse.json(data));
}
