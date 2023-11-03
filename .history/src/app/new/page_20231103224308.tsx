import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/dist/server/api-utils';

export default async function NewPostPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/auth/signin');
  }
  return <p>new</p>;
}