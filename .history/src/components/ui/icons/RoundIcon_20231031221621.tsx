type Props = {
  filled?: boolean;
  size?: string;
  name: string;
};
export default function RoundIcon({ filled = false, size, name }: Props) {
  return <span className='material-symbols-rounded fillIcon'>{name}</span>;
}
