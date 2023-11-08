import dynamic from 'next/dynamic';
const PulseLoader = dynamic(
  () => import('react-spinners').then(lib => lib.PulseLoader),
  { ssr: false }
);

export default function LazySpinner() {
  return <PulseLoader size={10} color='gray' />;
}
