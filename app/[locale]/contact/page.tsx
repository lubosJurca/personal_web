import ContactForm from '@/components/ContactForm';

import SocialIcons from '@/components/SocialIcons';
import OtherContactInfo from '@/components/OtherContactInfo';
import initTranslations from '@/app/i18n';
import { i18nNamespaces } from '@/lib/namespaces';

const Contact = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <section className='container mx-auto py-10 px-4 lg:px-0'>
      <header className='text-center mb-8'>
        <div className='flex gap-4 justify-center  items-center '>
          <div className='w-3 h-8 bg-decoration'></div>
          <h1>{t('ContactPage.title')}</h1>
        </div>

        <p className='mt-4'>{t('ContactPage.description')}</p>
      </header>

      {/* Contact Form */}
      <div className='w-full max-w-md mx-auto'>
        <ContactForm />
      </div>

      {/* Other Contact Info */}
      <OtherContactInfo />

      {/* Social Icons */}
      <SocialIcons />
    </section>
  );
};
export default Contact;
