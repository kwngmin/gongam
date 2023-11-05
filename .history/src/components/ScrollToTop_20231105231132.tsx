import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
      const pathName = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
    return (
    
    );
}

