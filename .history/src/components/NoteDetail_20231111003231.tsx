'use client';
import { FullNote } from '@/model/note';
import InputText from './InputText';
import useSWR from 'swr';

type Props = {
  note: FullNote;
};
export default function NoteDetail({ note }: Props) {
  const { id, notetitle, createdAt, comments } = note;
  const { data } = useSWR<FullNote>(`/api/notes/${id}`);
  return (
    <div>
      <InputText />
    </div>
  );
}
