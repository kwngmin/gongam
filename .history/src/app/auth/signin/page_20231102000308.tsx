import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Signin from '@/components/Signin';

type Props = {
  searchParams: { callbackUrl: string };
};

export default async function SignInPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/');
  }

  const providers = (await getProviders()) ?? {};
  return <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />;
}
