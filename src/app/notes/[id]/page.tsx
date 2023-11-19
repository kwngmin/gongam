import ExpandNote from '@/components/ExpandNote';
import { getNoteDetail } from '@/service/notes';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};
export default async function NotePage({ params: { id } }: Props) {
  const note = await getNoteDetail(id);

  if (!note) {
    notFound();
  }
  // console.log(note);
  return <ExpandNote note={note} />;
}
