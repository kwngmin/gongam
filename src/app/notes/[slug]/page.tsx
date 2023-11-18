import { FullNote } from '@/model/note';
import useSWR from 'swr';

type Props = {
  params: { slug: String };
};
export default async function NotePage({ params: { slug } }: Props) {
  const {
    data: note,
    isLoading,
    error,
  } = useSWR<FullNote>(`/api/search/${slug}`);
  return (
    <>
      {/* <Title titleData={titleData} /> */}
      <p className='text-black/80 break-keep'>ksdjksdk</p>
      {/* <Link href={`/log`}> */}
      <button className='text-slate-400 my-8 font-medium hover:text-slate-700'>
        #Things
      </button>
      {/* </Link> */}
    </>
  );
}
