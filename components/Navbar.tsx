'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const LINKS = [
    {
      id: 1,
      href: '/',
      label: 'Domů',
    },
    {
      id: 2,
      href: '/about',
      label: 'O mně',
    },
    {
      id: 3,
      href: '/projects',
      label: 'Projekty',
    },
    {
      id: 4,
      href: '/contact',
      label: 'Kontakt',
    },
  ];

  return (
    <header>
      <nav className='flex justify-end'>
        <ul className='flex gap-14 font-bold text-2xl'>
          {LINKS.map((link) => (
            <li key={link.id} className='hover:text-teal-800  transition-all'>
              <Link
                href={link.href}
                className={pathname === link.href ? 'text-teal-400  ' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
