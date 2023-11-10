import RoundIcon from './ui/icons/RoundIcon';

type Props = {
  func: () => void;
  icon: string;
  text: string;
};

export default function SmallTextIconButton({ func, icon, text }: Props) {
  return (
    <span
      onClick={func}
      className='w-fit p-2 flex shrink-0 items-center gap-1 cursor-pointer active:bg-slate-100 rounded text-slate-500 select-none text-sm font-medium'
    >
      <RoundIcon name={icon} filled style='small text-slate-600' />
      {text}
    </span>
  );
}
