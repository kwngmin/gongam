type Props = {
  filled?: boolean;
  style?: string;
  name: string;
};
export default function RoundIcon({
  filled = false,
  style,
  name = 'add',
}: Props) {
  return (
    <span
      className={`material-symbols-rounded ${
        filled ? 'filled' : ''
      } ${style} select-none`}
    >
      {name}
    </span>
  );
}
