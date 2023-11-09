type Props = {
  func: () => void;
  text: string;
};
export default function SmallTextbutton() {
  return (
    <span
      onClick={func}
      className='w-fit p-2 flex items-center gap-1 cursor-pointer active:bg-slate-200 rounded text-slate-500 select-none text-sm font-medium'
    >
      {text}
    </span>
  );
}
