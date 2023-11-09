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
      className='w-fit h-fit flex items-center gap-1 cursor-pointer py-1 px-2 bg-slate-100 active:bg-slate-200 rounded text-slate-500 select-none text-sm font-medium'
    >
      <RoundIcon name={icon} filled style='small text-slate-500' />
      {text}
    </span>
  );
}
