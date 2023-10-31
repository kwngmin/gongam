type Props {
    filled?: boolean
}
export default function RoundIcon({filled = false, size, name}: Props) {
    return (
      <span className='material-symbols-rounded fillIcon'>add_circle</span>
    );
}

