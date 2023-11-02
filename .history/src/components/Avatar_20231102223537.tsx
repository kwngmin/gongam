type Props = { image?: string | null };

export default function Avatar({ image }: Props) {
  return (
    <div className='rounded-full w-7 overflow-hidden select-none border-2 border-gray-950 p-1'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image ?? undefined} alt='user profile' />
    </div>
  );
}
