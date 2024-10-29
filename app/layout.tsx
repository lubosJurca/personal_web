import { getMessages } from 'next-intl/server';
import { ViewTransitions } from 'next-view-transitions';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default async function MainLayout({
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
          className={`${montserrat.className} bg-gradient-to-r  from-[#203a3d] text-primaryLight  py-4 to-[#0d0e0e] mx-auto  max-w-7xl flex flex-col min-h-screen  `}
        >
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
