import { IconSize } from '@/model/icon';

type Props = IconSize & {
  filled?: boolean;
  name: string;
};

export default function RoundIcon({
  filled = false,
  size = 'base',
  name = 'add',
}: Props) {
  return (
    <span
      className={`material-symbols-rounded ${
        filled ? 'filled' : ''
      } ${size} select-none`}
    >
      {name}
    </span>
  );
}
