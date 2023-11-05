import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect, useRouter } from 'next/navigation';

export default async function NewPostPage() {
  const session = await getServerSession(authOptions);
  const router = useRouter();
  if (!session) {
    redirect('/auth/signin');
  }
  return <p></p>;
}
