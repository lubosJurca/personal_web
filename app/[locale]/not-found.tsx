'use client';

// import Link from 'next/link';
import { Link } from 'next-view-transitions';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation('all');

  return (
    <section className='min-h-screen flex flex-col items-center justify-center bg-transparent text-[#f5f5f5] px-6'>
      <h1 className='text-8xl font-extrabold text-[#e94f37] mb-4 animate-pulse'>
        404
      </h1>
      <h2 className='text-2xl md:text-3xl font-semibold text-center mb-2'>
        {t('NotFound.title')}
      </h2>
      <p className='text-lg md:text-xl text-gray-400 text-center max-w-lg'>
        {t('NotFound.text')}
      </p>
      <Link href='/' passHref>
        <button className='mt-8 px-8 py-3 bg-[#e94f37] text-white rounded-lg shadow-lg hover:bg-[#d44030] transition duration-300 ease-in-out'>
          {t('NotFound.button')}
        </button>
      </Link>
    </section>
  );
}
