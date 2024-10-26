'use client';

// import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Link } from 'next-view-transitions';
import MobileNavigation from './MobileNavigation';
import { LINKS } from '@/lib/links';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';

const Navbar = () => {
  const pathname = usePathname();
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const t = useTranslations('Navbar');

  return (
    <header>
      <nav className='flex p-4 sm:p-2 items-center justify-between'>
        <LocaleSwitcher />
        {isDesktop ? (
          <ul className='hidden sm:flex gap-14 font-bold text-2xl'>
            {LINKS.map((link) => (
              <li key={link.id} className='hover:text-teal-800  transition-all'>
                <Link
                  href={link.href}
                  prefetch={false}
                  // className={pathname === link.href ? 'text-decoration  ' : ''}
                >
                  {t(link.label)}
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
