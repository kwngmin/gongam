type Props = { image?: string | null };

export default function Avatar({ image }: Props) {
  return (
    <div className='rounded-full w-6 overflow-hidden select-none border p-1'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image ?? undefined} alt='user profile' />
    </div>
  );
}
