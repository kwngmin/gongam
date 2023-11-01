import Title from '@/components/ui/Title';
import { getSession } from 'next-auth/react';

export default function Home() {
  const titleData = {
    title: `Notes`,
    description: `Record of thought, moments, feelings that I don't want to forget.`,
  };
  console.log(getSession);
  return (
    <section>
      <Title titleData={titleData} />
    </section>
  );
}
