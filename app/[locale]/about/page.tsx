import initTranslations from '@/app/i18n';
import ImageCarousel from '@/components/ImageCarousel';

const i18nNamespaces = ['all'];

const About = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <section className='flex flex-col text-center  py-10  gap-8'>
      <div className='flex gap-4 justify-center  items-center'>
        <div className='w-3 h-full bg-decoration'></div>
        <h1>{t('AboutPage.title')}</h1>
      </div>

      <p>{t('AboutPage.p-1')}</p>
      <p>{t('AboutPage.p-2')}</p>
      <p>{t('AboutPage.p-3')}</p>
      <p>{t('AboutPage.p-4')}</p>
      <ImageCarousel />
    </section>
  );
};
export default About;
