'use client';
import RoundIcon from './ui/icons/RoundIcon';
import { BsFillChatFill } from 'react-icons/bs';

export default function NotePost() {
  return (
    <div className='py-8 border-t border-gray-300'>
      <h2 className='text-xl lg:text-2xl font-bold lg:font-medium text-black/80'>
        블로그 시작하기
        <div className='flex justify-between items-center my-3'>
          <div className='flex items-center gap-2'>
            <RoundIcon name='favorite' style='' />
            <span className='border-l border-gray-300 flex h-4' />
            <span className='font-semibold text-black/70'>287</span>
          </div>
          <div className='flex items-center gap-3'>
            <RoundIcon name='link' style='' />
            <RoundIcon name='bookmark' style='' />
          </div>
        </div>
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
      <div className='flex flex-col gap-1'>
        <div className='flex items-center gap-2'>
          <span className='text-slate-500 font-medium'>6시간 전 댓글</span>
          {/* <RoundIcon filled name='chat' style='' /> */}
          사이드 프로젝트로 하고 있는 reflow 반응이 점점 좋아지고 있다.
        </div>
        <span className='w-fit cursor-pointer py-1 px-2 bg-slate-100 rounded text-slate-500 select-none font-medium'>
          {/* 댓글 달기 */}
          댓글 <span className='font-medium text-slate-700'>19</span>개 모두
          보기
        </span>
      </div>
    </div>
  );
}
