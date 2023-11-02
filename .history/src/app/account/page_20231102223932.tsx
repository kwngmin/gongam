import Account from '@/components/ui/Account';
import { useSession } from 'next-auth/react';

export default function AccountPage() {
  const { data: session } = useSession();
  return <Account />;
}
