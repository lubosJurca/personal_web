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
import initTranslations from '@/app/i18n';
// import { Link } from "next-view-transitions"

const i18nNamespaces = ['all'];

const Projects = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <section className='text-center py-10'>
      <div className='container '>
        <div className='flex flex-col gap-4 justify-center pb-10 items-center'>
          <div className='flex gap-4 justify-center  items-center'>
            <div className='w-3 h-8 bg-decoration'></div>
            <h1>{t('ProjectsPage.title')}</h1>
          </div>

          <blockquote className=' relative  bg-transparent text-primaryLight italic p-8 rounded-lg  '>
            <span className='absolute top-0 left-0 text-[4rem] text-primaryLight leading-none'>
              &ldquo;
            </span>
            <p>{t('ProjectsPage.blockquote.p-1')}</p>
            <p className='mt-2'>{t('ProjectsPage.blockquote.p-2')}</p>
            <span className='absolute -bottom-10 right-2 text-[4rem] text-primaryLight '>
              &rdquo;
            </span>
          </blockquote>
        </div>

        <div className='flex flex-col justify-around'>
          {/* Project Card */}
          <Card className='bg-transparent border-none shadow-none'>
            <CardHeader className='flex flex-col items-center justify-center gap-3'>
              <CardTitle className='text-primaryLight  underline text-3xl'>
                Invoice App
              </CardTitle>
              <Image
                src={mernAppScreenshot}
                alt='Project Screenshot'
                className='max-w-60 h-40 object-cover rounded-lg mb-4'
              />
              <CardDescription className='text-primaryLight'>
                {t('ProjectsPage.shortDescription')}
              </CardDescription>
            </CardHeader>

            <CardFooter className='flex justify-center gap-1'>
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
          <Card className='bg-transparent border-none shadow-none p-0'>
            <CardHeader>
              <CardTitle className='text-primaryLight text-2xl'>Info</CardTitle>

              <CardDescription className='text-primaryLight'>
                {t('ProjectsPage.info')}
              </CardDescription>
            </CardHeader>
            <CardContent className='text-primaryLight flex flex-col gap-8'>
              <div>
                <h2>Frontend</h2>
                <div className='flex flex-col gap-4'>
                  <p>{t('ProjectsPage.frontend.p-1')}</p>
                  <p>{t('ProjectsPage.frontend.p-2')}</p>
                  <p>{t('ProjectsPage.frontend.p-3')}</p>
                </div>
              </div>
              <div>
                <h2>Backend</h2>
                <div className='flex flex-col gap-4'>
                  <p>{t('ProjectsPage.backend.p-1')}</p>
                  <p>{t('ProjectsPage.backend.p-2')}</p>
                  <p>{t('ProjectsPage.backend.p-3')}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className='flex flex-col gap-2'>
              <h2 className='text-primaryLight'>Technologies</h2>
              <InvoiceAppTechStack />
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default Projects;
