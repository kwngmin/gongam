import NotePost from '@/components/NotePost';
import Title from '@/components/ui/Title';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function InboxPage() {
  const session = await getServerSession(authOptions);
  const titleData = {
    title: `Inbox`,
    subtitle: 'Private',
    description: `128 Note and 12 Private Notes.`,
  };
  if (!session) {
    redirect('/auth/signin');
  }
  return (
    <section className='max-w-screen-md mx-auto px-4 h-fit pb-10'>
      <Title titleData={titleData} />
      <NotePost />
    </section>
  );
}
