import { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import { Montserrat } from 'next/font/google';

import Navbar from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import TranslationsProvider from '@/components/TranslationsProvider';
import initTranslations from '../i18n';
import i18nConfig from '@/i18nConfig';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Lubos Jurca',
  description: 'Personal website of Lubos Jurca',
};
export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ['all'];

export default async function MainLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <ViewTransitions>
      <html lang='en'>
        <body
          className={`${montserrat.className} bg-gradient-to-r  from-[#203a3d] text-primaryLight  py-4 to-[#0d0e0e] mx-auto  max-w-7xl flex flex-col min-h-screen  `}
        >
          {' '}
          <TranslationsProvider
            locale={locale}
            namespaces={i18nNamespaces}
            resources={resources}
          >
            <Navbar />
            <Separator className='bg-primaryDark my-8 ' />
            <main className='container mx-auto flex-1  grid place-content-stretch '>
              {children}
            </main>
            <Separator className='bg-primaryDark my-8 ' />
            <Footer />
            <Toaster />
          </TranslationsProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
