'use client';
import RoundIcon from './ui/icons/RoundIcon';
import { BsFillChatFill } from 'react-icons/bs';

export default function NotePost() {
  return (
    <div className='py-8 border-t border-gray-300'>
      <h2 className='text-xl lg:text-2xl font-semibold text-black/80'>
        블로그 시작하기
      </h2>
      <time className='text-black/60 text-sm'>2023년 4월 11일 (6개월 전)</time>
      <div className='text-black/80 mt-2 break-keep'>
        <p>
          디자인을 그만두고 개발자가 되기 위해 집에서 시간을 보낸지도 1년이
          넘었다. 부트캠프를 수료하고 구직자인 채로 집에서 보내는 시간이
          치열하지 않고 지금 이 생활이 몸에 베여 내 몸이 점점 무감각 해지고
          있다는 생각이 들었다. 일상을 기록하지 않으면 안 될것 같은 위기의식이
          들었다.
        </p>
      </div>
      <div className='flex justify-between items-center mt-2'>
        <div className='flex items-center gap-2'>
          <span>
            공감 <span className='font-semibold'>287</span>
          </span>
          <span className='border-l border-gray-300 flex h-4' />
          {/* <span>
            댓글 <span className='font-semibold'>287</span>
          </span> */}
        </div>
        <div className='flex items-center gap-2'>
          {/* <RoundIcon filled name='bookmark' style='text-emerald-600' /> */}
          <RoundIcon name='favorite' style='' />
          <span className='border-l border-gray-300 flex h-4' />
          <RoundIcon name='bookmark' style='' />
        </div>
      </div>
      <span className='py-1 rounded text-slate-500 select-none font-medium'>
        {/* 댓글 달기 */}
        댓글 <span className='font-medium'>19</span>개 보기
      </span>
    </div>
  );
}
