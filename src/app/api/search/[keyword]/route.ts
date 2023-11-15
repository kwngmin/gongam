import { searchNotes } from '@/service/notes';
import { NextRequest, NextResponse } from 'next/server';

type context = {
  params: { keyword: string };
};
export async function GET(_: NextRequest, context: context) {
  return searchNotes(context.params.keyword).then(data =>
    NextResponse.json(data)
  );
}
