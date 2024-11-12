'use client';

import MobileNavigation from './MobileNavigation';
import LanguageChanger from './LanguageChanger';
import DesktoNavigation from './DesktoNavigation';
import { useMediaQuery } from '@/hooks/use-media-query';

const Navbar = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <header>
      <nav className='flex p-4 sm:p-2 items-center justify-between'>
        <LanguageChanger />
        {isDesktop ? <DesktoNavigation /> : <MobileNavigation />}
      </nav>
    </header>
  );
};
export default Navbar;
