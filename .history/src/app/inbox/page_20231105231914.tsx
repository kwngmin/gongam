import NotePost from '@/components/NotePost';
import Title from '@/components/ui/Title';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default async function InboxPage() {
  const session = await getServerSession(authOptions);
  const titleData = {
    title: `Inbox`,
    description: `Record of thought, moments, feelings that I don't want to forget.`,
  };
  if (!session) {
    redirect('/auth/signin');
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='max-w-screen-md mx-auto px-4 h-fit pb-10'>
      <Title titleData={titleData} />
      <NotePost />
    </section>
  );
}
