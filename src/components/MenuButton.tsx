import React from 'react';
import DockButtonWrapper from './ui/DockButton';
import RoundIcon from './ui/icons/RoundIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  menu: { path: string; icon: string };
  size: string;
};
export default function MenuButton({ menu, size }: Props) {
  const pathName = usePathname();
  const { path, icon } = menu;

  return (
    <Link href={path}>
      <DockButtonWrapper>
        <RoundIcon
          name={icon}
          filled={pathName === path ? true : false}
          style={size}
        />
      </DockButtonWrapper>
    </Link>
  );
}
