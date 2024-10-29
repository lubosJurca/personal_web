import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Toaster } from '@/components/ui/toaster';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { locales } from '@/config';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Lubos Jurca',
  description: 'Personal website of Lubos Jurca',
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function MainLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <>
      {' '}
      {/* <div> */}
      <NextIntlClientProvider messages={messages}>
        <Navbar />
        <Separator className='bg-primaryDark my-8 ' />
        <main className='flex-1  grid place-content-stretch '>{children}</main>
        <Separator className='bg-primaryDark my-8 ' />
        <Footer />
        <Toaster />{' '}
      </NextIntlClientProvider>
      {/* </div> */}
    </>
  );
}

// #242323
