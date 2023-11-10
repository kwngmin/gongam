'use client';
import { FullNote } from '@/model/note';
import InputText from './InputText';

type Props = {
  note: FullNote;
};
export default function NoteDetail({ note }: Props) {
  return (
    <div>
      <InputText />
    </div>
  );
}
