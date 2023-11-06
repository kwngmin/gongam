'use client';

import { SyncLoader } from 'react-spinners';
import useSWR from 'swr';

export default function NoteList() {
  const { data, isLoading: loading } = useSWR('/api/posts');
  console.log(data);
  return <p>{loading ? <SyncLoader size={8} color='gray'}</p>;
}
