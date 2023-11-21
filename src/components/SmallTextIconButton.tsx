import RoundIcon from './ui/icons/RoundIcon';

type Props = {
  func: () => void;
  icon: string;
  text: string;
  filled?: boolean;
};

export default function SmallTextIconButton({
  func,
  icon,
  text,
  filled = false,
}: Props) {
  return (
    <span
      onClick={func}
      className='w-fit py-1 px-1.5 flex shrink-0 items-center gap-1 cursor-pointer active:bg-slate-100 rounded text-slate-500 select-none text-xs font-medium'
    >
      <RoundIcon
        name={icon}
        filled={filled}
        style='small text-slate-600 mr-0.5'
      />
      {text}
    </span>
  );
}
