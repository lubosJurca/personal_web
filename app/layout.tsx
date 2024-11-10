import { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import { Montserrat } from 'next/font/google';

import Navbar from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Lubos Jurca',
  description: 'Personal website of Lubos Jurca',
};

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body
          className={`${montserrat.className} bg-gradient-to-r  from-[#203a3d] text-primaryLight  py-4 to-[#0d0e0e] mx-auto  max-w-7xl flex flex-col min-h-screen  `}
        >
          <Navbar />
          <Separator className='bg-primaryDark my-8 ' />
          <main className='flex-1  grid place-content-stretch '>
            {children}
          </main>
          <Separator className='bg-primaryDark my-8 ' />
          <Footer />
          <Toaster />
        </body>
      </html>
    </ViewTransitions>
  );
}
