import Title from '@/components/ui/Title';

export default function Home() {
  const titleData = {
    title: `Notes`,
    description: `Record of thought, moments, feelings that I don't want to forget.`,
  };
  return (
    <section>
      <Title titleData={titleData} />
    </section>
  );
}
