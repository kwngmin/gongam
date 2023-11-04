import Title from '@/components/ui/Title';

export default function Home() {
  const titleData = {
    title: `Notes`,
    description: `Record of thought, moments, feelings that I don't want to forget.`,
  };
  return (
    <section>
      <Title titleData={titleData} />
      <li className='flex flex-col lg:flex-row lg:items-center justify-center lg:justify-start pt-4 pb-5 lg:py-0 lg:h-16 border-t gap-0 lg:gap-4 pl-4 lg:px-4'>
        <h3 className='font-bold text-lg text-black/80'>sdfsfsdfsdfsdfsdf</h3>
        <section className='text-black/50 lg:text-sm flex items-center flex-wrap'>
          sdfsdfsdfsdfsdfsdfsdf
          <div className='inline-block border-l h-3 mx-2 ' />
          sdfsdfsdfsdf
        </section>
      </li>
    </section>
  );
}
