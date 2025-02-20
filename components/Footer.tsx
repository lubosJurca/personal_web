'use client';

// import { Link } from '@/i18n/routing';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('all');
  return (
    <footer className='container flex flex-col sm:flex-row gap-8 justify-between text-center p-2'>
      <div className='mb-4'>
        <h2 className='text-2xl font-semibold'>{t('Footer.title')}</h2>
        <p className='text-gray-400'>{t('Footer.text')}</p>
      </div>
      <div>
        {/* <FooterLinks /> */}
        <div className='flex justify-center space-x-6 mb-6'>
          <Link
            href='https://github.com/lubosJurca'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-300'
          >
            <svg
              className='w-6 h-6'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.26.82-.578v-2.04c-3.338.726-4.033-1.614-4.033-1.614-.546-1.387-1.333-1.756-1.333-1.756-1.089-.746.083-.731.083-.731 1.204.083 1.837 1.236 1.837 1.236 1.07 1.834 2.809 1.305 3.492.998.108-.775.419-1.305.762-1.605-2.666-.303-5.467-1.333-5.467-5.932 0-1.312.469-2.385 1.236-3.223-.124-.303-.536-1.526.117-3.18 0 0 1.008-.322 3.301 1.23a11.527 11.527 0 013.004-.404c1.018.005 2.045.137 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.654 1.654.242 2.877.118 3.18.769.838 1.236 1.91 1.236 3.223 0 4.61-2.803 5.624-5.475 5.922.43.371.816 1.1.816 2.215v3.285c0 .319.218.694.824.576C20.565 21.798 24 17.303 24 12 24 5.371 18.629 0 12 0z' />
            </svg>
          </Link>
          <Link
            href='https://www.linkedin.com/in/lubo%C5%A1-jur%C4%8Da-364262237/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-decoration transition-all duration-300'
          >
            <svg
              className='w-6 h-6'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M20.447 20.452H16.81v-5.389c0-1.285-.025-2.945-1.796-2.945-1.798 0-2.074 1.404-2.074 2.852v5.482H9.199v-11.1h3.51v1.518h.051c.488-.921 1.678-1.891 3.454-1.891 3.695 0 4.377 2.432 4.377 5.594v6.879zM5.337 8.433c-1.132 0-2.047-.92-2.047-2.053 0-1.134.915-2.053 2.047-2.053 1.131 0 2.046.919 2.046 2.053 0 1.133-.915 2.053-2.046 2.053zM6.798 20.452H3.878v-11.1h2.92v11.1zM22.225 0H1.771C.791 0 0 .771 0 1.725v20.551C0 23.229.791 24 1.771 24h20.451C23.209 24 24 23.229 24 22.276V1.725C24 .771 23.209 0 22.225 0z' />
            </svg>
          </Link>
        </div>
        <p className='text-gray-500 text-sm'>
          &copy; {new Date().getFullYear()} Lubos Jurca. {t('Footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
