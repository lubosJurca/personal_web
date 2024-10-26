import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import mernAppScreenshot from '@/public/mernApp.png';
import InvoiceAppTechStack from '@/components/InvoiceAppTechStack';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Projects = () => {
  const t = useTranslations('ProjectsPage');
  return (
    <section className='text-center py-10  '>
      <div className='container '>
        <div className='flex gap-4 justify-center pb-10 items-center'>
          <div className='w-3 h-8 bg-decoration'></div>
          <h1>{t('title')}</h1>
        </div>

        <div className='flex flex-col md:flex-row  justify-around'>
          {/* Project Card */}
          <Card className='bg-transparent border-none shadow-none'>
            <CardHeader className='flex flex-col gap-3'>
              <CardTitle className='text-primaryLight flex gap-2 items-center  underline text-3xl'>
                Invoice App
              </CardTitle>
              <Image
                src={mernAppScreenshot}
                alt='Project Screenshot'
                className='w-full h-40 object-cover rounded-lg mb-4'
              />
              <CardDescription className='text-primaryLight'>
                {t('shortDescription')}
              </CardDescription>
            </CardHeader>

            <CardFooter className='flex justify-between gap-1'>
              <Button className='text-primaryLight hover:text-decoration'>
                <Link
                  href='https://github.com/lubosJurca/MERN-Invoice'
                  target='_blank'
                >
                  GitHub
                </Link>
              </Button>
              <Button className='text-primaryLight hover:text-decoration'>
                <Link
                  href='https://mern-invoice-jkgn.onrender.com/'
                  target='_blank'
                >
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className='bg-transparent border-none shadow-none'>
            <CardHeader>
              <CardTitle className='text-primaryLight text-2xl'>Info</CardTitle>

              <CardDescription className='text-primaryLight'>
                {t('info')}
              </CardDescription>
            </CardHeader>
            <CardContent className='text-primaryLight flex flex-col gap-8'>
              <div>
                <h2>Frontend</h2>
                <div className='flex flex-col gap-4'>
                  <p>{t('frontend.p-1')}</p>
                  <p>{t('frontend.p-2')}</p>
                  <p>{t('frontend.p-3')}</p>
                </div>
              </div>
              <div>
                <h2>Backend</h2>
                <div className='flex flex-col gap-4'>
                  <p>{t('backend.p-1')}</p>
                  <p>{t('backend.p-2')}</p>
                  <p>{t('backend.p-3')}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className='flex flex-col gap-2'>
              <h2 className='text-primaryLight'>{t('technologies')}</h2>
              <InvoiceAppTechStack />
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default Projects;
