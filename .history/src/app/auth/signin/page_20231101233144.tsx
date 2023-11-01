import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Signin from '../../../components/Signin';
import { authOptions } from '@/app/api/auth/[...nextauth]';

// type Props = {
//   searchParams: { callbackUrl: string };
// };
// {
//   searchParams: { callbackUrl },
// }: Props
export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/');
  }

  const providers = (await getProviders()) ?? {};
  return <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />;
}
