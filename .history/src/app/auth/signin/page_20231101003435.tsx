import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/dist/server/api-utils';

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/');
  }
  return;
}
