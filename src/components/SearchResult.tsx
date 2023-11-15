import { FullNote } from '@/model/note';

type Props = {
  note: FullNote;
};
export default function SearchResult({ note }: Props) {
  return <p>{note.notetitle}</p>;
}
