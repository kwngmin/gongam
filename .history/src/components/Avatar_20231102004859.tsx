type Props = { image?: string | null };

export default function Avatar({ image }: Props) {
  return (
    <div className='rounded-full w-8'>
      <img src={image ?? undefined} alt='user profile' />
    </div>
  );
}
