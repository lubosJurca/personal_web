import Image from 'next/image';
import profilePic from '@/public/profile4.jpg';
import TechStack from '@/components/TechStack';
import initTranslations from '../i18n';

const i18nNamespaces = ['all'];

const Home = async ({ params: { locale } }: { params: { locale: string } }) => {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <section className='flex  flex-col py-10 gap-10  items-center p-2'>
      <div className='flex w-full flex-col md:flex-row gap-y-6 justify-evenly items-center'>
        <Image
          alt='Portfolio fotka'
          src={profilePic}
          className='rounded-full w-60 h-60 sm:w-80 sm:h-80 object-cover shadow-lg shadow-decoration  border-2 border-primaryLight '
        />

        <article className='max-w-lg space-y-4 text-center'>
          <h1>Luboš Jurča</h1>
          <div className='flex gap-2 justify-center items-center '>
            <div className='w-2 h-8 bg-decoration'></div>
            <h2>Junior React Developer</h2>
          </div>

          <p className='text-primaryLight'>{t('HomePage.text')}</p>
        </article>
      </div>

      <TechStack />
    </section>
  );
};
export default Home;
