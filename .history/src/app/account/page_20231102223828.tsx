import { useSession } from 'next-auth/react';

export default function AccountPage() {
  const { data: session } = useSession();
  return (
    <div>
      <p>account</p>
    </div>
  );
}
