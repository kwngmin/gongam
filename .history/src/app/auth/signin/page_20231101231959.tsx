import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
// import { authOptions } from '@/components/commons/lib/auth';
import { redirect } from 'next/navigation';
import Signin from '../../../components/Signin';

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
