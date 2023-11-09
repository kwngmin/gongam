export default function SmallButton() {
  return (
    <span
      onClick={() => focusInput()}
      className='w-fit flex items-center gap-1 cursor-pointer py-1 px-2 bg-slate-100 active:bg-slate-200 rounded text-slate-500 select-none text-sm font-medium'
    >
      <RoundIcon
        name='sentiment_satisfied'
        filled
        style='small text-slate-500'
      />
      댓글 쓰기
    </span>
  );
}
