type Props = { image?: string | null; fill?: boolean; dock?: boolean };

export default function Avatar({ image, fill = false, dock = true }: Props) {
  return (
    <div
      className={`rounded-full flex justify-center items-center ${
        dock ? 'w-16 h-8' : 'w-9 h-9'
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
