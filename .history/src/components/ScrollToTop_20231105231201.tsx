'use client'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollToTop() {
      const pathName = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
    return (
    
    );
}

