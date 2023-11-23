import React from 'react';
import DockButtonWrapper from './ui/DockButton';
import RoundIcon from './ui/icons/RoundIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconSize } from '@/model/icon';

type Props = IconSize & {
  menu: { path: string; icon: string };
  dock?: boolean;
};
export default function MenuButton({
  menu,
  size = 'base',
  dock = true,
}: Props) {
  const pathName = usePathname();
  const { path, icon } = menu;

  return (
    <Link href={path}>
      <DockButtonWrapper dock={dock}>
        <RoundIcon
          name={icon}
          filled={pathName === path ? true : false}
          size={size}
        />
      </DockButtonWrapper>
    </Link>
  );
}
