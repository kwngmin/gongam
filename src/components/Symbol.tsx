import noteshaker from '../images/noteshaker.svg';
import Image from 'next/image';

export default function Symbol() {
  return (
    <Image src={noteshaker} alt='noteshaker logo' className='w-6 h-6 mr-1' />
  );
}
