import { Span } from 'next/dist/trace';

type TitleData = {
  title: string;
  description: string;
  subtitle?: string;
};
export default function Title({ titleData }: { titleData: TitleData }) {
  const { title, description, subtitle } = titleData;
  return (
    <div className='pt-14 pb-16'>
      <h1 className='text-2xl md:text-3xl font-bold mb-2'>
        <span>{title}</span>
        {subtitle ? <span className='text-gray-400'>/ {subtitle}</span> : ''}
      </h1>
      <p className='text-black/50 break-keep'>{description}</p>
    </div>
  );
}
