import NotePost from '@/components/NotePost';
import Title from '@/components/ui/Title';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function BookmarksPage() {
  const session = await getServerSession(authOptions);
  const titleData = {
    title: `Bookmarks`,
    description: `Record of thought, moments, feelings that I don't want to forget.`,
  };
  if (!session) {
    redirect('/auth/signin');
  }
  return (
    <section className='max-w-screen-md mx-auto px-4 h-fit pb-10'>
      <Title titleData={titleData} />
      <div className='flex flex-col'>
        <NotePost />
        <NotePost />
        <NotePost />
        <NotePost />
        <NotePost />
        <NotePost />
        <NotePost />
        <NotePost />
      </div>
    </section>
  );
}
