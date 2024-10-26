import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Toaster } from '@/components/ui/toaster';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Lubos Jurca',
  description: 'Personal website of Lubos Jurca',
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <ViewTransitions>
      <html lang={locale}>
        <body
          className={`${montserrat.className} bg-gradient-to-r  from-[#203a3d] to-[#0d0e0e] antialiased text-primaryLight max-w-7xl mx-auto p-3 sm:p-8 flex flex-col min-h-screen`}
        >
          {' '}
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <Separator className='bg-primaryDark my-8 ' />
            <main className='flex-1  grid place-content-stretch '>
              {children}
            </main>
            <Separator className='bg-primaryDark my-8 ' />
            <Footer />
            <Toaster />{' '}
          </NextIntlClientProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}

// #242323