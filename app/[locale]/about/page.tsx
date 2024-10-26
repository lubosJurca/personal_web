import ImageCarousel from '@/components/ImageCarousel';
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations('AboutPage');
  return (
    <section className='flex flex-col text-center  py-10  gap-8'>
      <div className='flex gap-4 justify-center  items-center'>
        <div className='w-3 h-full bg-decoration'></div>
        <h1>{t('title')}</h1>
      </div>

      <p>{t('p-1')}</p>
      <p>{t('p-2')}</p>
      <p>{t('p-3')}</p>
      <p>{t('p-4')} </p>
      <ImageCarousel />
    </section>
  );
};
export default About;
