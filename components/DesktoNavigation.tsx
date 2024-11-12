import { LINKS } from '@/lib/links';
import { Link } from 'next-view-transitions';
// import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const DesktoNavigation = () => {
  const { t } = useTranslation('all');

  return (
    <ul className='sm:flex gap-14 font-bold text-2xl'>
      {LINKS.map((link) => (
        <li key={link.id} className='hover:text-teal-800  transition-all'>
          <Link href={link.href} prefetch={false}>
            {t(`Navbar.${link.label}`)}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default DesktoNavigation;
