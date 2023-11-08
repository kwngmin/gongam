export default function InputText() {
  return (
    <form action='' className='py-2'>
      <div className='flex items-center py-1 px-3 border-0 outline-0 bg-slate-50 rounded-2xl gap-2'>
        <input
          className='grow rounded p-2 focus:border-none focus:outline-none bg-transparent'
          type='text'
          placeholder='send message...'
        />
        <button className='px-3 h-8 flex justify-center items-center rounded-full text-sm font-medium bg-gray-200'>
          {/* 댓글 쓰기 */}
          <RoundIcon name='arrow_right_alt' filled style='small' />
        </button>
      </div>
    </form>
  );
}
