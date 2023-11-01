import Title from '@/components/ui/Title';
import { getSession, useSession } from 'next-auth/react';

export default function Home() {
  const titleData = {
    title: `Notes`,
    description: `Record of thought, moments, feelings that I don't want to forget.`,
  };
  console.log(getSession);
  console.log(useSession);
  return (
    <section>
      <Title titleData={titleData} />
    </section>
  );
}
