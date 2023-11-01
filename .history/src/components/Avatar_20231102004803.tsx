type Props = { image?: string | null };

export default function Avatar({ image }: Props) {
  return (
    <div className='rounded-full'>
      <img src={image} alt='avatar' />
    </div>
  );
}
