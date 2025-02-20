'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';

type ProjectCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  github: string;
  liveDemo: string;
  technologies: string[];
  info: string;
  frontend: string[];
  backend: string[];
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ProjectCard = (data: ProjectCardProps) => {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={cardVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.3 }}
    >
      <Card className='bg-transparent border-none shadow-none '>
        <CardHeader className='flex flex-col items-center justify-center gap-3'>
          <CardTitle className='text-primaryLight  underline text-3xl'>
            {data.title}
          </CardTitle>
          <Image
            src={data.image}
            alt='Project Screenshot'
            className='size-auto object-cover rounded-lg mb-4'
          />
          <CardDescription className='text-primaryLight'>
            {t(data.description)}
          </CardDescription>
        </CardHeader>

        <CardFooter className='flex justify-center gap-1'>
          <Button className='text-primaryLight hover:text-decoration'>
            <Link href={data.github} target='_blank'>
              GitHub
            </Link>
          </Button>
          <Button className='text-primaryLight hover:text-decoration'>
            <Link href={data.liveDemo} target='_blank'>
              Live Demo
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className='bg-transparent border-none shadow-none p-0'>
        <CardHeader>
          <CardTitle className='text-primaryLight text-2xl'>Info</CardTitle>

          <CardDescription className='text-primaryLight'>
            {t(data.info)}
          </CardDescription>
        </CardHeader>
        <CardContent className='text-primaryLight flex flex-col gap-8'>
          <div>
            <h2 className='mb-2'>Frontend</h2>
            <ul className='list-disc list-inside space-y-2'>
              {data.frontend.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='mb-2'>Backend</h2>
            <ul className='list-disc list-inside space-y-2'>
              {data.backend.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className='flex flex-col gap-2'>
          <h2 className='text-primaryLight'>Technologies</h2>

          <ul className='flex gap-2 justify-center  flex-wrap text-primaryLight'>
            {data.technologies.map((tech, index) => (
              <li
                key={index}
                className='border border-decoration bg-teal-900 rounded-md grid place-content-center p-2 w-fit '
              >
                {tech}
              </li>
            ))}
          </ul>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
export default ProjectCard;
