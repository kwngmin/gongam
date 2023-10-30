import Title from '@/components/Title';

export default function Home() {
  const titleData = {
    title: `Things`,
    description: `I've switched to front-end developer from UX/UI designer to make real product and not just stay in design. I have experience working in startups and have designed 2 platforms.`,
  };
  return (
    <section>
      <Title titleData={titleData} />
    </section>
  );
}
