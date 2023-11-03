import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function BookmarksPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/auth/signin');
  }
  return <p>bookmarks</p>;
}
