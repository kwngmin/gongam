type Props = { image?: string | null; fill?: boolean };

export default function Avatar({ image, fill = false }: Props) {
  return (
    <div
      className={`w-16 h-8 rounded-full flex justify-center items-center ${
        fill ? '' : ''
      }`}
    >
      <div className='rounded-full bg-white w-7 h-7 overflow-hidden select-none box-border border-2 border-gray-950 p-[2px]'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image ?? undefined}
          alt='user profile'
          // 외부 링크에서의 xbox 이슈 해결방법
          referrerPolicy='no-referrer'
        />
      </div>
    </div>
  );
}
