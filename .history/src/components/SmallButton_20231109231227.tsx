import RoundIcon from './ui/icons/RoundIcon';

type Props = {
  func: () => void;
  icon: string;
  text: string;
};

export default function SmallButton({ func, icon, text }: Props) {
  return (
    <span
      onClick={func}
      className='w-fit h-fit flex items-center gap-1 cursor-pointer active:bg-slate-200 rounded text-slate-500 select-none text-sm font-medium px-2'
    >
      <RoundIcon name={icon} filled style='small text-slate-500' />
      {text}
    </span>
  );
}
