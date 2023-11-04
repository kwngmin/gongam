import Title from '@/components/ui/Title';

export default function Home() {
  const titleData = {
    title: `Notes`,
    description: `Record of thought, moments, feelings that I don't want to forget.`,
  };
  return (
    <section className='h-screen'>
      <Title titleData={titleData} />
      <ul>
        <li className='flex flex-col lg:justify-start pt-4 pb-5 lg:py-0 lg:h-16 border-t gap-0 lg:gap-4 pl-4 lg:px-4'>
          <h3 className='font-bold text-lg text-black/80'>블로그 시작하기</h3>
          <section className='text-black/50 lg:text-sm flex items-center flex-wrap'>
            2023년 4월 11일 (6개월 전)
            <div className='inline-block border-l h-3 mx-2 ' />
            디자인을 그만두고 개발자가 되기 위해 집에서 시간을 보낸지도 1년이
            넘었다. 부트캠프를 수료하고 구직자인 채로 집에서 보내는 시간이
            치열하지 않고 지금 이 생활이 몸에 베여 내 몸이 점점 무감각 해지고
            있다는 생각이 들었다. 일상을 기록하지 않으면 안 될것 같은 위기의식이
            들었다.
          </section>
        </li>
      </ul>
    </section>
  );
}
