import Title from '@/components/Title';

export default function Home() {
  const titleData = {
    title: `Things`,
    description: `Record of thought, moments, feelings that I don't want to forget.`,
  };
  return (
    <section>
      <Title titleData={titleData} />
    </section>
  );
}
