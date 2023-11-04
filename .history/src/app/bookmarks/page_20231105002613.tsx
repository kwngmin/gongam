import NotePost from '@/components/NotePost';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function BookmarksPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/auth/signin');
  }
  return (
    <section className='max-w-screen-md mx-auto px-4 h-fit'>
      <div className='flex flex-col gap-12'>
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
