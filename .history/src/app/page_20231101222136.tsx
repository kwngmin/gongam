import Title from '@/components/ui/Title';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const titleData = {
    title: `Notes`,
    description: `Record of thought, moments, feelings that I don't want to forget.`,
  };
  const { data: session } = useSession();
  console.log(session);
  return (
    <section>
      <Title titleData={titleData} />
    </section>
  );
}
