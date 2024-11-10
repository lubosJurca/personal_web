'use client';

// import { Link } from 'next-view-transitions';
import Link from 'next/link';
import MobileNavigation from './MobileNavigation';
import { LINKS } from '@/lib/links';
import { useMediaQuery } from '@/hooks/use-media-query';

const Navbar = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <header>
      <nav className='flex p-4 sm:p-2 items-center justify-end'>
        {isDesktop ? (
          <ul className='hidden sm:flex gap-14 font-bold text-2xl'>
            {LINKS.map((link) => (
              <li key={link.id} className='hover:text-teal-800  transition-all'>
                <Link href={link.href} prefetch={false}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <MobileNavigation />
        )}
      </nav>
    </header>
  );
};
export default Navbar;
