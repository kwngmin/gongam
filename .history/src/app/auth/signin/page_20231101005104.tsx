import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
// import { redirect } from 'next/dist/server/api-utils';
import Signin from './Signin';
import { redirect } from 'next/navigation';

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/');
  }
  const providers = (await getProviders()) ?? {};
  return <Signin providers={providers} />;
}
