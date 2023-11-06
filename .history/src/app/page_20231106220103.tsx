import NotePost from '@/components/NotePost';
import Title from '@/components/ui/Title';

export default function Home() {
  const titleData = {
    title: `Notes`,
    subtitle: 'Feeds',
    description: `Record of thought, moments, feelings that I don't want to forget.`,
  };
  return (
    <section className='max-w-screen-md mx-auto px-4 h-fit pb-10'>
      <Title titleData={titleData} />
      <NotePost />
    </section>
  );
}
